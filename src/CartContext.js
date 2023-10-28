import React,{ useState,useContext } from 'react';

const CartContext=React.createContext()
const UpdateCartContext=React.createContext()
const NewCartContext=React.createContext()

export function useCart(){
    return useContext(CartContext);
}

export function useUpdateCart(){
    return useContext(UpdateCartContext);
}
export function useNewCart(){
    return useContext(NewCartContext);
}

export function CartContextProvider({children}){
    const [cart,setCart]=useState({})

    function addToCart(e){ 
        const newCart={...cart,[e.id]:e}
        setCart(newCart)
        // console.log(cart)
    }
    function updateCart(e){
        const newVal={...e}
        // console.log(newVal)
        setCart(newVal)
    }

    return (
        <CartContext.Provider value={cart}>
            <UpdateCartContext.Provider value={addToCart}>
                <NewCartContext.Provider value={updateCart}>
                    {children}
                </NewCartContext.Provider>
            </UpdateCartContext.Provider>
        </CartContext.Provider>
    )
}