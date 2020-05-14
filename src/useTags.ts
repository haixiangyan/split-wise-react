import {useEffect, useRef, useState} from 'react'
import createId from './lib/createId'
import useUpdate from './hooks/useUpdate'

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
  const [tags, setTags] = useState<TTag[]>([])

  useEffect(() => {
    setTags(JSON.parse(window.localStorage.getItem('tags') || '[]'))
  }, []) // 第一次渲染
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags]) // 监听 tags

  const findTag = (id: number) => tags.find(t => t.id === id)

  const updateTags = (id: number, {name}: {name: string}) => {
    setTags(tags.map(tag => tag.id === id ? {id, name} : tag))
  }

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

  const addTag = () => {
    const tagName = window.prompt('新标签的名称为')
    if (tagName !== null) {
      setTags([...tags, {
        id: createId(),
        name: tagName
      }])
    }
  }

  return {tags, setTags, findTag, updateTags, deleteTag, addTag}
}

export default useTags
