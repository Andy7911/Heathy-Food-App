import React,{ useState }  from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [panier, setPanier] = useState([]);
    const [profil,setProfil] =useState([]);
    return (<CartContext.Provider value={{
        panier,
        setPanier,

        handleDelete(id){
            const items = panier.slice();
            const index = items.findIndex(function(item){
                return item.id ==id;
            })
            items.splice(index,1)
            setPanier(items);
        }



    }}>
        {children}

    </CartContext.Provider>

    );
}

