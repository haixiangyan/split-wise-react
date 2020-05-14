import * as React from 'react'
import {useParams} from 'react-router-dom'
import useTags from '../../useTags'
import Layout from '../../components/Layout'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import styled from 'styled-components'

type TParams = {
  tagId: string
}

const Topbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
`

const Tag: React.FC = () => {
  const {findTag} = useTags()
  const {tagId} = useParams<TParams>()

  const tag = findTag(parseInt(tagId))

  return (
    <Layout>
      <Topbar>
        <Icon name="left-copy"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <label>
        <span>标签名</span>
        <input placeholder="标签名" type="text"/>
      </label>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}

export default Tag
