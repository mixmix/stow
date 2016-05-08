import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'
import Upload from './components/Upload'
//import Jumbotron from './components/Jumbotron'  // not used
import ListingProfile from './components/ListingProfile'
import UserProfile from './components/UserProfile'


export default (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
    	<IndexRoute component={Dashboard}/>
      <Route path='login' component={Login}/>
      <Route path='signup' component={Signup}/>
      <Route path='upload' component={Upload}/>
      <Route path='listing/:id' component={ListingProfile}/>
      <Route path='user/:id' component={UserProfile}/>

    </Route>
  </Router>
)
