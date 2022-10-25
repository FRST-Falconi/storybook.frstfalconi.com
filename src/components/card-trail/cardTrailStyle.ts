import styled from 'styled-components'
import { Grid, Box, Avatar, CardContent } from '@mui/material/'


export const HeaderImage = styled(Box)<{image, notStarted}>`
    width: 320px;
    height: 200px;
    cursor: ${({notStarted}) => notStarted ? 'no-drop' : 'pointer'};
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('${({image}) => image}');
    filter: grayscale(${({notStarted}) => notStarted ? '1' : '0'});
    background-size: contain;
`

export const MyBox = styled(Box)`
    padding: 0px;
    height: 245px;
    padding-top: 12px;
`

export const MyCardContent = styled(CardContent)<{notStarted, hasMentor}>`
    cursor: ${({notStarted}) => notStarted ? 'no-drop' : 'pointer'};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${({hasMentor}) => hasMentor ? 'space-between' : 'flex-start'};
`

export const WrapperDate = styled.div<{notStarted}>`
    display: ${({notStarted}) => notStarted ? 'flex' : 'none'};
    margin-bottom: 7px;
`