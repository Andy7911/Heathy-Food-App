import React,{useState} from 'react'
import { View,  } from 'react-native'
import { Input, Container, Content, Header, Item, Icon,Text } from 'native-base';
import CreditCardDisplay from 'react-native-credit-card-display';
import { error } from 'console';

export default function PaiementScreen() {
    const [cardNumber,setCardNumber]= useState('4550');
    const [cvc, setCvc] = useState('123');
    const [exp, setexp] = useState('04/02');
    let emailRegex = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/;

    return (

        <Container >
           
            <Content  contentContainerStyle={{flex:6,flexDirection:'column'}}>
                <View style={{alignItems:'center'}}>
                <CreditCardDisplay
                    number={cardNumber}
                    cvc={123}
                    expiration={exp}
                    name="John J. Doe"
                    since="2004"
                />
                </View>
                <View style={{flex:2,marginTop:50}}>
                    <Text style={{fontSize:20}}>Numero de carte</Text>
                <Item success>
                    
                    <Input placeholder='Textbox with Success Input' />
                    <Icon name='checkmark-circle' />
                </Item>
                <Item success style={{marginTop:15}}>
                    <Input placeholder='Textbox with Success Input' />
                    <Icon name='checkmark-circle' />
                </Item>
                </View>
            </Content>
        </Container>
    )
}
