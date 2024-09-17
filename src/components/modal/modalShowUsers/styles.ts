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
    border-bottom: 1px solid #e0e0e0;

    ::-webkit-scrollbar {
        width: 8px; 
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888; 
        border-radius: 15px; 
        border: 2px solid #f1f1f1; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555; 
    }

    scrollbar-width: thin;
    scrollbar-color: #BDBDBD #f1f1f1;
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

export const ListOfUsersContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
`
