import React, { useEffect, useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './buttonStyle'

type enumVariant = 'primary' | 'secondary' | 'link' | 'expandedPrimary' | 'expandedSecondary' 
type enumType = 'group' | null

interface buttonProps {
    variant?: enumVariant;
    label?: string,
    disabled?: boolean,
    startIcon?: any,
    endIcon?: any,
    sizeIcon?: string,
    handleClick?: (e: any) => void,
    type?: enumType,
    value?: any,
    active?: boolean
    style?: React.CSSProperties,
    length?: number,
    id?: string,
    ref?: any,
    handleMount?: (e:any) => void
}

export default function Button({
    variant,
    label,
    sizeIcon,
    disabled,
    startIcon,
    endIcon,
    handleClick,
    type,
    active,
    style,
    value,
    length,
    id,
    ref,
    handleMount
}: buttonProps) {

    useEffect(() => {
        if (handleMount && id) {
            handleMount(id)
        }
    }, [id])

    return (
        <ThemeProvider theme={{...FRSTTheme, type: type }}>
            { startIcon ?
                (variant === 'link') ?
                    <Styles.LinkButtonStartIcon ref={ref} style={{...style}} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon} id={id}>
                        {startIcon}
                        {label}                        
                    </Styles.LinkButtonStartIcon>
                :
                    <Styles.ButtonStartIcon ref={ref} style={{...style}} variant={variant} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon} id={id}>
                        {startIcon}
                        {label}
                    </Styles.ButtonStartIcon>
            : endIcon ?
                (variant === 'link') ?
                    <Styles.LinkButtonEndIcon ref={ref} style={{...style}} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon} id={id}>
                        {label} 
                        {endIcon}                       
                    </Styles.LinkButtonEndIcon>
                :
                    <Styles.ButtonEndIcon ref={ref} style={{...style}} variant={variant} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon} id={id}>
                        {label}
                        {endIcon}
                    </Styles.ButtonEndIcon>
            :
                (variant === 'link') ?
                    <Styles.LinkButton ref={ref} style={{...style}} disabled={disabled} onClick={handleClick} id={id}>
                        {label}                       
                    </Styles.LinkButton>
                :
                    <Styles.Button ref={ref} style={{...style}} length={length} active={active} value={value} variant={variant} disabled={disabled} onClick={handleClick} id={id}>
                        {label}
                    </Styles.Button>
                    
            }

        </ThemeProvider>
    );
}
