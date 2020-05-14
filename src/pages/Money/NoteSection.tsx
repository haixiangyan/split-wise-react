import styled from 'styled-components'
import * as React from 'react'
import {ChangeEventHandler} from 'react'
import Input from '../../components/Input'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`

type TProps = {
  value: string
  onChange: (note: string) => void
}

const NoteSection: React.FC<TProps> = (props) => {
  const note = props.value

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.onChange(event.target.value)
  }

  return (
    <Wrapper>
      <Input label="标签" onChange={onChange} value={note} placeholder="请填写备注"/>
    </Wrapper>
  )
}

export default NoteSection
