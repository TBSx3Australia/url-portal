import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './App'
import List from './List'
import Task from './Task'

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
