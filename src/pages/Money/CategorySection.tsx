import styled from 'styled-components'
import * as React from 'react'
import {useState} from 'react'

const Wrapper = styled.section`
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

const categoryMap = {
  '-': '支出',
  '+': '收入'
}

type TCategory = keyof typeof categoryMap

const CategorySection: React.FC = () => {
  const [categoryList] = useState<TCategory[]>(['-', '+'])

  const [category, setCategory] = useState<string>('-') // + 表示收入，- 表示支出

  const selectedClass = (type: string) => category === type ? 'selected' : ''

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={selectedClass(c)}
              onClick={() => setCategory(c)}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default CategorySection
