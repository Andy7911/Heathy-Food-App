import React from 'react';
import { Image,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { CartContext } from '../navigate/CartProvider';
import database from '@react-native-firebase/database'



 class  CommandScreen extends React.Component{
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
  .ref('Dish')
  .on('value', snapshot => {
    this.setState({dishes:snapshot.val()});
  });

 }

  render(){
  const { navigation } = this.props;
    const{panier,login,setPanier,addQuantite}=this.context
 
 const dishProduit = this.state.dishes.map(dish=>{return <Card key={dish.id} style={{flex: 0,marginTop:20,width:'90%',justifyContent:'center',alignContent:'center'}}>
   
    <CardItem key={dish.id}>
      <Left>
        <Thumbnail source={{uri: 'Image URL'}} />
        <Body>
          <Text>{dish.nom}</Text>
          <Text note>April 15, 2016</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem button  onPress={()=>navigation.navigate('Detail',{id:dish.id})}>
      <Body style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={{uri: dish.url}} style={{height: 200, width: 300, flex: 1,justifyContent:'center'}}/>
        <Text>
         {dish.description}
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
          <Text style={{fontSize:15}}> Prix: {dish.prix} $</Text>
      
          <Text onPress={()=>{addQuantite(dish.id,dish)}} style={{fontSize:15,marginRight:11}}>Add to Cart</Text>
        </Button>
        
      </Right>
    </CardItem>
  </Card>

  })
  const sum = panier.reduce(function (total, currentValue) {
    return total + currentValue.sommePrix;
}, 0);
    return (
        <Container>
        
        <Content style={{marginTop:25}}>
        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
         {dishProduit} 
           </View>
        </Content>
        {panier.length ?
       <Button style={{position:'absolute',left:25,right:0,zIndex:-1,bottom:10,width:'90%',justifyContent:'center',backgroundColor:'black'}} >
       <Text>Afficher le panier {sum}  </Text></Button>
       :null}
      </Container>
    );}
    
  }

  export default CommandScreen;

