import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
       padding: 16px;
       width: 33.333333%;
       text-align: center;
    }
  }
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>

        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  )
}

function Tags() {
  return <h2>标签</h2>
}

function Money() {
  return <h2>记账</h2>
}

function Statistics() {
  return <h2>统计</h2>
}

function NotMatch() {
  return <h2>页面不存在</h2>
}

