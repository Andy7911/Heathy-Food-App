import React, { useState } from 'react'
import Stripe from 'react-native-stripe-api';
import axios from 'axios'


export const PaiementContext = React.createContext();

export const PaiementProvider = ({ children }) => {


    return (
    <PaiementContext.Provider value={{
       

      paiement:async(totalCost)=>{
      axios({
          method:'POST',
          url:'https://api.stripe.com/v1/charges'
        
      })
        
        
      },



    }}>
        {children}

    </PaiementContext.Provider>

    );
}

