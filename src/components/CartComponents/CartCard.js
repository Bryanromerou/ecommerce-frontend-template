import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ProductModel from '../../Services/Product';

const CartCard = ({productId, quantity}) => {
  const [product, setProduct] = useState(null);
  useEffect(()=>{
    getData()
  },[])

  const getData = async() =>{
    const {data} = await ProductModel.getProductsById(productId)
    setProduct(<>
      <Card.Title>{data.product.name}</Card.Title>
      <Card.Text>Price: {data.product.price}</Card.Text>
      <Card.Text>Quantity: {quantity}</Card.Text>
    </>)
    console.log(data)
  }

  return (
    <Card style={{width:"300px"}}>
      {product}
    </Card>
  );
}

export default CartCard;
