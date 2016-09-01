import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

import hello from './hello';
import application from './application';
import dialog from './dialog';
import deleteshow from './delete';
const rootReducer = combineReducers({
  routing,
  hello,
  application,
  dialog,
  deleteshow,
});

export default rootReducer;
