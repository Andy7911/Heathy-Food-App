import React, { Component,useContext,useEffect,useState  } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { AuthContext } from '../navigate/AuthProvider';
import axios from 'axios';
import database from '@react-native-firebase/database'
import { firebase } from '@react-native-firebase/auth';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';

 class  CommandScreen extends React.Component{
  static contextType = AuthContext;
  constructor(props) {
   
    super(props);
    this.state = {
      password: 0,
      dishes:[],
      auth:false
    };
  }  
  //const {logout} =useContext(AuthContext) 
 componentDidMount(){
  const onValueChange = database()
  .ref('Dish')
  .on('value', snapshot => {
    this.setState({dishes:snapshot.val()});
  });

 }
  render(){
  const { navigation } = this.props;
    const{register,login}=this.context
 const dishProduit = this.state.dishes.map(dish=>{return <Card key={dish.id} style={{flex: 0}}>
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
        <Button transparent textStyle={{color: '#87838B',}} >
          <Icon style={{color:'#ffc107'}} name="star" />
          <Text style={{fontSize:19}} >4.6</Text>
       
        </Button>
      </Left>
      <Right>
      <Button full transparent textStyle={{color: '#87838B',}} >
          <Text style={{fontSize:19}}>{dish.prix} $</Text>
          <Text style={{fontSize:19,marginRight:11}}>Add to Cart</Text>
        </Button>
        
      </Right>
    </CardItem>
  </Card>

  })
  
    return (
        <Container>
        
        <Content>
         {dishProduit}
        </Content>
 
      </Container>
    );}
    
  }

  export default CommandScreen;

