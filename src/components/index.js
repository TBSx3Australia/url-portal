import React from 'react'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from './AsyncComponent'

const App = asyncComponent(() => import('./App'))
const List = asyncComponent(() => import('./List'))
const Task = asyncComponent(() => import('./Task'))
const Welcome = asyncComponent(() => import('./Welcome'))

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/welcome" component={Welcome} />
      <Route path="/nowhere" component={List} />
      <Route exact path="/t/:uid" component={Task} />
    </Switch>
  </main>
)

export default Main
