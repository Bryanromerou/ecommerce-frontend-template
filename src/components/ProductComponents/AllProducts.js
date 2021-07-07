import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModel from '../../Services/Product';
import ProductCard from './ProductCard';
import {
  CardDeck
} from 'react-bootstrap';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getData()
  },[])
  const getData = async()=>{
    const {data} = await ProductModel.getProducts();
    const products = data.products.map((elm,idx)=>{
      return <Link to={`/products/${elm._id}`} key={idx}>
          <ProductCard name={elm.name} price={elm.price} sold_out={elm.sold_out} images={elm.images}/>
        </Link>
    })
    console.log(products)
    setProducts(products)
  }
  return (
    <div>
      <CardDeck>
        {products}
      </CardDeck>
    </div>
  );
}

export default AllProducts;
