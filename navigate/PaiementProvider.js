import React, { useState } from 'react'
import Stripe from 'react-native-stripe-api';


export const PaiementContext = React.createContext();

export const PaiementProvider = ({ children }) => {


    return (
    <PaiementContext.Provider value={{
       

      paiement:async()=>{

        
        try{
        const apiKey = 'pk_test_51IXbaUIWfkAcxuDb2pekojqvQM5MG5yT20dRPosSD11zSSFZh07Qh5t0e35x51HIAAIT42DRkEEC8Li0h5cUpXrk00ET1ZdGpO';
        const client = new Stripe(apiKey);
        
        // Create a Stripe token with new card infos
        const token = await client.createToken({
               number: '4242424242424242' ,
               exp_month: '09', 
               exp_year: '23', 
               cvc: '111',
               address_zip: '12345'
            });
            
            const customer = await client.createCustomer(token.id, 'james@email.com', '<Your user ID>', 'John', 'Doe')
            const charge = await client.createCharge(1*100, customer.id, 'Payment example','CAD');
            debugger;
        }
        catch{

        }
      },



    }}>
        {children}

    </PaiementContext.Provider>

    );
}

