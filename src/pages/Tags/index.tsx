import * as React from 'react'
import Layout from '../../components/Layout'
import useTags from '../../useTags'

const Tags: React.FunctionComponent = () => {
  const {tags, setTags} = useTags()

  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  )
}

export default Tags
