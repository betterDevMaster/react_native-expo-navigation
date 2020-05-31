import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadScreen from './screens/LoadScreen';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const MainNavigator = createStackNavigator({
  Load: { screen: LoadScreen },
  Main: { screen: MainScreen },
  Detail: { screen: DetailScreen },
});

const App = createAppContainer(MainNavigator);

export default App;