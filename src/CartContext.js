import React,{ useContext, useState } from 'react';


export const CartContext=React.createContext()


export default function CartContextProvider(props){
    const [cart,setCart]=useState(0)

    function addToCart(){
        setCart(prev => prev+1)
    }
    return (
        <CartContext.Provider value={{cart,addToCart}}>
                {props.children}
        </CartContext.Provider>
    )
}