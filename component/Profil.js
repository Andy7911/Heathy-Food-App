import React, { Component } from 'react';
import { Container, Header, Content,Text,Icon,Badge,Card,CardItem,Body } from 'native-base';

export default function Profil() {
    return (
        <Container>
        <Header><Badge ><Icon type='FontAwesome5' name="user" ></Icon></Badge></Header>
        <Content scrollEnabled={true}>
        <Card transparent>
            <CardItem>
              <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Icon type='FontAwesome5' name='heart' ></Icon>
                <Text style={{marginLeft:10}}>
                  Vos favorie.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem>
              <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Icon type="FontAwesome5" name="wallet"></Icon>
                <Text style={{marginLeft:10}}>
                  Wallet
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent>
            <CardItem>
              <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Icon type="FontAwesome5" name="cog"></Icon>
                <Text style={{marginLeft:10}}>
                  Parametres
                </Text>
              </Body>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    )
}
