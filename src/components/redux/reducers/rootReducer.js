import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import pageInfoReducer from './pageInfoReducer';

const rootReducer = combineReducers({
  state: mainReducer,
  pageInfo: pageInfoReducer
});

export default rootReducer;
