import React from 'react';
import { Route, Switch } from 'react-router';
import Auth from './pages/auth';
import Home from './pages/home';
import Greeting from './pages/greetingPage';
import * as routes from './utils/routePaths';

const Routes = () => {
  return (
    <Switch>
      <Route path={routes.HOME_PATH}>
        <Home />
      </Route>
      <Route path={routes.AUTH_PATH}>
        <Auth />
      </Route>
      <Route path={routes.GREETING_PATH}>
        <Greeting />
      </Route>
    </Switch>
  );
};

export default Routes;
