import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './popOverStyle'
import { IPopOver } from './popOver'
import { useState } from 'react'


import * as React from 'react';
// import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function PopOver({position, isOpen, align, clickOutside, padding, contentPopOver, children }) {
    const[isPopoverOpen, setIsPopoverOpen] = useState(isOpen)

    const anchorElement = children;

    React.useEffect(() => {
        setIsPopoverOpen(isOpen)
    }, [isOpen])

    return (
        <Styles.Wrapper>
            <ThemeProvider theme={FRSTTheme}>
                    <Styles.MyBasicPopOver
                        isOpen={isPopoverOpen}
                        positions={[position ? position : 'bottom']}
                        align={ align ? align : 'start' }
                        padding={ padding ? padding : 20} 
                        reposition={false}
                        onClickOutside={() => clickOutside()}
                        content={({ position, nudgedLeft, nudgedTop }) => (
                            <Styles.PopOver>
                                <Styles.Tab position={position} align={align}/>
                                {contentPopOver}
                            </Styles.PopOver>
                        )}
                    >
                        {anchorElement}
                    </Styles.MyBasicPopOver>
            </ThemeProvider>
        </Styles.Wrapper>
    )
}