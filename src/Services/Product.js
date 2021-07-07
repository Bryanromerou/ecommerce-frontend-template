import AuthModel from './Auth';
import axios from 'axios';
const URL = 'http://localhost:4000/api/v1/products'

class ProductModel {
  static getProducts = ()=>{
    return axios.get(URL)
  }
  static getProductsById = (productId)=>{
    return axios.get(`${URL}/${productId}`)
  }
  static createProduct = (newProduct)=>{
    return axios.post(`${URL}` ,newProduct, {headers:AuthModel.getUserFromLocalStorage()})
  }
  static updateProductById = (productId,newProduct) =>{
    return axios.put(`${URL}/${productId}`,newProduct,{headers:AuthModel.getUserFromLocalStorage()})
  }
  static deleteProductById = (productId) =>{
    return axios.delete(`${URL}/${productId}`,{headers:AuthModel.getUserFromLocalStorage()})
  }
}

export default ProductModel;