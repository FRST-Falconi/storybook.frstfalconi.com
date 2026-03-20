import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { IProgressBar } from './progressBar'
import * as Style from './progressStyle'

export default function ProgressBar({ value, label, style, bgColor,trackColor, colorText }: IProgressBar) {
  return (
    <ThemeProvider theme={FRSTTheme}>
      <Style.ProgressContainer style={style}>
        <span>{label}</span>
        <Style.ValueAndProgress $colorText={colorText}>
          <Style.BorderLinearProgress $trackColor={trackColor} $bgColor={bgColor} variant="determinate" value={value} /> &nbsp;{value + '%'}
        </Style.ValueAndProgress>
      </Style.ProgressContainer>
    </ThemeProvider>
  )
}
