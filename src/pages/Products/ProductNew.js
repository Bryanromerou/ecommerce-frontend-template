import React from 'react';
import Page404 from '../Page404';
import ProductForm from '../../components/ProductComponents/ProductForm';

const ProductNew = ({location}) => {
  return (
    <div>
      {location.state?
        <ProductForm/>:<Page404/>
      }
    </div>
  );
}

export default ProductNew;
