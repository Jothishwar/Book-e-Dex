import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { UserInputProvider } from "./InputContext";
import { CartContextProvider } from "./CartContext";


function App() {
  return (
    <UserInputProvider>
      <CartContextProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={ <Home/>}></Route>
          <Route path="/cart" element={ <Cart/>}></Route>
        </Routes>
      </div>
      </CartContextProvider>
    </UserInputProvider>
  );
}

export default App;
