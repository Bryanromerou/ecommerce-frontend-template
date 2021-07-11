export const loadState = () =>{
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState)
  } catch (error) {
    console.log("There has been an issue retrieving from local storage");
    return undefined;
  }
}

export const saveState = async (state) =>{
  try {
    console.log("Saving to local Storage")
    const newState = (state.cart)
    console.log("New state after being stringfied",JSON.stringify(newState))
    // localStorage.setItem('cart',JSON.stringify(newState));
    // console.log(localStorage.getItem('cart'))
  } catch (error) {
    //Handle error
  }
}

export const addNewProductToLocalState = (productId) =>{
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = checkIfProductAlreadyExist(cart,productId)
  localStorage.setItem("cart",JSON.stringify(cart))
} 

export const removeProductToLocalState = (productId) =>{
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = checkIfProductAlreadyExist(cart,productId,0)
  localStorage.setItem("cart",JSON.stringify(cart))
}

export const modifyProductQuantity = (productId, newQuantity) =>{
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = checkIfProductAlreadyExist(cart,productId,newQuantity,true)
  localStorage.setItem("cart",JSON.stringify(cart))
}

const checkIfProductAlreadyExist = (cart, productId, newQuantity = 1,modify = false) =>{
  if(!cart){
    cart = {[productId]: newQuantity}
  }else{
    if(cart.hasOwnProperty(productId)){
      cart[productId] += newQuantity
    }else{
      cart[productId] = newQuantity
    }
  }

  if (newQuantity === 0){
    delete cart[productId]
  } else if(modify){
    cart[productId] = newQuantity
  }

  return cart
}