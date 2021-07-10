import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const cartReducer = (
  // If no state is declared it pulls from local storage
  state = { cart: JSON.parse(localStorage.getItem("cart") || "[]") },
  // The action is where we hold the data we want to pass and what we want to do with it
  action
)=>{
  switch(action.type){
    case ADD_TO_CART:
      return {cart : action.payload.cart }
    case REMOVE_FROM_CART:
      return {cart: action.payload.cart}
    default:
      return state
  }
}

export default cartReducer;