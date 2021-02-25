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
    const{panier,login,setPanier}=this.context
 const dishProduit = this.state.dishes.map(dish=>{return <Card key={dish.id} style={{flex: 0,marginTop:20}}>
    <CardItem key={dish.id}>
      <Left>
        <Thumbnail source={{uri: 'Image URL'}} />
        <Body>
          <Text>{dish.nom}</Text>
          <Text note>April 15, 2016</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem style={{justifyContent:'center',alignItems:'center'}}>
      <Body>
        <Image source={{uri: dish.url}} style={{height: 200, width: 300, flex: 1,opacity:0.5}}/>
        <Text>
         {dish.Description}
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
      <Button transparent textStyle={{color: '#87838B',}} >
          <Text style={{fontSize:19}}> Prix: {dish.prix} $</Text>
          <Text onPress={()=>{setPanier([...panier,dish])}} style={{fontSize:19,marginRight:11}}>Add to Cart</Text>
        </Button>
        
      </Right>
    </CardItem>
  </Card>

  })
  
    return (
        <Container>
        
        <Content style={{marginTop:25}}>
        
         {dishProduit} 
           
        </Content>
       <Button style={{position:'absolute',left:0,right:0,zIndex:-1}} ><Icon name="cart" ></Icon><Text>{panier.length}</Text></Button>
      </Container>
    );}
    
  }

  export default CommandScreen;

