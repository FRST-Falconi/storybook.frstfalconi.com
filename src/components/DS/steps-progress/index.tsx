
import { Box } from "@mui/material";
import { useState } from "react";
import '../../../shared/global.css';
import { ThemeProvider } from 'styled-components';
import { FRSTTheme } from '../../../theme';
// import * as Styles from './avatarStyles'
// import { IAvatar } from './stepsProgress'

export default function StepsProgress({ definedSteps, stepSelected, width = 600 }) {
    const stepColor = definedSteps.filter(s => s.step !== 1);

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: `100%`, margin: 'auto', position: 'relative' }}>

                {definedSteps && Array.isArray(definedSteps) ? 
                    definedSteps.map((item: any, index: any) => {
                        if(item?.step == stepSelected) {
                            return (
                                <Box key={index}>
                                    <Box sx={{ width: '50px', height: '50px', borderRadius: '150px', background: '#FFE0C2', opacity: '0.5', color: '#FFF' }}></Box>
                                    <Box onClick={item?.action} sx={{ cursor: 'pointer', width: '30px', height: '30px', borderRadius: '150px', background: '#F26818', color: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-40px', position: 'relative', marginLeft: '10px' }}>{item?.step}</Box>
                                    <Box sx={{ marginLeft:'-10px', marginTop: '20px', width: '70px', textAlign: 'center' }}>{item?.name}</Box>
                                </Box>
                            )
                        } 
                        if(!(item?.step == stepSelected)  && item?.active) {
                            return (
                                <Box key={index}>
                                    <Box sx={{ width: '50px', height: '50px', borderRadius: '150px', background: '#FFE0C2', opacity: '0', color: '#FFF' }}></Box>
                                    <Box onClick={item?.action} sx={{ cursor: 'pointer', width: '30px', height: '30px', borderRadius: '150px', background: '#FEA852', color: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-40px', position: 'relative', marginLeft: '10px' }}>{item?.step}</Box>
                                    <Box sx={{ marginLeft:'-10px', marginTop: '20px', width: '70px', textAlign: 'center' }}>{item?.name}</Box>
                                </Box>
                            )
                        }
                        if(!item?.active) {
                            return (
                                <Box key={index}>
                                    <Box sx={{ cursor: 'not-allowed', width: '50px', height: '50px', borderRadius: '150px', background: '#FFE0C2', opacity: '0', color: '#FFF' }}></Box>
                                    <Box sx={{ width: '30px', height: '30px', borderRadius: '150px', background: '#BDBDBD', color: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-40px', marginLeft: '10px' }}>{item?.step}</Box>
                                    <Box sx={{ marginLeft:'-10px', marginTop: '20px', width: '70px', textAlign: 'center' }}>{item?.name}</Box>
                                </Box>
                            )
                        }

                    })
                :null
                }

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: `calc(100% - 4%)`, margin: 'auto', marginTop: '-77px' }}>
                {stepColor && Array.isArray(stepColor) ?
                    stepColor.map((item: any, index: any) =>
                        <Box key={index} sx={{ height: '8px', background: item?.active ? '#FEA852' : '#D9D9D9', width: `100%` }}></Box>
                    )
                :null}
            </Box>
        </ThemeProvider>
    )
}
