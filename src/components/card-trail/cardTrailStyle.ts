import styled from 'styled-components'
import { Grid, Box, Avatar, CardContent } from '@mui/material/'


export const HeaderImage = styled(Box)<{image, notstarted}>`
    width: 320px;
    height: 200px;
    cursor: ${({notstarted}) => notstarted ? 'no-drop' : 'pointer'};
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('${({image}) => image}');
    filter: grayscale(${({notstarted}) => notstarted ? '1' : '0'});
    background-size: contain;
`

export const MyBox = styled(Box)`
    padding: 0px;
    height: 245px;
    padding-top: 12px;
`

export const MyCardContent = styled(CardContent)<{notstarted: any, hasmentor: any}>`
    cursor: ${({notstarted}) => notstarted ? 'no-drop' : 'pointer'};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${({hasmentor}) => hasmentor ? 'space-between' : 'flex-start'};
`

export const WrapperDate = styled.div<{notstarted}>`
    display: ${({notstarted}) => notstarted ? 'flex' : 'none'};
    margin-bottom: 7px;
`