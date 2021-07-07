import React from 'react';
import {
  Card
} from 'react-bootstrap';

const ProductCard = ({name,price,sold_out,images}) => {
  const showImage = () =>{
    if(images.length === 0){
      return <Card.Img src="http://www.mymetrotex.com/wp-content/uploads/2021/03/image-coming-soon-placeholder.png"/>
    }
    return <Card.Img src={images[0]}/>
  }
  return (
    <Card style={{width:"300px"}}>
      {showImage()}
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </Card>
  );
}

export default ProductCard;
