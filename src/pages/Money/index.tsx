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
    tags: [] as string[],
    note: '',
    category: '-' as ('-' | '+'),
    amount: 0
  })

  return (
    <MoneyLayout>
      <TagsSection value={selected.tags}
                   onChange={tags => setSelected({
                     ...selected,
                     tags
                   })}/>
      <NoteSection value={selected.note}
                   onChange={note => setSelected({
                     ...selected,
                     note
                   })}/>
      <CategorySection value={selected.category}
                       onChange={category => setSelected({
                         ...selected,
                         category
                       })}/>
      <NumberPadSection value={selected.amount}
                        onOk={() => console.log('OK')}
                        onChange={amount => setSelected({
                          ...selected,
                          amount
                        })}/>
    </MoneyLayout>
  )
}

export default Money
