import React from 'react';
import {Route} from 'react-router'
import App from './containers/App';
import AppChild from './containers/AppChild';
export default (
  <Route  component={App} >
    <Route  path="/"  component={AppChild} />
  </Route>
);
