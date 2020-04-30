import styled from 'styled-components'
import * as React from 'react'
import {useRef} from 'react'

const Wrapper = styled.section`
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

type TProps = {
  value: string
  onChange: (note: string) => void
}

const NoteSection: React.FC<TProps> = (props) => {
  const note = props.value

  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current) {
      props.onChange(refInput.current.value)
    }
  }

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input placeholder="在这里输入备注"
               type="text"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}

export default NoteSection
