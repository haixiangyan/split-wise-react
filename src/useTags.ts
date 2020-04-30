import {useState} from 'react'

export type TTag = {
  id: number
  name: string
}

const useTags = () => {
  const [tags, setTags] = useState<TTag[]>([
    {id: 1, name: '衣'},
    {id: 2, name: '食'},
    {id: 3, name: '住'},
    {id: 4, name: '行'},
  ])
  return {tags, setTags}
}

export default useTags
