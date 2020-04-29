import styled from 'styled-components'
import * as React from 'react'

const CategorySection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      padding: 16px 0;
      width: 50%;
      text-align: center;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        left: 0;
        bottom: 0;
        background: black;
      }
    }
  }
`

export default () => {
  return (
    <CategorySection>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </CategorySection>
  )
}
