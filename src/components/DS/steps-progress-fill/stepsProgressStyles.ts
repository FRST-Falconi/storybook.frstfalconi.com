import styled from 'styled-components'
import { Grid, Avatar, CardContent } from '@mui/material/'
import { Box } from "@mui/material";


export const ProgressBar = styled(Box)`
    display: flex;
    justify-content: space-between;
    max-width: calc(100% - 66px);
    margin: auto;
    margin-bottom: -28px;    
    
    @media (max-width: 400px) {
        max-width: calc(100% - 50px);
        margin-bottom: -28px;    
    }
`

export const ProgressItem = styled(Box)<{active}>`
    height: 8px;
    background: ${({active}) => active ? '#FEA852' : '#D9D9D9'};
    width: 100%;
    @media (max-width: 400px) {
        height: 5px;
    }
`

export const ContainerSteps = styled(Box)`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin: auto;
    /* position: relative;
    z-index: 1; */
`

export const CicleStep = styled(Box)<{variant}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #FFE0C2;
    color: #FFF;
    opacity: ${({variant}) => variant == 'selected' ? '0.5' : '0'};
    cursor: ${({variant}) => variant == 'disabled' ? 'not-allowed' : 'pointer'};
    @media (max-width: 400px) {    
        opacity: 0;
        width: 25px;
        height: 25px;
    }
`

export const CicleStepChar = styled(Box)<{variant}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #FFF;
    margin-left: 10px;
    margin-top: -40px;
    background: ${({variant}) => variant == 'disabled' ? ('#BDBDBD') : (variant == 'selected' ? '#F26818' : '#FEA852')};
    position: ${({variant}) => variant != 'disabled' && 'relative' };
    cursor: ${({variant}) => variant == 'disabled' ? 'not-allowed' : 'pointer'};

    @media (max-width: 400px) {
        width: 15px;
        height: 15px;
        margin-top: -8px;    
    }
`

export const CicleStepName = styled(Box)<{variant}>`
    margin-left: -10px;
    margin-top: 20px;
    width: 70px;
    text-align: center;
    color: ${({variant}) => variant == 'disabled' ? ('#757575') : (variant == 'selected' ? '#F26818' : '#222')};
    font-weight: ${({variant}) => variant == 'selected' ? '600' : '400'};
    cursor: ${({variant}) => variant == 'disabled' ? 'not-allowed' : 'pointer'};

    @media (max-width: 400px) {        
        font-size: 10px;
    }
`