import * as React from 'react'
import Layout from '../../components/Layout'
import useTags from '../../useTags'
import styled from 'styled-components'
import Icon from '../../components/Icon'
import {Link} from 'react-router-dom'

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li {
    margin-left: 16px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 20px;
    > a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px 12px 0;
    }
  }
`

const AddTagButton = styled.button`
  padding: 8px 12px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background: #f60;
  color: #fff;
`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Space = styled.div`
  height: 16px;
`

const Tags: React.FunctionComponent = () => {
  const {tags, setTags} = useTags()

  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={`/tags/${tag.id}`}>
              <span className="one-line">{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <AddTagButton>新增标签</AddTagButton>
      </Center>
    </Layout>
  )
}

export default Tags
