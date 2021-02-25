import React,{useContext} from 'react'
import { View } from 'react-native'
import { AuthContext } from '../navigate/AuthProvider';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
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
            <CardItem>
              <Body>
                <Text>
                   {item.nom}
                </Text>
              </Body>
            </CardItem>
          </Card>
        })
    return (
        <Container>
        <Header />
        <Content>
        {itemsCart}
        </Content>
      </Container>
    )}
} 
