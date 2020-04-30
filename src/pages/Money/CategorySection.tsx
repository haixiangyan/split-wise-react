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
type TProps = {
  value: TCategory
  onChange: (category: TCategory) => void
}

const CategorySection: React.FC<TProps> = (props) => {
  const [categoryList] = useState<TCategory[]>(['-', '+'])

  const category = props.value

  const selectedClass = (type: string) => category === type ? 'selected' : ''

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={selectedClass(c)}
              onClick={() => props.onChange(c)}>
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default CategorySection
