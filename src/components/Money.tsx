import * as React from 'react'
import Layout from './Layout'
import styled from 'styled-components'

const TagsSection = styled.section`
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid red;
  > ol {
    margin: 0 -12px;
    > li {
      display: inline-block;
      padding: 4px 16px;
      margin: 8px 12px;
      background: #d9d9d9;
      border-radius: 18px;
      font-size: 14px;
    }
  }
  > button {
    padding: 2px 4px;
    margin-bottom: 8px;
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    color: #666;
  }
`
const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
     display: flex;
     align-items: center;
     > span {
        margin-right: 16px;
     }
     > input {
        flex-grow: 1;
        height: 72px;
        background: none;
        border: none;
     }
  }
`
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
        background: red;
      }
    }
  }
`
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
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input placeholder="在这里输入备注" type="text"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
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
