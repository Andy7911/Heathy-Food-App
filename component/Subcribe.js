import { StatusBar } from 'expo-status-bar';
import React,{useState,useContext,useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Item, Input, Form, Container, Header, Content, Label, Button, Icon, StyleProvider, Right } from 'native-base';


import { AuthContext } from '../navigate/AuthProvider';
class Subcribe extends React.Component { 
  static contextType = AuthContext;
  constructor(props) {
   
    super(props);
    this.state = {
      password: 0,
      email:'',
      auth:false
    };
  }    
  

    
  render(){
    const { navigation } = this.props;
    const{register,login}=this.context
  return (
 
     
    <Container>
     
      <Content scrollEnabled={false}>
    
        <View style={{ flexDirection: 'row', flex: 2, justifyContent: "center",marginTop:35 }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/GHtvyKY/logo-health-food-eating-vector-fork-logo-46ef4e30c07292c0988b786f43ea8a52.png',
            }}
            style={{ width: 160, height: 250 }}
          />

        </View>
        <Form>
          <Item rounded last floatingLabel>
            <Icon type="FontAwesome" name='envelope' style={{ color: 'black' }} />
            <Label>   Email</Label>
            <Input onChangeText={text=>this.setState({email:text})}  />
          </Item>

          <Item rounded last floatingLabel style={{marginBottom:10}}>
            <Icon type='FontAwesome5' name='key'></Icon>
            <Label>  Password</Label>
            <Input onChangeText={password=>this.setState({password:password})} />
          </Item>
        </Form>
        <Button rounded success style={{ marginTop: 20,marginBottom:10 }} onPress={()=>{ register(this.state.email,this.state.password)
          
        }} block ><Text >Subscribe</Text></Button>
     
      </Content>
    </Container>
    
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    display:'flex',
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth:1,
    backgroundColor:'white'

  }


});

export default Subcribe;