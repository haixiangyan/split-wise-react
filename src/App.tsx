import React from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Tags from './pages/Tags'
import Money from './components/Money'
import Statistics from './components/Statistics'
import NotFound from './components/NotFound'

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

