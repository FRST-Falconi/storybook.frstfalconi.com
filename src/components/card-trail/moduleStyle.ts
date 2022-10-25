import styled from 'styled-components'
import { Grid, Box, Card, Typography, LinearProgress } from '@mui/material/'

export const ProgressBox = styled(Box)`
  z-index: 1 !important;
  float: right !important;
  padding-left: 10% !important;
  padding-right: 10% !important;
  margin-top: 160px !important;
  position: relative !important;
`

export const ProgressBar = styled(LinearProgress)`
  width: 128px !important;
  height: 13px !important;
  border-radius: 100px !important;
  background-color: rgba(245, 94, 14, 0.5) !important;
  & .MuiLinearProgress-bar{
    padding-left: 10px !important;
    background-color: ${({theme}) => theme.colors.primary1} !important;
  }
`
export const ProgressLabel = styled.label`
  display: inline-block !important;
  width: 32px !important;
  height: 16px !important;
  font-size: 16px !important;
  color: white !important;
`

export const GridNameMentoring = styled(Grid)`
  padding: 0 !important;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GridAvatar = styled(Grid)`
  padding: 0 !important;
`

export const GridFooter = styled(Grid)`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0;
  gap: 5px;
`

export const NameMentoring = styled.span`
  font-size: 14px !important;
`

export const TitleMentoring = styled.span`
  display: block !important;
  font-size: 14px !important;
  font-weight: 500 !important;
`

export const TextDescription = styled(Typography)`
  margin-top: 10px !important;
  white-space: normal !important;
  height: 102px !important;
  overflow: hidden !important;
  display: -webkit-box;
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 15px !important;
  line-height: 1.1 !important;
`

export const TitleCard = styled.div`
  height: 32px !important;
  font-size: 16px !important;
  font-weight: bold !important;
  white-space: normal !important;
`

export const CardContainer = styled(Card)`
  max-width: 345px !important;
  height: 445px !important;
  width: 282px !important;
  box-shadow: none !important;
  border: 1px solid #c4c4c4;

  background: #FBFBFB;
  border: 1px solid #E8E8E8;
  box-sizing: border-box !important;
  border-radius: 4px !important;
  display: inline-block !important;
  margin-right: 24px !important;
  margin-bottom: 24px !important;

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.secondary2} !important;
  }
`
