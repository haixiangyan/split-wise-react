import * as React from 'react'
import Layout from '../components/Layout'
import {useState} from 'react'
import CategorySection from './Money/CategorySection'
import {useRecords} from '../hooks/useRecords'
import useTags from '../hooks/useTags'
import dayjs from 'dayjs'

const Statistics: React.FunctionComponent = () => {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return (
    <Layout>
      <CategorySection value={category}
                       onChange={(value) => setCategory(value)}/>
      <div>
        {records && records.map(record => {
          return (
            <div key={record.createdAt}>
              {record.tagIds.map(tagId => <span key={tagId}>{getName(tagId)!.name}</span>)}
              <hr/>
              {record.amount}
              <hr/>
              {dayjs(record.createdAt).format('YYYY年MM月DD日')}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Statistics
