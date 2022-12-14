import '../../../shared/global.css'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './popOverStyle'
import { IPopOver } from './popOver'
import Popover from '@material-ui/core/Popover';


export default function PopOver({ variant, children, element, onClosePopover }: IPopOver) {

    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        setAnchorEl(element);
    }, [element])

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleClose = () => {
        setAnchorEl(null);
        onClosePopover()
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <ThemeProvider theme={FRSTTheme}>            
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    style: {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      borderRadius: 0
                    }
                  }}

            >
                <div style={{marginTop: 20, background: '#333333', position: 'relative'}}>
                <Styles.PopOver>
                    {
                        variant === 'upLeft' ?        
                            <Styles.RectangleUpLeft variant={variant = 'upLeft'}/>
                        : variant === 'upRight' ?
                            <Styles.RectangleUpRight variant={variant = 'upRight'} />
                        : variant === 'lowRight' ?
                            <Styles.RectangleLowRight variant={variant = 'lowRight'} />
                        : variant === 'lowLeft' ?
                            <Styles.RectangleLowLeft variant={variant = 'lowLeft'} />
                        : variant === 'sideLeft' ?
                            <Styles.RectangleLeft variant={variant = 'sideLeft'} />
                        : variant === 'sideRight' ?
                            <Styles.RectangleRight variant={variant = 'sideRight'} />
                        : null
                    }
                    {children}
                </Styles.PopOver>   
                </div>
            </Popover>             
            

        </ThemeProvider>
    );
}