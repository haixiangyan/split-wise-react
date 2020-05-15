import * as React from 'react'
import Layout from '../components/Layout'
import {useState} from 'react'
import CategorySection from './Money/CategorySection'
import {useRecords} from '../hooks/useRecords'
import useTags from '../hooks/useTags'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  
  > .note {
    margin-left: 16px;
    margin-right: auto;
    color: #666;
  }
`

const Statistics: React.FunctionComponent = () => {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  const selectedRecords = records.filter(record => record.category === category)

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={(value) => setCategory(value)}/>
      <div>
        {selectedRecords && selectedRecords.map(record => {
          return (
            <Item key={record.createdAt}>
              <div className="tags">
                {record.tagIds.map(tagId => <span key={tagId}>{getName(tagId)!.name}</span>)}
              </div>
              {
                record.note && <div className="note">
                  {record.note}
                </div>
              }
              <div className="amount">
                {record.amount}
              </div>
            </Item>
          )
        })}
      </div>
    </Layout>
  )
}

export default Statistics
