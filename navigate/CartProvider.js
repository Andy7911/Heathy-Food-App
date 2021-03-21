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
        addquatite(id, Dish) {
            debugger;
            const items = panier.slice();
            const index = items.findIndex(function (item) {
                return item.id == id;
            })
            if (index != -1) {
                panier[index].quatité++;
                const nbquatité = panier[index].quatité;
                const nvprix = nbquatité * panier[index].prixIni;
                panier[index].prix = nvprix;

            }
            else {
                Dish.quatité = 1
                Dish.prixIni = Dish.prix;
                setPanier([...panier, Dish]);
            }

        }



    }}>
        {children}

    </CartContext.Provider>

    );
}

