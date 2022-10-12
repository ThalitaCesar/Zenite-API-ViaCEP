import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { Home } from './screens/Home';
import { Catalog } from './screens/Catalog';


const Routes = () => {

  
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home}  />
        <Route path="/catalog" component={Catalog} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
