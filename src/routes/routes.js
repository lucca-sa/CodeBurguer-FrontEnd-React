import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Cart, Home, Login, Products, Register } from '../pages'
import PrivateRoute from './private-routes'

function routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute exact component={Products} path="/produtos" />
        <PrivateRoute exact component={Cart} path="/carrinho" />
      </Switch>
    </Router>
  )
}

export default routes
