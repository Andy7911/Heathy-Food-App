import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default function Profil() {
    return (
        <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel last>
              <Label>Nom</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Prenom</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Adress</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    )
}
