import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import CartCard from '../../components/CartComponents/CartCard';
import ProductModel from '../../Services/Product';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    getCartInfo()
  },[]) 

  const getCartInfo = async()=>{
    const cart = JSON.parse(localStorage.getItem("cart"))
    const cartArr = []
    let tempTotal = total
    for (const key in cart){
      const {data} = await ProductModel.getProductsById(key)
      tempTotal += parseInt(data.product.price)
      cartArr.push(<CartCard data ={data} productId={key} key={key} quantity={cart[key]} />)
    }
    setTotal(tempTotal)
    setCart(cartArr)
  }

  return (
    <div>
      Cart
      <CardDeck>
        {cart}
      </CardDeck>
      Your Total is: {total}
      <button>Continue to checkout</button>
    </div>
  );
}

export default Cart;
