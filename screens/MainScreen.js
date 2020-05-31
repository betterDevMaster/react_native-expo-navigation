import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PostComponent from '../components/post';

class MainScreen extends React.Component{
    static navigationOptions = {
        title: 'Main',
        header: null,
    };
    constructor(props){
        super();
        this.state = props.navigation.getParam('result').data.data;
    }
    onChangeUserId = (userId)=>{
        console.log(userId);
        this.state.userId = userId;
    }
    render(){
        var post = [];
        for(var i=0; i<this.state.children.length; i++){
            const ele = this.state.children[i]
            console.log(i, ele.data.url);
            post.push(
                <PostComponent 
                    img={ele.data.thumbnail}
                    date= {new Date(ele.data.created).toDateString()} 
                    title={ele.data.title}
                    author={ele.data.author}
                    score={ele.data.score}
                    comments={ele.data.num_comments}
                    url={"https://reddit.com"+ele.data.permalink}
                    navigation = {this.props.navigation}
                />
            );
        }
        return (
            <View  backgroundColor='#453423' style = {{flex:1,justifyContent:"center"}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {post}
                </ScrollView>
            </View>
        )
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    }
})