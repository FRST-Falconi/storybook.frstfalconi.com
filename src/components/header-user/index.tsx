import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { Wrapper, WrapperText, Name, Text } from './headerUserStyles'
import { IHeaderUser } from './headerUser'
import Avatar from './../avatar'

export default function HeaderUser({ avatar, name, text, onClick }: IHeaderUser) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Wrapper onClick={() => onClick()}>
                <Avatar 
                    size='32px'
                    src={avatar?.src} 
                    alt={avatar?.alt}
                />
                <WrapperText>
                    <Name>{name}</Name>
                    <Text>{text}</Text>
                </WrapperText>
            </Wrapper>
        </ThemeProvider>
    )
}
