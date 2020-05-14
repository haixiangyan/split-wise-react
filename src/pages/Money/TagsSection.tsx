import styled from 'styled-components'
import * as React from 'react'
import useTags from '../../useTags'

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

type TProps = {
  value: number[]
  onChange: (tagIds: number[]) => void
}

const TagsSection: React.FC<TProps> = (props) => {
  const {tags, addTag} = useTags()

  const selectedTagIds = props.value

  const onToggleTag = (tagId: number) => {
    if (selectedTagIds.find(id => id === tagId)) {
      props.onChange(selectedTagIds.filter(id => id !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }

  const selectedClass = (tagId: number) => selectedTagIds.includes(tagId) ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags && tags.map(tag =>
          <li key={tag.id}
              className={selectedClass(tag.id)}
              onClick={() => onToggleTag(tag.id)}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}

export default TagsSection
