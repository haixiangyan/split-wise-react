import styled from 'styled-components'
import * as React from 'react'
import {parseOutput} from '../../utils/compute'

const Wrapper = styled.section`
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

type TProps = {
  value: number
  onChange: (value: number) => void
  onOk: () => void
}

const NumberPadSection: React.FC<TProps> = (props) => {
  const output = props.value.toString()

  const setOutput = (output: string) => {
    let value: number

    if (output.length > 16) {
      value = parseFloat(output.slice(0, 16))
    } else if (output.length === 0) {
      value = 0
    } else {
      value = parseFloat(output)
    }

    props.onChange(value)
  }

  const onClickPad = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) return

    if (text === 'OK') {
      props.onOk()
      return
    }

    setOutput(parseOutput(output, text))
  }

  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickPad}>
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
    </Wrapper>
  )
}

export default NumberPadSection
