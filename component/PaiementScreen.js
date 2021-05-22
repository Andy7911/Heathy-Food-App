import React, { useState,useContext } from 'react'

import { Input, Container, Content, Header, Item, Icon, Text,Button,Card,CardItem,Body,View } from 'native-base';
import CreditCardDisplay from 'react-native-credit-card-display';
import { CartContext } from '../navigate/CartProvider';
 



export default function PaiementScreen() {
    const { panier } = useContext(CartContext);
    const [cardNumber, setCardNumber] = useState('4550');
    const [cvc, setCvc] = useState('123');
    const [exp, setexp] = useState('04/02');
    const [fistLastName, setfistLastName] = useState('');
    const [emailInputError, setemailInputError] = useState(true);
    let emailRegex = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/;

    const sum = panier.reduce(function (total, currentValue) {
        return total + currentValue.sommePrix;
    }, 0);

    return (

        <Container  >

            <Content scrollEnabled={true} contentContainerStyle={{ flexDirection: 'column' }}>
                <View style={{ alignItems: 'center'}}>
                    <CreditCardDisplay style={{height:50,with:100}}
                        number={cardNumber}
                        cvc={cvc}
                        expiration={exp}
                        name={fistLastName}
                        
                    />
                </View>
                <View style={{ flex: 1, marginTop: 10,alignItems:'center',textAlign:'right',flexDirection:'column'  }}>
                    <Text style={{ fontSize: 20,textAlign:'left' }}>Numero de carte</Text>
                    <Item  regular   style={{ width: '90%', height: 50 }}>

                        <Input  placeholder='Numero de carte' onChangeText={e => setCardNumber(e)} />
                        <Icon type='FontAwesome' name='lock' />
                    </Item>
                </View>
                <View style={{ flex: 1, marginTop: 10, }}>
                    <Text style={{ fontSize: 20 }}>Prenom et Nom</Text>
                    <Item  style={{ width: '90%', height: 50 }}   >

                        <Input  placeholder='Credit Card' onChangeText={e => setfistLastName(e)} />
                        <Icon name='checkmark-circle' />
                    </Item>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <Text style={{ fontSize: 20 }}></Text>
                    <View style={{ flexDirection: 'column', width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }} >Date expiration</Text>
                        <Item regular style={{ marginTop: 15, width: '90%', height: 50 }}>
                            <Input dataDetectorTypes='calendarEvent' style={{ width: '50%', height: 50 }} placeholder='Textbox with Success Input' onChangeText={e => setexp(e)} />
                            <Icon name='checkmark-circle' />
                        </Item>
                    </View>
                    <View style={{ flexDirection: 'column', width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Code de sécurité</Text>
                        <Item regular style={{ marginTop: 15, width: '90%', height: 50 }}>
                            <Input placeholder='Textbox with Success Input' onChangeText={e => setCvc(e)} />
                            <Icon name='checkmark-circle' />
                        </Item>
                    </View>
                </View>
                <View style={{flexDirection:'column' ,alignItems:'center',justifyContent:'center'}}>
                <Card>
            <CardItem>
              
                <Text>
                   Total:{sum}
                </Text>
            
            </CardItem>
          </Card>
                    <Button full rounded info>
                        <Text>Paiement</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}
