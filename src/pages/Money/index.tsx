import * as React from 'react'
import {useState} from 'react'
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
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as ('-' | '+'),
    amount: 0
  })

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj})
  }

  return (
    <MoneyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onOk={() => console.log('OK')}
                        onChange={amount => onChange({amount})}/>
    </MoneyLayout>
  )
}

export default Money
