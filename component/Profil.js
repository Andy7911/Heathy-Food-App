import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text,Icon } from 'native-base';

export default function Profil() {
    return (
        <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel last>
              <Label>Name</Label>
              <Input />
            </Item>
         
            <Item stackedLabel last>
            
              <Icon type='FontAwesome5' name='home'></Icon>
              <Input placeholder='Adress' />
              </Item>
              <Item stackedLabel last>
                <Icon type='FontAwesome5' name='phone' ></Icon>
            
              <Input placeholder='Phone Number' />
            </Item>
            <Item stackedLabel last>
             
              <Input placeholder='Date de naissance' />
            </Item>

          </Form>
          <Button full rounded><Text>Confirmer</Text></Button>
        </Content>
      </Container>
    )
}
