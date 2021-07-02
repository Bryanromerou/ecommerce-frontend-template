import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';

export default(
  <Switch>
    <Route path="/profile" component={Profile}/>
    <Route path ="/" component={HomePage}/>
  </Switch>
)