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
import {ChangeEventHandler} from 'react'

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
  const {findTag, updateTags} = useTags()
  const {tagId} = useParams<TParams>()

  const tag = findTag(parseInt(tagId))

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTags(tag!.id, {name: e.target.value})
  }

  return (
    <Layout>
      <Topbar>
        <Icon name="left-copy"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               onChange={onChange}
               value={tag!.name}
               placeholder="标签名"/>
      </InputWrapper>
      <Space/>
      <Center>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export default Tag
