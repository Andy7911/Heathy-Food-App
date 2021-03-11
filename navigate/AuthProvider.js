
import React, { createContext,useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider=({children})=>{
 const [user,setUser] = useState(false);
 const [panier,setPanier] =useState([]);
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
    handleDelete(id){
        const items = panier.slice();
        const index = items.findIndex(function(item){
            return item.id ==id;
        })
        items.splice(index,1)
        setPanier(items);
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