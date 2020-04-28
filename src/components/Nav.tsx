import styled from 'styled-components'
import {Link} from 'react-router-dom'
import React from 'react'

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
       padding: 4px 0;
       width: 33.333333%;
       text-align: center;
       display: flex;
       flex-direction: column;
       align-items: center;
       font-size: .9em;
       .icon {
         width: 24px;
         height: 24px;
       }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-tag"/>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-money"/>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-chart"/>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
