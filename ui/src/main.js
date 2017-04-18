// ui/src/main.js

import React from 'react';
import { Route } from 'react-router';
import { startRouter } from 'carbon/lib/utils/router';

import User from 'views/user';

let routes = (
  <Route path="/" component={ User } />
);

startRouter(routes);
