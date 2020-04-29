import React from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Tags from './pages/Tags'
import Money from './pages/Money'
import Statistics from './pages/Statistics'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  )
}

