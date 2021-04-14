
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {CardItem,Card,Container,Content,Body} from 'native-base'

export default class WalletScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
       
        <Content>
          <Card>
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
         <Text style={{color:'green'}}>Ajourter un mode de Paiement</Text>
        </Content>
      </Container>
        )
    }
}
