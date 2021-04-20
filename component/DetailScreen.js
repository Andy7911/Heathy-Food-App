import React, { Component } from 'react'
import { Text, View } from 'react-native'
import database from '@react-native-firebase/database'


export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        const{navigation} = this.props;
        this.state = {
        food:[],
        idItem:navigation.getParam('id','NO-ID')+1
        };
        
      } 
    componentWillMount() {
        const onValueChange = database()
            .ref(`Dish/${this.state.idItem}`)
            .on('value', snapshot => {
                this.setState({ food: snapshot.val() });
            });
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
