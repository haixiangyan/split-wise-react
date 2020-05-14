import * as React from 'react'
import Layout from '../../components/Layout'
import useTags from '../../useTags'
import styled from 'styled-components'
import Icon from '../../components/Icon'
import {Link} from 'react-router-dom'
import Button from '../../components/Button'
import Center from '../../components/Center'
import Space from '../../components/Space'

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
        <Button>新增标签</Button>
      </Center>
    </Layout>
  )
}

export default Tags
