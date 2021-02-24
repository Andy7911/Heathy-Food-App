
import React, { createContext,useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider=({children})=>{
 const [user,setUser] = useState(false);
 const [panier,setPanier] =useState(false);
return (
<AuthContext.Provider
value={{ 
    user,
    setUser,
    panier,
    setPanier,
   login:async(email,password)=>{
        try{
            await auth().signInWithEmailAndPassword(email,password);
        }catch(e)
        {
            console.log(e);
            
        }

    },
    register: async (email,password)=>{
    try{
        
    await auth().createUserWithEmailAndPassword(email,password);
       setAutho(true);

    }
    catch(e){
        console.log(e);
    }
    
    },
    logout: async()=>{
        debugger;
        try {
                await auth().signOut();


        }catch(e){
            console.log(e);
        }


    },

}}>
{children}
</AuthContext.Provider>

);

};