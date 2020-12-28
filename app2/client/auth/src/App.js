import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch></Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
