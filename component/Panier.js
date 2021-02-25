import React,{useContext} from 'react'
import { View ,Image} from 'react-native'
import { AuthContext } from '../navigate/AuthProvider';
import { Container, Header, Content, Card, CardItem, Body, Text, Button } from 'native-base';
export default class Panier extends React.Component {
        static contextType = AuthContext;
        constructor(props) {
   
            super(props);
            this.state = {
            total:0,
            taxe:0.00
            };
          }  


        componentDidMount(){


        }
    render(){
        const { navigation } = this.props;
        const{panier,setPanier}=this.context

        
        const itemsCart = panier.map(item=>{
            return   <Card key={item.id}>
            <CardItem >
              <Body style={{flex:1,flexDirection:'row'}}>
               <Image style={{height:50,width:50}} source={{uri: item.url}} ></Image>
                <Text>
                   {item.nom}
                </Text>
                <Text>
                   prix : {item.prix}
                </Text>
              </Body>
            </CardItem>
          </Card>
        })
       const sum = panier.reduce(function (total, currentValue) {
            return total + currentValue.prix;
        }, 0);
    return (
        <Container>
        <Header />
        <Content>
            { !panier?
            <Text style={{margin:0,textAlign:'center',fontSize:30}}>
                Panier vide
            </Text>:itemsCart}
       
        </Content>
        <Card >
            <CardItem >
              <Body style={{flex:1,flexDirection:'row'}}>
               
                <Text>
               Total  {sum} $
                </Text>
               
                <Button rounded  ><Text>Pay</Text></Button>
              </Body>
            </CardItem>
          </Card>
      </Container>
    )}
} 
