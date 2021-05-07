import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Mainservice from '../service/Mainservice'
import CommandScreen from '../component/CommandScreen';
import LoadingSceen from '../service/LoadingSceen';
export default class TransitionScreen extends Component {
    state={
        loaded:false
    }
    constructor(){

        super();
        Mainservice.load(v=>this.setState({loaded:true}));
    }
    render() {
        if(this.state.loaded){
        return (
            <CommandScreen/>
            
        )}
        return(<LoadingSceen></LoadingSceen>)
    }
}
