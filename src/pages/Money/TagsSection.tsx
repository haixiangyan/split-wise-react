import styled from 'styled-components'
import * as React from 'react'
import {useState} from 'react'

const Wrapper = styled.section`
  padding: 12px 16px;
  background: #ffffff;
  flex-grow: 1;
  > ol {
    margin: 0 -12px;
    > li {
      display: inline-block;
      padding: 4px 16px;
      margin: 8px 12px;
      background: #d9d9d9;
      border-radius: 18px;
      font-size: 14px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    padding: 2px 4px;
    margin-bottom: 8px;
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    color: #666;
  }
`

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为')
    if (tagName !== null) {
      setTags([...tags, tagName])
    }
  }

  const onToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const selectedClass = (tag: string) => selectedTags.includes(tag) ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags && tags.map(tag =>
          <li key={tag}
              className={selectedClass(tag)}
              onClick={() => onToggleTag(tag)}>
            {tag}
          </li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export default TagsSection
