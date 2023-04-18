import React from 'react'

import * as S from './StepControllerStyle'
import ComputerIcon from '@mui/icons-material/Computer'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function StepController({
  top = '25px',
  numberCurrentStep,
  numberTotalSteps,
  labelHome,
  labelContact,
  prevStep,
  nextStep,
  goToStart,
  goToContact
}: {
  top?: string
  numberCurrentStep: number
  numberTotalSteps: number
  labelHome: string
  labelContact: string
  prevStep: () => void
  nextStep: () => void
  goToStart: () => void
  goToContact: () => void
}) {
  return (
    <S.ContainerStepController style={{ top: top }}>
      <div onClick={goToStart}>
        <ComputerIcon sx={{ color: '#242424', fontSize: '0.9rem', marginRight: '8px' }} />
        {labelHome}
      </div>

      <div>
        <S.StepControllerArrow onClick={prevStep}>
          <ArrowBackIosIcon sx={{ fontSize: '0.8rem', marginLeft: '2px' }} />
        </S.StepControllerArrow>
        <span style={{ fontSize: '0.8rem', margin: '0 3px' }}>{numberCurrentStep}</span>
        <span style={{ fontSize: '0.8rem', margin: '0 3px' }}>de</span>
        <span style={{ fontSize: '0.8rem', margin: '0 3px' }}>{numberTotalSteps}</span>
        <S.StepControllerArrow onClick={nextStep}>
          <ArrowForwardIosIcon sx={{ fontSize: '0.8rem' }} />
        </S.StepControllerArrow>
      </div>
      <div onClick={goToContact}>
        <PersonAddIcon sx={{ color: 'inherit', fontSize: '0.8rem', marginRight: '8px' }} />
        {labelContact}
      </div>
    </S.ContainerStepController>
  )
}
