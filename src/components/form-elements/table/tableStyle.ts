import styled, { keyframes } from 'styled-components'
import { Skeleton } from '@mui/material'

export const ContainerTable = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutralsGrey7};
  border-radius: 8px;
  overflow: hidden;
`;

export const WrapperTable = styled.div`
  display: block;
  min-width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
`;


export const TableHtml = styled.table`
  width: 100%; 
  border-collapse: collapse;
`

export const WrapperLoading = styled.div`
  width: 100%;
`

export const SkeletonHeader = styled(Skeleton)`
  width: 100% !important;
  height: 44px !important;
  margin: 0 !important;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.neutralsGrey5}, ${({ theme }) => theme.colors.neutralsGrey6});
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: calc(200% + 100%) 0;
  }
`;

export const SkeletonRow = styled(Skeleton) <{ isAlter }>`
  width: 100% !important;
  height: 44px !important;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.neutralsGrey8}, ${({ theme }) => theme.colors.neutralsGrey6}, ${({ theme }) => theme.colors.neutralsGrey8});
  
  background-size: 200% 100%;
  animation: ${skeletonAnimation} ease-in-out ${({ isAlter }) => isAlter ? '4s' : '3s'} infinite !important;
`;