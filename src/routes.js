import React from 'react';
import {Route, IndexRoute, } from 'react-router'

// import Main from './components/Main';
import App from './App';
import EarlyStart from './components/early-start/EarlyStart';
import GameDash from './components/game-dash/GameDash';
import Breathe from './components/breathe/Breathe';
import WeatherApp from './components/weather-app/WeatherApp';
import QueensList from './components/queenslist/QueensList';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={EarlyStart}/>
    <Route path='/earlystart' component={EarlyStart} />
    <Route path='/gamedash' component={GameDash} />
    <Route path='/weatherapp' component={WeatherApp} />
    <Route path='/breathe' component={Breathe} />
    <Route path='/queenslist' component={QueensList} />
  </Route>
)
