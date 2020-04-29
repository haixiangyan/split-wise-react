import * as React from 'react'
import Layout from './Layout'
import styled from 'styled-components'

const TagsSection = styled.section``
const NotesSection = styled.section``
const CategorySection = styled.section``
const NumberPadSection = styled.section``

const Money: React.FunctionComponent = () => {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>

        <button>0</button>
        <button>.</button>
        <button>15</button>
        <button>16</button>
      </NumberPadSection>
    </Layout>
  )
}

export default Money
