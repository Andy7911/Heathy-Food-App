import React, { useState } from 'react'
import Stripe from 'react-native-stripe-api';
import axios from 'axios'


export const PaiementContext = React.createContext();

export const PaiementProvider = ({ children }) => {


    return (
    <PaiementContext.Provider value={{
       

      paiement:async(totalCost)=>{
      axios({

        
      })
        
        
      },



    }}>
        {children}

    </PaiementContext.Provider>

    );
}

