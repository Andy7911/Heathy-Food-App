import React, { useContext } from 'react'
import { View, Image } from 'react-native'
import { CartContext } from '../navigate/CartProvider';
import { Container, Header, Content, Card, CardItem, Body, Text, Button } from 'native-base';
import Modal from './Formulaire';
export default class Panier extends React.Component {
    static contextType = CartContext;
    constructor(props) {

        super(props);
        this.state = {
            total: 0,
            taxe: 0.00,
            visible: false,
            monPanier:[{}]
        };
    }
 
  Setvisible =()=>{

            this.setState({visible:!this.state.visible});
        }
        disable =()=>{
            this.setState({visible:!this.state.visible});
        }

    render() {
        const { navigation } = this.props;
        const { panier, setPanier,handleDelete } = this.context
       
      
        const itemsCart = panier.map(item => {
            return <Card key={item.id}>
                <CardItem >
                    <Body style={{ flex: 1, flexDirection: 'row' }}>
                        <Image style={{ height: 50, width: 50 }} source={{ uri: item.url }} ></Image>
                        <Text style={{ marginLeft: 15,fontSize:15}}>
                            {item.nom}
                        </Text>
                        <Text style={{ marginRight: 15,fontSize:15 }}>
                             prix: {item.prix} $
                        </Text>
                        <Button style={{backgroundColor:'red',fontSize:15,width:55,height:25}} onPress={()=>handleDelete(item.id)}><Text style={{fontSize:9}}>sup</Text></Button>
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
                    <Modal visible={this.state.visible} onDisableCallBack={()=>this.disable()} ></Modal>
                    {panier.length==0 ?
                        <Text style={{ margin: 0, textAlign: 'center', fontSize: 30 }}>
                            Panier vide
            </Text> : itemsCart}

                </Content>
                <Card >
                    <CardItem >
                        <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text>
                                Total:  {parseFloat(sum).toFixed(2)}  $
                            </Text>
                            <Text>
                                Taxe:  {parseFloat(sum * 0.1495).toFixed(2)} $
                            </Text>
                            <Button rounded  onPress={()=>this.Setvisible()} ><Text>Pay</Text></Button>
                        </Body>
                    </CardItem>
                </Card>
            </Container>
        )
    }
} 
