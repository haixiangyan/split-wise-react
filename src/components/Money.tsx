import * as React from 'react'
import Layout from './Layout'
import styled from 'styled-components'

const TagsSection = styled.section`
  padding: 12px 16px;
  background: #ffffff;
  flex-grow: 1;
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
        background: black;
      }
    }
  }
`
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  .output {
    background: #fff;
    font-size: 37px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
                inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  .pad {
    > button {
      float: left;
      width: 25%;
      height: 64px;
      font-size: 18px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2), &:nth-child(5) {
        background: #e0e0e0;
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #d3d3d3;
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #c1c1c1;
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #b8b8b8;
      }
      &:nth-child(12), &:nth-child(14) {
        background: #9a9a9a;
      }
    }
  }
`

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money: React.FunctionComponent = () => {
  return (
    <MoneyLayout>
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
        <div className="output">
          100
        </div>
        <div className="pad clearfix">
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
          <button className="ok">OK</button>

          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </NumberPadSection>
    </MoneyLayout>
  )
}

export default Money
