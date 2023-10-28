import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useCart } from "../CartContext";
import CartItem from "../Components/CartItem";
import Navbar from "../Components/Navbar";

function Cart() {
  const cartItems = useCart();
  console.log(cartItems);
  const totalSum = Object.values(cartItems).reduce(
    (acc, item) => acc + item.saleInfo.listPrice.amount,
    0
  ).toFixed(2);

  return (
    <>
      <Navbar />
      <div className="cart_body">
        <Card className="cart_container">
          <h3>Shopping Cart</h3>
          <CartItem />
          <CartItem />
          <CartItem />
        </Card>
        <Card  className="cart_total">
          <div>
            <h3>Subtotal ({Object.keys(cartItems).length} items)</h3>
            <ul>
              {Object.keys(cartItems).map((item) => (
                <div className="cartitem" key={item}>
                  <li>{cartItems[item]["volumeInfo"]["title"]}</li>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <span>
                    {cartItems[item]["saleInfo"]["listPrice"]["amount"]}
                  </span>
                </div>
              ))}
            </ul>
            <div className="cartitem">
              <li>
                <b>Total</b>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <span>
                <b>{parseFloat(totalSum)}</b>
              </span>
            </div>
            <Button variant="contained" color="success">
                Proceed to Buy
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Cart;
