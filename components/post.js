import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button } from 'react-native';


class PostComponent extends React.Component{
    constructor(){
        super()
    }
    onPressDetail(url){
        console.log(url)
        const { navigate } = this.props.navigation;
        navigate('Detail', {detail_url:url})
    }
    render(){
        return(
            <View style={{flex:1, borderSize:3, borderColor:'#123456',flexDirection:'row', backgroundColor:'#E0E0E0', height:100, padding:5, marginTop:2}}>
                <View style={{flex:2, justifyContent:'center', flowDirection:'row'}}>
                <Image
                    style={{width: 80, height: 80}}
                    source={{uri: this.props.img}}
                    />
                </View>
                <View style={{flex:7, }}>
                    <View style={{flex:1, justifyContent:"flex-end", flexDirection:'row', paddingRight:10,}}>
                            <Button
                                onPress={()=>this.onPressDetail(this.props.url)}
                                title="For more detail"
                                color="#841584"
                            />  
                            <Text style={{fontSize:14}}>{this.props.date}</Text>
                    </View>
                    <View style={{flex:2, justifyContent:"center", flowDirection:'row',backgroundColor:'#CCCCCC'}}>
                        <Text style={{textAlignVertical:'center', textAlign:'center', paddingLeft:10, fontSize: 12, fontWeight:'bold'}}>
                        {this.props.title}
                        </Text>
                                              
                    </View>
                    <View style={{flex:1, backgroundColor:'#A0A0A0', flexDirection:'row'}}>
                        <View style={{flex:2, justifyContent:'center', flexDirection:'row', padding:3, backgroundColor:'#ABABAB'}}>
                            <Text style={{fontSize:12}}>{this.props.author}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', flexDirection:'row',padding:3, backgroundColor:'#909090'}}>
                            <Text style={{fontSize:12}}>{this.props.score}</Text>
                        </View>
                        <View style={{flex:1, justifyContent:'center', flexDirection:'row',padding:3, backgroundColor:'#ABABAB'}}>
                            <Text style={{fontSize:12}}>{this.props.comments}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default PostComponent;