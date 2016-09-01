import {
  OPENDIALOG,
  CLOSEDIALOG
}
from '../constants/index';

export default function dialog(state = {
  opendialog:false,
}, action) {
  switch (action.type) {
    case OPENDIALOG:
      return Object.assign({}, state, {
        opendialog: true,
      });
    case CLOSEDIALOG:
      return Object.assign({}, state, {
        opendialog: false,
      });
    default:
      return state;
  }
}