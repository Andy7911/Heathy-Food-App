import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header,Form,Item,Input,Container,Content, Icon} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class AjouterPaiement extends Component {
    state={
        cardNumber:'',
        cardExp:'',
        cardSecret:'',
        codePostal:'',
    }
    render() {
        return (
            <Container>
           
            <Content>
              <Form>
                  
                <Item style={{marginBottom:25,marginTop:25,borderBottomColor:'black',borderBottomWidth:3}}>
                   <Icon type='FontAwesome5'name='credit-card'/> 
                  <Input  placeholder="Numero de carte " />
                </Item>
                
                <Item style={{justifyContent:'space-between'}}>
                    
                  <Input keyboardType="numeric" placeholder="MM//AA" />
                  <Input placeholder="Code de sécurité"  onChangeText={text=>this.setState({cardSecret:text})}/>
                </Item>
                <Item style={{marginTop:20}} last>
                  <Input  placeholder="code postal"></Input>
                </Item>
               
               
              </Form>
            </Content>
          </Container>
        )
    }
}
