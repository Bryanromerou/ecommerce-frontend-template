import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Cart from '../pages/Cart';

export default(
  <Switch>
    <Route path="/cart" component={Cart}/>
    <Route path="/profile" component={Profile}/>
    <Route path ="/signIn" component={SignIn}/>
    <Route path ="/" component={HomePage}/>
  </Switch>
)