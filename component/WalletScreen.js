
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {CardItem,Card,Container,Content,Body, Button} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class WalletScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container style={{flex:1, flexDirection:'row',justifyContent:'center'}}>
       
        <Content scrollEnabled={true}  >

          <Card style={{width:'90%'}}>
              
            <CardItem>
              <Body>
                <Text style={{fontSize:50}}>
                 Healty Cash
                </Text>
                <Text style={{fontSize:50,color:'black'}}>
                    0.00$
                </Text>
                <Button rounded style={{backgroundColor:'black',width:200,height:70,justifyContent:'center'}}><Text style={{color:'white',fontSize:18,}}>+ Ajouter des fonds</Text></Button>
              </Body>
            </CardItem>
           
         </Card>
         <Card transparent>
            <CardItem >
              <Body>
               <Text  onPress={()=>navigation.navigate('AjouterPaiement')} style={{color:'green'}}>Ajourter un mode de Paiement</Text>
              </Body>
            </CardItem>
           
         </Card>
       
        </Content>
      </Container>
        )
    }
}
