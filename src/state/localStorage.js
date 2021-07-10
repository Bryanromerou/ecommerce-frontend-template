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

export const addNewProductToLocalState = (product) =>{
  
} 

export const removeProductToLocalState = (product) =>{
  
}

export const modifyProductQuantity = (product, newQuantity) =>{
  
}