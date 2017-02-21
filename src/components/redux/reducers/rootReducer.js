import { combineReducers } from 'redux';

import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  state: mainReducer
});

export default rootReducer;
