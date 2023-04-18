import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { IProgressBar } from './progressBar'
import * as Style from './progressStyle'

export default function ProgressBar({ value, label }: IProgressBar) {
  return (
    <ThemeProvider theme={FRSTTheme}>
      <Style.ProgressContainer>
        <span>{label}</span>
        <Style.ValueAndProgress>
          <Style.BorderLinearProgress variant="determinate" value={value} /> &nbsp;{value + '%'}
        </Style.ValueAndProgress>
      </Style.ProgressContainer>
    </ThemeProvider>
  )
}
