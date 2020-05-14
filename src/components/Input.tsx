import * as React from 'react'
import styled from 'styled-components'

const Label = styled.label`
   display: flex;
   align-items: center;
   > span {
      margin-right: 16px;
   }
   > input {
      flex-grow: 1;
      height: 44px;
      background: none;
      border: none;
   }
`

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

const Input: React.FC<TProps> = (props) => {
  const {label, ...rest} = props

  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest}/>
    </Label>
  )
}

export default Input
