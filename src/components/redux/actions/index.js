export const GET_LEFT_SIDEBAR_STATE = 'GET_LEFT_SIDEBAR_STATE';
export const GET_RIGHT_SIDEBAR_STATE = 'GET_RIGHT_SIDEBAR_STATE';
export const GET_PAGE_INFO = 'GET_PAGE_INFO';

export function changeLeftVisible() {
  return {
    type: GET_LEFT_SIDEBAR_STATE,
    payload: null
  }
}

export function changeRightVisible() {
  return {
    type: GET_RIGHT_SIDEBAR_STATE,
    payload: null
  }
}
