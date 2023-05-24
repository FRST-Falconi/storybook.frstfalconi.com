import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { Wrapper, WrapperText, Name, Text } from './headerUserStyles'
import { IHeaderUser } from './headerUser'
import Avatar from './../avatar'

export default function HeaderUser({ avatar, name, text, onClick, large }: IHeaderUser) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Wrapper 
                onClick={() => !!(onClick)? onClick() : {}}
            >
                <Avatar 
                    size={large ? '56px' : '32px'}
                    src={avatar?.src} 
                    alt={avatar?.alt}
                />
                <WrapperText
                    style={{justifyContent: 'space-around'}}
                >
                    <Name large={large}>{name}</Name>
                    <Text large={large}>{text}</Text>
                </WrapperText>
            </Wrapper>
        </ThemeProvider>
    )
}
