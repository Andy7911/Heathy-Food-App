import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image,Button } from 'react-native'
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SignUpScreen from '../component/SignUpScreen'
import CommandScreen from '../component/CommandScreen'
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import { Icon, Item, Input } from 'native-base';
import PanierScreen from '../component/Panier';
import CategorieScreen from '../component/Categorie';
import DesertScreen from '../component/Dessert';
import Profil from '../component/Profil';
import {CartContext, CartProvider} from '../navigate/CartProvider';
import Wallet from '../component/WalletScreen';
import WalletScreen from '../component/WalletScreen';
import DetailScreen from '../component/DetailScreen';
import AjouterPaiement from '../component/AjouterPaiement';
import Subcribe from '../component/Subcribe';
import TransitionScreen from '../component/TransitionScreen'


export default function Route() {
    const [initializing, setInitializing] = useState(true);
    const { user, setUser, logout } = useContext(AuthContext);
    const customDrawer = (props) => (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 80, width: 100 }}>
              
            </View>
            <View style={{ height: 100, width: 200, marginBottom: 20 }}>
                <View style={{flex:1,flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
                    <Image style={{ height: 100, width: 50 }} source={require('../image/logo.png')} >
                    </Image>
                    <Text>HEALTHY FOOD</Text>
                </View>
                <View>
                <Text style={{marginTop:10}}>{`Welcome :${user.email}`}</Text>
                </View>
            </View>

            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>

            <Item>
                    <Icon style={{ height: 20, height: 20 }} type="FontAwesome" name="sign-out" onPress={() => { logout() }} />
                    <Text> Logout</Text>
                </Item>
        </SafeAreaView>

    );

    const AppDrawerNav = createDrawerNavigator({
        Assiete: {
            screen: TransitionScreen
        },
        Panier: {
            screen: PanierScreen
        },
        Categorie: {
            screen: CategorieScreen
        },
        Compte:{
            screen:Profil,  
             navigationOptions: {
                drawerIcon: (
                 <Icon type="FontAwesome5" name='user-cog'>
                      
                 </Icon>
                ),
              },
        }

    },
        {
            contentComponent: customDrawer
        });

    const LoginApp = createStackNavigator({
        SignUpScreen: {
            screen: SignUpScreen,
            navigationOptions: () => ({
                headerShown:false
            })
        },
        SubcribeScreen:{
            screen:Subcribe,
            navigationOptions: () => ({
                title:'Subscribe'
            })
            
        }


    });
    const UserApp = createStackNavigator({
        CommandScreen: {
            screen: AppDrawerNav,
            navigationOptions: () => ({
               headerShown:false
            })
        },
        PanierScreen: {
            screen: AppDrawerNav,
            navigationOptions: () => ({

            })
        },
        CategorieScreen: {
            screen: AppDrawerNav,
            navigationOptions: () => ({

            })
        },
        Desert: {
            screen: DesertScreen,
            navigationOptions: () => ({

            })
        },
        Wallet:{
            screen:WalletScreen,
            navigationOptions: () => ({

            })
            
        },
        Detail:{
            screen:DetailScreen,
            navigationOptions:()=>({

            })
        
        },
        AjouterPaiement:{
            screen:AjouterPaiement,
            navigationOptions:()=>({

            })
        }
    });

    const LoginContainer = createAppContainer(LoginApp)
    const UserContainer = createAppContainer(UserApp);


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    if (!user) {
        return (


            <LoginContainer />

        );
    };
    return (

        <UserContainer>

        </UserContainer>


    );
}
