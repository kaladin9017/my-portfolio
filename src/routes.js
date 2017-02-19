import React from 'react';
import {Route, IndexRoute, } from 'react-router'

// import Main from './components/Main';
import App from './App';
import HomePage from './components/homepage/homepage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
  </Route>
)
