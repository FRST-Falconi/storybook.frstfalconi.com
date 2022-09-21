import React from 'react'
import {
  IButtonGroup
} from './index.d'

import {
  ButtonGroupWrapper
} from './styles'

export default function ButtonGroup({
  children,
  active
}: IButtonGroup) {

  const ButtonGroupProps = {
    type: 'group',
    variant: 'primary'
  }

  return (
    <ButtonGroupWrapper className="buttons-group">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...ButtonGroupProps,
          active: child.props.value === active,
          length: children.length
        })
      )}
    </ButtonGroupWrapper>
  )
}