import React, { Component,useContext,useEffect,useState  } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { AuthContext } from '../navigate/AuthProvider';
import axios from 'axios';
import database from '@react-native-firebase/database'
import { firebase } from '@react-native-firebase/auth';

 const CommandScreen=({navigate})=> {
  const [dishes,setDishes] = useState({})
  const {logout} =useContext(AuthContext) 
  useEffect(() => {
    const onValueChange = database()
    .ref('Dish')
    .on('value', snapshot => {
      setDishes(snapshot.val());
    });
  });
 const dishProduit = dishes.map(dish=>{return <Card style={{flex: 0}}>
    <CardItem key={dish.id}>
      <Left>
        <Thumbnail source={{uri: 'Image URL'}} />
        <Body>
          <Text>NativeBase</Text>
          <Text note>April 15, 2016</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Image source={{uri: dish.url}} style={{height: 200, width: 300, flex: 1,opacity:0.5}}/>
        <Text>
          {dish.nom}
        </Text>
      </Body>
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent textStyle={{color: '#87838B'}}>
          <Icon name="logo-github" />
          <Text>1,926 stars</Text>
        </Button>
      </Left>
    </CardItem>
  </Card>

  })
    return (
        <Container>
        
        <Content>
         {dishProduit}
        </Content>
 
      </Container>
    );
  }
  export default CommandScreen;

