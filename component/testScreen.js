import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export default class testScreen extends Component {
    render() {
        return (
          <View>
          <Text>Image</Text>
            <Image source={require('../image/hambuger.webp')}></Image>
            </View>
      
        )
    }
}
