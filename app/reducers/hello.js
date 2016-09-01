import {
  HELLOWORD,
}
from '../constants/index';

export default function hello(state = {
  data: {},
}, action) {
  switch (action.type) {
    case HELLOWORD:
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
}