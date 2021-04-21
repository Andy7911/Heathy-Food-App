import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input } from 'native-base';

export default class testScreen extends Component {
    render() {
        return (
            
            <Container>
            <Header />
            <Content>
              <Form>
                <Item>
                  <Input placeholder="Username" />
                </Item>
                <Item last>
                  <Input placeholder="Password" />
                </Item>
              </Form>
            </Content>
          </Container>
        )
    }
}
