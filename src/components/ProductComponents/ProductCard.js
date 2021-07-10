import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Card, Button, Modal 
} from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";
import ProductModel from '../../Services/Product';

const ProductCard = ({name,price,sold_out,images,admin,id}) => {
  const [show, setShow] = useState(false);

  const deleteProduct = async() =>{
    await ProductModel.deleteProductById(id)
    window.location.reload()
  }
  
  const buttonHandler = () =>{
    setShow(true)
  }

  const showImage = () =>{
    if(images.length === 0){
      return <Card.Img src="http://www.mymetrotex.com/wp-content/uploads/2021/03/image-coming-soon-placeholder.png"/>
    }
    return <Card.Img src={images[0]}/>
  }
  return (
    <>
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Are you sure that you want to delete <b>{name}</b>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="danger" onClick={deleteProduct}>DELETE</Button>
        </Modal.Body>
    </Modal>
    <Card style={{width:"300px"}}>
      <Link to={`/products/${id}`}>
      {showImage()}
      <h3>{name}</h3>
      <p>Price: {price}</p>
      </Link>
      {admin && <Button variant="danger" onClick={buttonHandler} style={{width:"50px"}}><BsFillTrashFill/></Button>}
    </Card>
    </>
  );
}

export default ProductCard;
