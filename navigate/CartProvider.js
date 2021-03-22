import React, { useState } from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [panier, setPanier] = useState([]);
    const [profil, setProfil] = useState([]);
    return (<CartContext.Provider value={{
        panier,
        setPanier,

        handleDelete(id) {
            const items = panier.slice();
            const index = items.findIndex(function (item) {
                return item.id == id;
            })
            items.splice(index, 1)
            setPanier(items);
        },
        addQuantite(id, Dish) {
            debugger;
            const items = panier.slice();
            const item = items.find(x=>x.id==id)
            if (item!= undefined) {
                item.quatité++;
                const nbquatité =item.quatité;
                const nvprix = nbquatité * item.prix;
                item.sommePrix = nvprix;

            }
            else {

                Dish.quatité = 1
                Dish.sommePrix = Dish.prix;
                setPanier([...panier, Dish]);
            }

        }



    }}>
        {children}

    </CartContext.Provider>

    );
}

