import React from 'react'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from './AsyncComponent'

const App = asyncComponent(() => import('./App'))
const List = asyncComponent(() => import('./List'))
const Task = asyncComponent(() => import('./Task'))

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/nowhere" component={List} />
      <Route exact path="/task/:uid" component={Task} />
    </Switch>
  </main>
)

export default Main
