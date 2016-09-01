import {
  OPENDELETE,
  CLOSEDELETE
}
from '../constants/index';

export default function deleteshow(state = {
  deleteshow: 'none',
}, action) {
  switch (action.type) {
    case OPENDELETE:
      return Object.assign({}, state, {
        deleteshow: 'block',
      });
    case CLOSEDELETE:
      return Object.assign({}, state, {
        deleteshow: 'none',
      });
    default:
      return state;
  }
}