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

  const findTagIndex = (id: number) => {
    let result = -1
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i
        break
      }
    }
    return result
  }

  const updateTags = (id: number, {name}: {name: string}) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag))
  }

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

  return {tags, setTags, findTag, updateTags, deleteTag}
}

export default useTags
