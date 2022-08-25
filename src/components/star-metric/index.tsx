import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './starMetricStyles'
import { IStarMetric } from './starMetric'


export default function StarMetric({ disabled, onChange}: IStarMetric) {
    
    return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.WrapperCard>  
    <Box>
      <Typography component="legend"></Typography>
      <Rating 
        disabled={disabled ? disabled : false}
        onChange={(e)=> {onChange()}}
      />
    </Box>
    </Styles.WrapperCard>

    </ThemeProvider>     
    )
}

