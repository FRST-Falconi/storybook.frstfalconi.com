import styled from 'styled-components'
import { Box, Modal } from '@mui/material'

export const ModalBox = styled(Box)`
  background-color: #fff;
  max-width: 670px;
  max-height: 80%;
  padding-top: 11px;
  position: relative;
  border-radius: 10px;
  font-family: 'Work Sans', sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CloseButton = styled.div`
  cursor: pointer;
  padding: 0rem 2rem 0rem 0rem;
  display: flex;
  justify-content: flex-end;
`

export const Container = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: -4px;

  > p {
    color: #222222;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Work Sans';
  }
`

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0rem 0rem 1rem 2rem;
  > p {
    color: #222222;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Work Sans';
  }
`

export const ListOfUsers = styled.div`
  width: 100%;
  padding: 0rem 1rem 0rem 1rem;
  overflow-y: auto;
  height: 430px;
`
export const UsersInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 9px;
  > p {
    font-family: 'PT Sans';
    font-weight: bold;
    font-size: 16px;
    color: #222222;
  }

  > span {
    color: #757575;
    font-size: 14px;
    font-family: 'PT Sans';
    font-weight: 400;
  }
`

export const Autor = styled.div`
  background: #444444;
  padding: 6px 16px 6px 16px;
  border-radius: 18px;
  height: 30px;
  width: 87px;
  display: flex;
  align-items: center;
  > p {
    color: #ffffff;
    font-size: 14px;
    font-family: 'PT Sans';
    font-weight: 400;
    margin-left: 4px;
  }
`
