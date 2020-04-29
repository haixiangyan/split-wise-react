import styled from 'styled-components'
import * as React from 'react'

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

export default () => {
  return (
    <TagsSection>
      <ol>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ol>
      <button>新增标签</button>
    </TagsSection>
  )
}
