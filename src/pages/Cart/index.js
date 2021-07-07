import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import CartCard from '../../components/CartComponents/CartCard';

const Cart = () => {
  const [cart, setCart] = useState(null);
  useEffect(()=>{
    getCartInfo()
  },[]) 

  const getCartInfo = ()=>{
    const cart = JSON.parse(localStorage.getItem("cart"))
    const cartArr = []
    for (const key in cart){
      cartArr.push(<CartCard productId={key} key={key} quantity={cart[key]}/>)
    }
    setCart(cartArr)
  }

  return (
    <div>
      Cart
      <CardDeck>
        {cart}
      </CardDeck>
    </div>
  );
}

export default Cart;
