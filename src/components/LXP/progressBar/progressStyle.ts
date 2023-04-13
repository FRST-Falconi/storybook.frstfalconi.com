import styled, { css } from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress'

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  span {
    margin-bottom: 0.3rem;
  }
`

export const ValueAndProgress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const BorderLinearProgress = styled(LinearProgress)`
  width: 100%;
  height: 8px !important;
  border-radius: 8px;
  background: rgba(255, 77, 13, 0.3) !important;

  .MuiLinearProgress-bar {
    background: #ff4d0d !important;
  }
`
