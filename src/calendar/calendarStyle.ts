import styled from 'styled-components'
import Card from '@mui/material/Card'
import Stepper from '@mui/material/Stepper'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import CheckIcon from '@mui/icons-material/Check'
import LoginIcon from '@mui/icons-material/Login'
import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import CardActions from '@mui/material/CardActions'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { styled as muiStyled } from '@mui/material/styles'

export interface LabelStepperProps {
  $active: boolean
}

export const Container = styled(Card)`
  height: 420px !important;
  box-shadow: none !important;
  border: 1px solid #c4c4c4 !important;
  box-sizing: border-box !important;
  border-radius: 4px !important;
  padding: 24px !important;
`

export const Title = styled.span`
  font-size: 20px !important;
  color: #ff4d0d !important;
`

export const TextDescription = styled.span`
  font-size: 14px !important;
  color: #222222 !important;
`

export const ContainerDescription = styled.div`
  padding-top: 26px !important;
`

export const ContainerText = styled.div`
  padding-top: 35px !important;
`

export const CheckIconCustom = styled(CheckIcon)`
  color: white !important;
  font-size: 19px !important;
`

export const LoginIconCustom = styled(LoginIcon)`
  color: white !important;
  font-size: 20px !important;
`

export const FormControlSelect = styled(FormControl)`
  .MuiInputLabel-formControl {
    color: rgba(0, 0, 0, 0.6) !important;
    margin-top: 5px !important;
  }
`
export const DropDownList = styled(Select)`
  max-width: 350px !important;
  height: 40px !important;
  & > div {
    border: 1px solid #e8e8e8 !important;
  }
  .MuiSelect-select {
    border: none !important;
  }
  .MuiSelect-icon {
    color: #000 !important; // for icon drop down icon color
  }
  &.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ff4d0d !important;
    border-width: 1px !important;
  }
`

export const LabelDateStepper = styled.label`
  font-size: 14px !important;
  line-height: 14px !important;
`

export const LabelTitleStepper = styled.label`
  overflow: hidden; !important;
  display: block !important;
  max-height: 1.33rem !important;
;
`

export const ContainerStepper = styled.div`
  margin-top: 10px !important;
`

export const CustomStepper = styled(Stepper)`
  height: 100px !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  box-sizing: content-box !important;
  scroll-behavior: smooth !important;
  padding-bottom: 30px !important;
`

export const CustomStep = styled(Step)`
  padding: 0px !important;
  min-width: 150px !important;
`

export const BoxStepper = styled(Box)`
  width: 100% !important;
  padding-top: 20px !important;
  text-align: center !important;
  overflow: hidden !important;
  height: 120px !important;
`

export const LabelTimeMentoring = styled.label`
  font-size: 16px !important;
  color: #ff4d0d !important;
  font-weight: bolder !important;
`

export const BoxLabelTimeMentoring = styled.div`
  padding-top: 30px !important;
  padding-bottom: 16px !important;
`

export const LabelSchedule = styled.span`
  font-size: 16px !important;
`

export const LabelScheduleClick = styled.span`
  color: #0645ad !important;
  font-size: 16px !important;
  font-weight: bolder !important;
  cursor: pointer !important;
`

export const ActionContainer = styled(CardActions)`
  padding: 0px !important;
`

export const ColorlibConnector = muiStyled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 40,
    left: 'calc(-54% + 7px)',
    right: 'calc(40% + 20px)',
    [`&.MuiStepLabel-labelContainer`]: {
      [`&.Mui-active`]: {
        backgroundColor: 'red'
      }
    }
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#ff4d0d'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#000'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: '#000',
    borderRadius: 1
  }
}))

export const ColorlibStepIconRoot = muiStyled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ ownerState }) => ({
  backgroundColor: '#000',
  zIndex: 1,
  color: '#fff',
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'none !important',
  ...(ownerState.active && {
    backgroundColor: '#ff4d0d',
    width: 32,
    height: 32,
    boxShadow: 'none !important'
  }),
  ...(ownerState.completed && {
    backgroundColor: '#000',
    width: 24,
    height: 24,
    boxShadow: 'none !important'
  }),
  ...(!ownerState.active &&
    !ownerState.completed && {
    backgroundColor: '#ff4d0d',
    width: 24,
    height: 24,
    boxShadow: 'none !important'
  }),
  ...(ownerState.active &&
    ownerState.completed && {
    backgroundColor: '#000',
    width: 24,
    height: 24,
    boxShadow: 'none !important'
  })
}))
