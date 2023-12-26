import { Box, LinearProgress } from '@mui/material'
import { useState } from 'react'
import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import {
  // ProgressBar,
  ProgressItem,
  ContainerSteps,
  CicleStep,
  CicleStepChar,
  CicleStepName
} from './stepsProgressStyles'
import ProgressBar from '@hawk-ui/progress-bar'

// import { IAvatar } from './stepsProgress'

export default function StepsProgressFill({ definedSteps, stepSelected, width = 600 }) {
  const stepColor = definedSteps.filter((s) => s.step !== 1)

  return (
    <ThemeProvider theme={FRSTTheme}>
      {/* <ProgressBar>
        {stepColor && Array.isArray(stepColor)
          ? stepColor.map((item: any, index: any) => <ProgressItem key={index} active={item?.active} />)
          : null}
      </ProgressBar> */}

      <ContainerSteps>
        {definedSteps && Array.isArray(definedSteps)
          ? definedSteps.map((item: any, index: any) => {
              return (
                <>
                  {item?.step == stepSelected && (
                    <>
                      <StepItem
                        index={index}
                        name={item?.name}
                        action={item?.action}
                        step={item?.step}
                        variant={'selected'}
                      />
                      <ProgressBar value={7} maxRange={10} />{' '}
                    </>
                  )}
                  {!(item?.step == stepSelected) && item?.active && (
                    <>
                      <StepItem
                        index={index}
                        name={item?.name}
                        action={item?.action}
                        step={item?.step}
                        variant={'normal'}
                      />
                      <ProgressBar value={7} maxRange={10} />{' '}
                    </>
                  )}
                  {!item?.active && (
                    <>
                      <StepItem
                        index={index}
                        name={item?.name}
                        action={item?.action}
                        step={item?.step}
                        variant={'disabled'}
                      />
                      <ProgressBar value={7} maxRange={10} />{' '}
                    </>
                  )}
                </>
              )
            })
          : null}
      </ContainerSteps>
    </ThemeProvider>
  )
}

function StepItem({ index, name, action, step, variant }) {
  return (
    <>
      <Box key={index}>
        <CicleStep variant={variant} />
        <CicleStepChar variant={variant} onClick={() => (variant != 'disabled' ? action() : () => {})}>
          {step}
        </CicleStepChar>
        <CicleStepName variant={variant} onClick={() => (variant != 'disabled' ? action() : () => {})}>
          {name}
        </CicleStepName>
      </Box>
    </>
  )
}
