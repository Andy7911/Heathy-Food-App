import React, { useState, useContext } from 'react'
import { Text } from 'react-native';
import { Input, Container, Content, Header, Item, Icon, Button, Card, CardItem, Body, View } from 'native-base';
import CreditCardDisplay from 'react-native-credit-card-display';
import { CartContext } from '../navigate/CartProvider';
import axios from 'axios';
import stripe from 'react-native-stripe-payments'



export default function PaiementScreen() {
    const { panier } = useContext(CartContext);
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCvc] = useState('123');
    const [exp, setexp] = useState(" ");
    const [fistLastName, setfistLastName] = useState('');
    const [emailInputError, setemailInputError] = useState(true);
    let emailRegex = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/;
    const sum = panier.reduce(function (total, currentValue) {
        return total + currentValue.sommePrix;
    }, 0);
const paimentCart=()=>{
    stripe.setOptions({ publishingKey: 'sk_test_51IXbaUIWfkAcxuDbhORJKy1A129UBqY56sjKixYaVNUKQWMelehN2zaqPkEmN6gRyP4W8Y9hBhZhuzDEXYL98SYy00cL00H0na' })

    const cardDetails = {
        number: '4242424242424242',
        expMonth: 10,
        expYear: 21,
        cvc: '888',
      }
      debugger
      stripe.confirmPayment('client_secret_from_backend', cardDetails)
      .then(result => {
        console.log(result);
      })
      .catch(err =>
        console.log(err)
      )


}
    return (

        <Container  >

            <Content scrollEnabled={true} contentContainerStyle={{ flexDirection: 'column', alignItems: 'center' }}>

                <CreditCardDisplay style={{ height: 50, with: 100 }}
                    number={cardNumber}
                    cvc={cvc}
                    expiration='04/14'
                    name={fistLastName}

                />

                <View>
                    <Text style={{ fontSize: 15, textAlign: 'left' }}>Numero de carte</Text>
                    <Item regular style={{ width: '90%', height: 50,backgroundColor:'#EEEEFD' }}>

                        <Input maxLength={16} keyboardType='number-pad' placeholderTextColor="#B5B5B5" placeholder='Numero de carte' onChangeText={e => setCardNumber(e)} />
                        <Icon type='FontAwesome' name='lock' />
                    </Item>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    
                    <View style={{ flexDirection: 'column', width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15 }} >Date expiration</Text>
                        <Item regular style={{ marginTop: 15, width: '90%', height: 50,backgroundColor:'#EEEEFD' }}>
                            <Input  placeholderTextColor="#B5B5B5"  style={{ width: '50%', height: 50 }} placeholder='MM/AA' onChangeText={e => setexp(e)} />
                         
                        </Item>
                    </View>
                    <View style={{ flexDirection: 'column', width: '45%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15 }}>Code de sécurité</Text>
                        <Item regular style={{ marginTop: 15, width: '90%', height: 50,backgroundColor:'#EEEEFD' }}>
                            <Input  placeholderTextColor="#B5B5B5" value={cvc} placeholder='3-4 chiffres' onChangeText={e => setCvc(e)} />
                           
                        </Item>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 15 }}>Nom Complet</Text>
                    <Item style={{ width: '90%', height: 50,backgroundColor:'#EEEEFD' }} regular  >

                        <Input  onChangeText={e => setfistLastName(e)} />
                       
                    </Item>
                </View>
                <View>
                    <Text style={{ fontSize: 15 }}>Adresse ligne 1</Text>
                    <Item style={{ width: '90%', height: 50,backgroundColor:'#EEEEFD' }} regular  >
                        <Input  onChangeText={e => setfistLastName(e)} />
                      
                    </Item>
                </View>
                <View>
                    <Text style={{ fontSize: 15 }}>Adresse ligne 2</Text>
                    <Item style={{ width: '90%', height: 50,backgroundColor:'#EEEEFD' }} regular  >

                        <Input  onChangeText={e => setfistLastName(e)} />
                      
                    </Item>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                    <Text style={{ fontSize: 20,textAlign:'left'  }}></Text>
                    <View style={{ flexDirection: 'column', width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15,textAlign:'left' }} >Pays</Text>
                        <Item regular style={{ marginTop: 15, width: '90%', height: 50,backgroundColor:'#EEEEFD' }}>
                            <Input style={{ width: '50%', height: 50 }} maxLength={4} onChangeText={e => setexp(e)} />
                           
                        </Item>
                    </View>
                    <View style={{ flexDirection: 'column', width: '45%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15 }}>Province</Text>
                        <Item regular style={{ marginTop: 15, width: '90%', height: 50,backgroundColor:'#EEEEFD' }}>
                            <Input placeholderTextColor="#B5B5B5"  onChangeText={e => setCvc(e)} />
                            
                        </Item>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 15 }}>Téléphone </Text>
                    <Item style={{ width: '90%', height: 50,backgroundColor:'#EEEEFD' }} regular  >

                        <Input  onChangeText={e => setfistLastName(e)} />
                      
                    </Item>
                </View>

                <View style={{ flexDirection: 'column', width:'90%', alignItems: 'center', justifyContent: 'center' }}>
                    <Card>

                        <CardItem>

                            <Text>
                                Total:{sum}
                            </Text>

                        </CardItem>
                    </Card>
                    <Button full info>
                        <Text>Paiement</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}
