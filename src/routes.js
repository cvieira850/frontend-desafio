import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import Repositories from './pages/Repositories';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/user/:details" exact component={Details}/>
        <Route path="/user/:details/repos" exact component={Repositories}/>
      </Switch>
    </BrowserRouter>
  );
}
