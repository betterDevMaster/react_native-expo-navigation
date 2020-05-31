import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

class DetailScreen extends React.Component{
    static navigationOptions = {
        title: 'Detail',
    };
    constructor(props){
        super();
        // console.log(props.navigation)
        this.state = props.navigation.getParam('detail_url');
        if(!this.state)
            this.state = '';
        console.log(this.state);
    }
    render(){
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <Text>{this.state}</Text>
                <WebView 
                    style={{marginTop: 20}}
                    startInLoadingState={true}
                    source={{uri: this.state}}
                />
            </View>
            );
    }
}
export default DetailScreen;