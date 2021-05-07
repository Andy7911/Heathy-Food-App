import { View,Image,Text } from 'react-native'
import React from 'react'

export default function LoadingSceen() {
    return (
        <View style={{flex:3 ,backgroundColor:'white'}}>
        <View style={{flex:2,flexDirection:'row'}}>
            <Image style={{width:'100%',height:'95%'}} 
            source={require('../image/burger.gif')}>

            </Image>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
            <Text style={{fontSize:24}} >Merci de patienté ...</Text>
            </View>
 
        </View>
    )
}
