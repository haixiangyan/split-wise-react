import * as React from 'react'
import {useState} from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import TagsSection from './TagsSection'
import NoteSection from './NoteSection'
import CategorySection from './CategorySection'
import NumberPadSection from './NumberPadSection'
import {useRecords} from '../../hooks/useRecords'

const MoneyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const defaultForm = {
  tagIds: [] as number[],
  note: '',
  category: '-' as ('-' | '+'),
  amount: 0
}

const Money: React.FunctionComponent = () => {
  const [record, setRecords] = useState(defaultForm)

  const {addRecord} = useRecords()

  const onChange = (obj: Partial<typeof record>) => {
    setRecords({...record, ...obj})
  }

  const submit = () => {
    if (record.amount <= 0) {
      return alert('不能为0')
    }
    if (record.tagIds.length === 0) {
      return alert('一定要选标签')
    }

    addRecord({
      ...record,
      createdAt: new Date().toISOString()
    })
    alert('保存成功')
    setRecords(defaultForm)
  }

  return (
    <MoneyLayout scrollTop={9999}>
      <TagsSection value={record.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={record.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={record.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={record.amount}
                        onOk={submit}
                        onChange={amount => onChange({amount})}/>
    </MoneyLayout>
  )
}

export default Money
