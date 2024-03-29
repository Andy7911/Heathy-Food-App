import React, { Component,useContext } from 'react'
import { View, StyleSheet, Pressable, Modal, TextInput, Image } from 'react-native'
import { Text, Item, Input, Form, Container, Header, Content, Label, Button, Icon, StyleProvider, Right } from 'native-base';
import Stripe from 'react-native-stripe-api';
import {PaiementContext} from '../navigate/PaiementProvider';
export default class Formulaire extends Component {
  static contextType = PaiementContext;
  state = {
    modalVisible: false
  };
componentDidMount(){
  const apiKey = 'pk_test_51IXbaUIWfkAcxuDb2pekojqvQM5MG5yT20dRPosSD11zSSFZh07Qh5t0e35x51HIAAIT42DRkEEC8Li0h5cUpXrk00ET1ZdGpO';
  const client = new Stripe(apiKey);
}
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
action=()=>{


}
  render() {
    const { paiement } = this.context;
    const { modalVisible } = this.state;
    
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");

          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Image source={require('../image/PngItemStripe.png')} style={{ width: 230, height: 75, marginBottom: 10 }} ></Image>
              </View>
              <TextInput placeholder='Credit card' autoCompleteType='cc-number' keyboardType='numeric' autoCorrect style={{ borderWidth: 0.5, borderColor: 'black', width: '100%', borderRadius: 10 }}></TextInput>
              <TextInput placeholder='Credit card 2' style={{ borderWidth: 0.5, borderColor: 'black', width: '100%', borderRadius: 10, marginTop: 10, marginBottom: 10 }}></TextInput>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>paiement()}
              >
                <Text style={styles.textStyle}>Confirmation</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    height: 330,
    width: 300,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
