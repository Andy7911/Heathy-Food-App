import React, { useContext } from 'react'
import { Image,StyleSheet } from 'react-native'
import { CartContext } from '../navigate/CartProvider';
import { Container, Header, Content, Card, CardItem, Body, Text, Button,SwipeRow,Icon,View } from 'native-base';
import Modal from './Formulaire';
import Swipeout from 'react-native-swipeout'
import  {Swipeable} from 'react-native-gesture-handler'
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
       
     const swipeLeft=()=>{
return(
<View>
    <Text style={styles.deleteBox}></Text>
</View>)
     }

      
        const itemsCart = panier.map(item => {
            return (
               
              
                
                  <SwipeRow key={item.id}
                    leftOpenValue={50}
                    rightOpenValue={-50}
                    left={
                      <Button success onPress={() =>handleDelete(item.id)}>
                        <Icon active name="add" />
                      </Button>
                    }
                    body={
                        
                        <Card  style={{flex:1,flexDirection:"row",padding:0}}>
                      
                           
                                <Image style={{ height: 100, width: 100 }} source={{ uri: item.url }} ></Image>
                                <Text style={{ marginLeft: 15,fontSize:15}}>
                                    {item.nom}
                                </Text>
                                <Text style={{ marginRight: 15,fontSize:15 }}>
                                     prix: {item.prix} $
                                </Text>
                        
                       
                    </Card>
                    }
                    right={
                      <Button danger onPress={() =>handleDelete(item.id)}>
                        <Icon active name="trash" />
                      </Button>
                    }
                  />
               
             
        
            )
        })
        const sum = panier.reduce(function (total, currentValue) {
            return total + currentValue.prix;
        }, 0);
        return (
            <Container>
                <Header />
                <Content scrollEnabled={false}>
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

const styles = StyleSheet.create({
    deleteBox:{

    }
})