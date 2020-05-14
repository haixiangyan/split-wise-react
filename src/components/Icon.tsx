import * as React from 'react'

type IconProps = {
  name?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="icon" aria-hidden="true">
      {
        props.name &&
        <use xlinkHref={`#icon-${props.name}`}/>
      }
    </svg>
  )
}

export default Icon
