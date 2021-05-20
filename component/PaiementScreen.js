import React,{useState} from 'react'
import { View,  } from 'react-native'
import { Input, Container, Content, Header, Item, Icon,Text } from 'native-base';
import CreditCardDisplay from 'react-native-credit-card-display';





export default function PaiementScreen() {
    const [cardNumber,setCardNumber]= useState('4550');
    const [cvc, setCvc] = useState('123');
    const [exp, setexp] = useState('04/02');
    let emailRegex = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/;


    return (

        <Container >
           
            <Content  contentContainerStyle={{flexDirection:'column'}}>
                <View style={{alignItems:'center'}}>
                <CreditCardDisplay
                    number={cardNumber}
                    cvc={123}
                    expiration={exp}
                    name="John J. Doe"
                    since="2004"
                />
                </View>
                <View style={{flex:1,marginTop:50,}}>
                    <Text style={{fontSize:20}}>Numero de carte</Text>
                <Item error={true}>
                    
                    <Input placeholder='Credit Card'  onChangeText={e=>setCardNumber(e)} />
                    <Icon name='checkmark-circle' />
                </Item>
                </View>
                <View style={{ flex:1,flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
                <Text style={{fontSize:20}}></Text>
                <View style={{flexDirection:'column',width:'50%',height:'100%'}}>
                <Text>cvc</Text>
                <Item regular style={{marginTop:15,width:'40%',height:50}}>
                    <Input style={{width:'50%',height:50}}  placeholder='Textbox with Success Input'  />
                    <Icon name='checkmark-circle' />
                </Item>
                </View>
                <View style={{flexDirection:'column',width:'50%',height:'100%'}}>
                    <Text>cvc</Text>
                <Item regular style={{marginTop:15,width:'40%',height:50}}>
                    <Input  placeholder='Textbox with Success Input'  />
                    <Icon name='checkmark-circle' />
                </Item>
                </View>
                </View>
            </Content>
        </Container>
    )
}
