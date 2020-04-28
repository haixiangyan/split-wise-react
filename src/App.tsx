import React from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'

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
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  )
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  )
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  )
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  )
}

function NotMatch() {
  return <h2>页面不存在</h2>
}

