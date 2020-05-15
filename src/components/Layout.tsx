import * as React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import {useEffect, useRef} from 'react'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

type TProps = {
  className?: string
  scrollTop?: number
}

const Layout: React.FC<TProps> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) return

      mainRef.current.scrollTop = props.scrollTop!
    }, 0)
  }, [props.scrollTop])

  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className} data-x="main">
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

Layout.defaultProps = {
  scrollTop: 0
}

export default Layout
