import { SET_USER } from '../constants';


export default function user(state, action) {
  let newState = {};
  switch (action.type) {
    case SET_USER:
      newState = action.payload;
      break;

    default:
      break;
  }

  return newState;
}
