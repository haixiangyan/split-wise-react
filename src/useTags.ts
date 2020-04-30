import {useState} from 'react'
import createId from './lib/createId'

export type TTag = {
  id: number
  name: string
}

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
]

const useTags = () => {
  const [tags, setTags] = useState<TTag[]>(defaultTags)

  const findTag = (id: number) => tags.find(t => t.id === id)

  return {tags, setTags, findTag}
}

export default useTags
