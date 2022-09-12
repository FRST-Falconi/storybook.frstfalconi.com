import React from 'react'
import {
  IProgressStepsItem
} from './index.d'
import {
  ProgressItem,
  ProgressItemTitle,
  ProgressItemSubtitle,
} from './styles'

import Button from '../../buttons'

export default function ProgressStepsItem({
  title,
  subtitle,
  buttonText,
  active = false,
  onClick
}: IProgressStepsItem ) {
  return (
    <ProgressItem active={active}>
      {active
      ?
        <>
          <ProgressItemTitle active={active}>{title}</ProgressItemTitle>
          <ProgressItemSubtitle active={active}>{subtitle}</ProgressItemSubtitle>
          <Button
            handleClick={() => onClick}
            label={buttonText || 'Agendar reunião'}
            variant="primary"
          />
        </>
      :
        <ProgressItemTitle>{title}</ProgressItemTitle>
      }
    </ProgressItem>
  )
}