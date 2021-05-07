import { View,Image,Text } from 'react-native'
import React from 'react'

export default function LoadingSceen() {
    return (
        <View style={{flex:3 ,backgroundColor:'white',flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
       
            <Image style={{width:'100%',height:'95%',flex:2}} 
            source={require('../image/burger.gif')}>

            </Image>
            
            
            <Text style={{fontSize:24,flex:1}} >Merci de patienté ...</Text>
            
 
        </View>
    )
}
