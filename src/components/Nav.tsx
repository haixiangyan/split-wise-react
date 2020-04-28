import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react'

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
       padding: 16px;
       width: 33.333333%;
       text-align: center;
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
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
    </NavWrapper>
  )
}

export default Nav
