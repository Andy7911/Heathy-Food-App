
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {CardItem,Card,Container,Content,Body} from 'native-base'
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
              </Body>
            </CardItem>
           
         </Card>
         <Card transparent>
            <CardItem >
              <Body>
               <Text style={{color:'green'}}>Ajourter un mode de Paiement</Text>
              </Body>
            </CardItem>
           
         </Card>
       
        </Content>
      </Container>
        )
    }
}
