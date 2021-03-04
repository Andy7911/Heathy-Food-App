import React, { useState,useEffect,useContext } from 'react';
import 'react-native-gesture-handler';
import SignUpScreen from './component/SignUpScreen';
import CommandScreen from './component/CommandScreen';
import { createAppContainer, } from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AuthContext, AuthProvider} from './navigate/AuthProvider';
import auth from '@react-native-firebase/auth';
import Route from './navigate/Route';
import {CartProvider} from './navigate/CartProvider';


const AppDrawerNav =  createDrawerNavigator({
  commad:{screen:CommandScreen}
})

const LoginApp = createStackNavigator({
SignUpScreen:{
  screen: SignUpScreen,
  navigationOptions:()=>({
    title:'sighup',
  })
}


});
const UserApp= createStackNavigator({
  CommandScreen:{
  screen: CommandScreen,
  navigationOptions:()=>({
    title:'commande',
  })
},
})

const LoginContainer = createAppContainer(LoginApp)
const UserContainer = createAppContainer(UserApp);
const App =()=>{
  const [initializing , setInitializing] = useState(true);
 const [user ,setUser] = useState();
  
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

return(
  <AuthProvider>
 <CartProvider>
<Route></Route>
</CartProvider>
  </AuthProvider>
);
}
export default App;
