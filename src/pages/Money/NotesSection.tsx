import styled from 'styled-components'
import * as React from 'react'

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

export default () => {
  return (
    <NotesSection>
      <label>
        <span>备注</span>
        <input placeholder="在这里输入备注" type="text"/>
      </label>
    </NotesSection>
  )
}
