import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home'
import User from '../components/user'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={User} />
        <Redirect from='*' to='/' />
    </Switch>