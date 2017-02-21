import { GET_RIGHT_SIDEBAR_STATE, GET_LEFT_SIDEBAR_STATE} from '../actions/index';
const initialState = {leftVisible: false, rightVisible: false};

export default function (state = initialState, action) {
  switch (action.type) {

  case GET_RIGHT_SIDEBAR_STATE:
    return Object.assign({}, state, {rightVisible: !state.rightVisible});

  case GET_LEFT_SIDEBAR_STATE:
    return Object.assign({}, state, {leftVisible: !state.leftVisible});
  }

  return state;

}
