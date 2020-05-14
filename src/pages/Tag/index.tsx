import * as React from 'react'
import {useParams} from 'react-router-dom'
import useTags from '../../useTags'
import Layout from '../../components/Layout'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import styled from 'styled-components'
import Input from '../../components/Input'
import Center from '../../components/Center'
import Space from '../../components/Space'

type TParams = {
  tagId: string
}

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 16px;
`

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
      <InputWrapper>
        <Input label="标签名" type="text" value={tag!.name} placeholder="标签名"/>
      </InputWrapper>
      <Space/>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export default Tag
