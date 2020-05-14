import * as React from 'react'
import classnames from 'classnames'

type IconProps = React.SVGAttributes<SVGElement> & {
  name?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {name, children, className, ...rest} = props

  return (
    <svg className={classnames('icon', className)} aria-hidden="true" {...rest}>
      {
        props.name &&
        <use xlinkHref={`#icon-${props.name}`}/>
      }
    </svg>
  )
}

export default Icon
