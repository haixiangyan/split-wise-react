import * as React from 'react'
import {useParams} from 'react-router-dom'
import useTags from '../../useTags'

type TParams = {
  tagId: string
}

const Tag: React.FC = () => {
  const {findTag} = useTags()
  const {tagId} = useParams<TParams>()

  const tag = findTag(parseInt(tagId))

  return (
    <div>{tag && tag.name}</div>
  )
}

export default Tag
