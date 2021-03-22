import React, { Component,useContext,useEffect,useState  } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { CartContext  } from '../navigate/CartProvider';
import axios from 'axios';
import database from '@react-native-firebase/database'
import { firebase } from '@react-native-firebase/auth';
import { render } from 'react-dom';
import { color } from 'react-native-reanimated';



class  Dessert extends React.Component{
    static contextType = CartContext;
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
    .ref('Desert')
    .on('value', snapshot => {
      this.setState({dishes:snapshot.val()});
    });
  
   }
    render(){
    const { navigation } = this.props;
      const{panier,login,setPanier,addQuantite}=this.context
   const desertProduit = this.state.dishes.map(desert=>{return <Card key={desert.id} style={{flex: 0,marginTop:20}}>
      <CardItem key={desert.id}>
        <Left>
          <Thumbnail source={{uri: 'Image URL'}} />
          <Body>
            <Text>{desert.nom}</Text>
            <Text note>April 15, 2016</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem style={{justifyContent:'center',alignItems:'center'}}>
        <Body>
          <Image source={{uri: desert.url}} style={{height: 200, width: 400, flex: 1}}/>
          <Text>
           {desert.description}
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{color: '#87838B',}} >
            <Icon style={{color:'#ffc107'}} name="star" />
            <Text style={{fontSize:15}} >4.6</Text>
         
          </Button>
        </Left>
        <Right>
        <Button transparent textStyle={{color: '#87838B',}} >
            <Text style={{fontSize:15}}> Prix: {desert.prix} $</Text>
            <Text  onPress={()=>{addQuantite(desert.id,desert)}} style={{fontSize:15,marginRight:11}}>Add to Cart</Text>
          </Button>
          
        </Right>
      </CardItem>
    </Card>
  
    })
    
      return (
          <Container>
          
          <Content style={{marginTop:25}}>
          
           {desertProduit} 
             
          </Content>
         <Button style={{position:'absolute',left:0,right:0,zIndex:-1}} ><Icon name="cart" ></Icon><Text>{panier.length}</Text></Button>
        </Container>
      );}
      
    }
  
    export default Dessert;