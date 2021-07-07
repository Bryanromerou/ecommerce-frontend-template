import React from 'react';
import { useHistory } from 'react-router';
import AllProducts from '../../components/ProductComponents/AllProducts';

const ProductIndex = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const clickHandler = ()=>{
    history.push({pathname: '/products/new',
    state: user})
  }

  return (
    <div>
      <h1>SHOP PRODUCTS</h1>
      {(user?.role==="ADMIN") && 
        <button onClick={clickHandler}>Add New Product</button>
      }
      <AllProducts admin={(user?.role==="ADMIN")}/>
    </div>
  );
}

export default ProductIndex;
