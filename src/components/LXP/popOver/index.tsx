import '../../../shared/global.css'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './popOverStyle'
import { IPopOver, IPopOverItems } from './popOver'
import Popover from '@material-ui/core/Popover';
import Button from '@components/buttons'
import { display } from '@mui/system'

const ArrowPopover = () => {
    return (<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1L1 11.5H8.5H16L8.5 1Z" fill="white" stroke="#BDBDBD"/>
                <path d="M1.21997 12L2.33 10.5H14.67L15.75 12H1.21997Z" fill="white"/>
            </svg>)
}
export function PopOverItem(props: IPopOverItems) {

    return (
        <div style={{
                width: '100%',
                padding: 8,
                margin: 0,
                fontSize: 16,
                borderBottom: props.noBorder ? 'none' : '1px solid #EBEBEB',
                display: 'flex',
                flexDirection: 'row',
                gap: 8,
                fontFamily: 'PT Sans',
                cursor: 'pointer',
                color: props.color ? props.color : '#000000',
                fontWeight: props.isFontBold ? '700' : 'normal'
            }}        
        >
            {props.icon}
            {props.label}
        </div>
    )
}

export function PopOver({ variant, children, element, onClosePopover }: IPopOver) {

    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        setAnchorEl(element);
    }, [element])

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
                      borderRadius: 8
                    }
                }}
                style={{
                    borderRadius: 8
                }}
            >
                <div style={{marginTop: 12}}>
                <Styles.PopOver>
                    {
                        variant === 'upLeft' ?        
                            <Styles.RectangleUpLeft variant={variant = 'upLeft'}/>
                        : variant === 'upRight' ?
                            <Styles.RectangleUpRight variant={variant = 'upRight'}>
                               <ArrowPopover/>
                            </Styles.RectangleUpRight>
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
                    <div style={{zIndex: 9}}>
                        {children}
                    </div>
                </Styles.PopOver>   
                </div>
            </Popover>             
            

        </ThemeProvider>
    );
}