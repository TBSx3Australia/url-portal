import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './App'
import List from './List'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/nowhere" component={List} />
      <Route path="task/:uid" component={App} />
    </Switch>
  </main>
)

export default Main
