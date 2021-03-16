import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Demos from './screens/Demos';
import Portfolio from './screens/Portfolio';
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Fragment>
        <Component {...props} />
      </Fragment>
    )}
  />
);

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Demos} />
        <PublicRoute exact path="/portfolio" component={Portfolio} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
