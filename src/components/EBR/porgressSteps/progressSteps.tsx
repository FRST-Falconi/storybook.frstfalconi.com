import React from 'react'
import {
  IProgressSteps
} from './index.d'
import {
  ProgressContainer,
  Progress
} from './styles'


export default function ProgressSteps({
  children,
}: IProgressSteps ) {
  return (
    <>
      <ProgressContainer>
        <Progress>
          {children && children}
        </Progress>
      </ProgressContainer>
    </>
  )
}