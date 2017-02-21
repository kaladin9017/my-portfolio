import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './components/redux/configStore';

import "semantic-ui-css/semantic.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
