import * as React from 'react'
import Layout from '../components/Layout'
import {useState} from 'react'
import CategorySection from './Money/CategorySection'
import {TRecord, useRecords} from '../hooks/useRecords'
import useTags from '../hooks/useTags'
import styled from 'styled-components'
import dayjs from 'dayjs'

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

const Header = styled.h3`
  padding: 10px 16px;
  font-size: 18px;
`

const Statistics: React.FunctionComponent = () => {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  const selectedRecords = records.filter(record => record.category === category)

  let hash: { [key: string]: TRecord[] } = {}

  selectedRecords.forEach(r => {
    const key = dayjs(r.createdAt).format('YYYY年MM月DD日')
    const value = r

    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(value)
  })

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    return 0
  })

  return (
    <Layout>
      <CategorySection value={category}
                       onChange={(value) => setCategory(value)}>
      </CategorySection>
      {array.map(([date, record]) =>
        <div>
          <Header>{date}</Header>
          <div>
            {record && record.map(r => {
              return (
                <Item key={r.createdAt}>
                  <div className="tags">
                    {r.tagIds.map(tagId => getName(tagId)!.name).join(',')}
                  </div>
                  {
                    r.note && <div className="note">
                      {r.note}
                    </div>
                  }
                  <div className="amount">
                    $ {r.amount}
                  </div>
                </Item>
              )
            })}
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Statistics
