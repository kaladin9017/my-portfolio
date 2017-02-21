import React from 'react';
import {Route, IndexRoute, } from 'react-router'

// import Main from './components/Main';
import App from './App';
import EarlyStart from './components/early-start/EarlyStart';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={EarlyStart}/>
    <Route path='/earlystart' component={EarlyStart} />
  </Route>
)
