import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Cart from '../pages/Cart';
import Products from '../pages/Products/ProductIndex';
import ProductsNew from '../pages/Products/ProductNew';
import ProductsShow from '../pages/Products/ProductShow';

export default(
  <Switch>
    <Route path="/cart" component={Cart}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/products/new" component={ProductsNew}/>
    <Route path="/products/:id" component={ProductsShow}/>
    <Route path="/products" component={Products}/>
    <Route path ="/signIn" component={SignIn}/>
    <Route path ="/" component={HomePage}/>
  </Switch>
)