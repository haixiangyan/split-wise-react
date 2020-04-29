import * as React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import TagsSection from './TagsSection'
import NoteSection from './NoteSection'
import CategorySection from './CategorySection'
import NumberPadSection from './NumberPadSection'

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Money: React.FunctionComponent = () => {
  return (
    <MoneyLayout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MoneyLayout>
  )
}

export default Money
