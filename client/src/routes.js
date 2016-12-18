import React from 'react'
import { Route } from 'react-router'
import App from './containers/app';
import SignUp from './components/sign_up'
import Login from './components/login'
import Home from './components/home'
import NewPantry from './components/new_pantry'
import Pantry from './components/pantry'

const Routes = (
  <Route path="/" component={App} >
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/newpantry" component={NewPantry} />
    <Route path="/pantries/:id" component={Pantry} />
  </Route>
)


module.exports = Routes
