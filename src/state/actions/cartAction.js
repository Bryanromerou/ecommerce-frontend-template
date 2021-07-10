import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart =  (product)=> async(dispatch,getState)=>{
  const state = await getState()
  let cart =  state.cart.cart;
  if(!cart){
    cart = {[`${product._id}`]:1}
  }else{
    if(await cart.hasOwnProperty(`${product._id}`)){
      cart[`${product._id}`] += 1
    }else{
      cart[`${product._id}`] = 1
    }
    console.log(JSON.stringify(await cart))
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cart },
  });
}