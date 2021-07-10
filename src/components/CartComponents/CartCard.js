import React, { useEffect, useState } from 'react';
import {
  Card, Button 
} from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";
import QuantityDropdown from './QuantityDropdown';

const CartCard = ({quantity ,data, productId}) => {
  const [product, setProduct] = useState(null);
  
  const buttonHandler = () =>{
    console.log("Removing Item from Cart")
  }

  const getData = async() =>{
    setProduct(<>
      <Card.Title>{data.product.name}</Card.Title>
      <Card.Text>Price: {data.product.price}</Card.Text>
      <Card.Text>Quantity: <QuantityDropdown productid={productId} quantity={quantity}/></Card.Text>
      <Button variant="danger" onClick={buttonHandler} style={{width:"50px"}}><BsFillTrashFill/></Button>
    </>)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Card style={{width:"300px"}}>
      {product}
    </Card>
  );
}

export default CartCard;
