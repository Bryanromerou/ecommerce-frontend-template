import React from 'react';
import Form from "react-jsonschema-form";
import ProductModel from '../../Services/Product';
// import Form from "@industrialdev/react-jsonschema-form";
// import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

const Index = () => {
  const submitHandler = async({formData}) =>{
    console.log(formData)
    try {
      const allProducts = await ProductModel.getProducts()
      console.log(allProducts)
      
      const newProduct = await ProductModel.createProduct(formData)
      console.log(newProduct)
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(JSON.parse(localStorage.getItem("user")))

  const schema = {
    "title": "A registration form",
    "description": "A simple form example.",
    "type": "object",
    "required": [
      "name",
      "description",
      "price"
    ],
    "properties": {
      "name": {
        "type": "string",
        "title": "Product Name",
      },
      "description": {
        "type": "string",
        "title": "Description"
      },
      "price": {
        "type": "number",
        "title": "Price",
      },
      "sizes": {
        "type": "array",
        "title": "Sizes",
        "items": {
          "type": "string",
          "default": "Small"
        }
      }
    }
  }
  return (
    <div>
      Product Form
      <Form schema={schema} onSubmit={submitHandler}/>
      {/* <MaterialJsonSchemaForm schema={schema}/> */}
    </div>
  );
}

export default Index;
