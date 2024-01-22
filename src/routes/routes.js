import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from '../pages/home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoute from './private-routes'

function routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
      </Switch>
    </Router>
  )
}

export default routes
