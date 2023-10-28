import React,{ useState,useContext } from 'react';


const CartContext=React.createContext()
const UpdateCartContext=React.createContext()

export function useCart(){
    return useContext(CartContext);
}

export function useUpdateCart(){
    return useContext(UpdateCartContext);
}

export function CartContextProvider({children}){
    const [cart,setCart]=useState({})

    function addToCart(e){ 
        const newCart={...cart,[e.id]:e}
        setCart(newCart)
        // console.log(cart)
    }
    return (
        <CartContext.Provider value={cart}>
            <UpdateCartContext.Provider value={addToCart}>
                {children}
            </UpdateCartContext.Provider>
        </CartContext.Provider>
    )
}