
import { Box } from "@mui/material";
import { useState } from "react";
import '../../../shared/global.css';
import { ThemeProvider } from 'styled-components';
import { FRSTTheme } from '../../../theme';
import { ProgressBar, ProgressItem, ContainerSteps, CicleStep, CicleStepChar, CicleStepName } from './stepsProgressStyles'
// import { IAvatar } from './stepsProgress'

export default function StepsProgress({ definedSteps, stepSelected, width = 600,colorItemWhite=false}) {
    const stepColor = definedSteps.filter(s => s.step !== 1);

    return (
        <ThemeProvider theme={FRSTTheme}>

            <ProgressBar>
                { stepColor && Array.isArray(stepColor) ?
                    stepColor.map((item: any, index: any) => 
                        <ProgressItem key={index} active={item?.active}/>
                    )
                :null }
            </ProgressBar>
            <ContainerSteps>
                {definedSteps && Array.isArray(definedSteps) ? 
                    definedSteps.map((item: any, index: any) => {
                        return ( <>
                            { (item?.step == stepSelected) &&
                                <StepItem
                                    index={index}
                                    name={item?.name}
                                    action={item?.action} 
                                    step={item?.step} 
                                    variant={'selected'}
                                /> }
                            { (!(item?.step == stepSelected)  && item?.active) && 
                                <StepItem
                                    index={index}
                                    name={item?.name}
                                    action={item?.action} 
                                    step={item?.step} 
                                    variant={'normal'}
                                    colorItemWhite={colorItemWhite}

                                /> }
                            { (!item?.active) &&
                                <StepItem
                                    index={index}
                                    name={item?.name}
                                    action={item?.action} 
                                    step={item?.step} 
                                    variant={'disabled'}
                                /> }
                            </>
                        )
                    })
                :null
                }
            </ContainerSteps>

        </ThemeProvider>
    )
}

function StepItem({index, name, action, step, variant,colorItemWhite = false}) {
    return (
        <>
            <Box key={index}>
                <CicleStep 
                    variant={variant}/>
                <CicleStepChar 
                    variant={variant} 
                    onClick={() => variant != 'disabled' ? action() : () => {}}>{step}</CicleStepChar>
                <CicleStepName 
                    variant={variant}
                    colorItemWhite={colorItemWhite}
                    onClick={() => variant != 'disabled' ? action() : () => {}}>{name}</CicleStepName>
            </Box>
    </>
    )
}