import React, { useEffect, useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import ProductModel from '../../Services/Product';
import SizePicker from '../../components/ProductComponents/SizePicker';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index"

const ProductShow = () => {
  const {id} = useParams();
  const [info, setInfo] = useState(null);
  const [modal, setModal] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(()=>{
    getData()
  },[])
  const dispatch = useDispatch();

  const { addToCart } = bindActionCreators(actionCreators,dispatch)

  const addToCartFunction = (product) =>{
    // console.log("adding to Shopping cart =>",product);
    addToCart(product);
    showModal(product);
    
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(!cart){
      cart = {[product._id]:1}
    }else{
      if(cart.hasOwnProperty(product._id)){
        cart[product._id] += 1
      }else{
        cart[product._id] = 1
      }
    }
    localStorage.setItem("cart",JSON.stringify(cart))
  }
  
  const showModal = product =>{
    setModal(<>
      <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Adding <b>{product.name}</b> to shopping Cart!
          </Modal.Title>
        </Modal.Header>
    </>)
    setShow(true)
  }

  const getData = async() =>{
    const {data} = await ProductModel.getProductsById(id)
    setInfo(
      <>
        <h2>{data.product.name}</h2>
        <p>Price: {data.product.price}</p>
        <p>Description: {data.product.description}</p>
        {data.product.sizes.length ===0 ?
          <Button onClick={()=>{addToCartFunction(data.product)}}>Add To Cart</Button>:
          <SizePicker sizes={data.product.sizes}/>
        }
      </>
    )
  }
  return (
    <div>
      <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      >
      {modal}
      </Modal>
      <h1>Product Show Page</h1>
      {info}
    </div>
  );
}

export default ProductShow;
