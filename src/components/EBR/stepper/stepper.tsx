import React from 'react'
import {
  IStepper
} from './index.d'
import {
  ProgressContainer,
  Progress
} from './styles'


export default function Stepper({
  children,
}: IStepper ) {
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