import React from 'react';
import axios from 'axios';
import { StyleSheet, View, Image, ActivityIndicator,Text} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import MainScreen from './MainScreen';

const API_URI = 'https://api.reddit.com/r/pics/hot.json';


class LoadScreen extends React.Component{
    static navigationOptions = {
        title: 'Loading',
        header: null,
    };

    constructor(){
        super();
        this.loadData();
    }
    loadData(){
        axios.get(API_URI)
        .then((result)=>{
            const { navigate } = this.props.navigation;
            navigate('Main', {result})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render(){
        return (
            <View style={{flex:1, justifyContent:'center'}}>
                <View style={{flex:1, justifyContent:'center'}}></View>
                <View style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
                        <Image
                            style={{width: 100, height: 100}}
                            source={require('../assets/images/logo.png')}
                            />
                </View>
                <View style={{flex:1, justifyContent:'center',flexDirection:'row'}}>
                    <Text>Welcome to my app</Text>
                </View>
                <View style={{flex:1, justifyContent:'center',flexDirection:'row'}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                <View style={{flex:1, justifyContent:'center',flexDirection:'row'}}></View>
            </View>
        )
    }
}
export default LoadScreen;