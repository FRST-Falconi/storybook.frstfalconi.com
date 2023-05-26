import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { Wrapper, WrapperText, Name, Text, WrapperHandle } from './headerUserStyles'
import { IHeaderUser } from './headerUser'
import Avatar from './../avatar'
import { EditIcon, TrashIconNew } from '@shared/icons'

export default function HeaderUser({ 
    avatar, 
    name, 
    text, 
    onClick, 
    large, 
    showHandleButtons,
    onClickEdit,
    onClickDelete,
    }: IHeaderUser) {

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
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Name large={large}>{name}</Name>
                        {showHandleButtons ? <>
                            <WrapperHandle onClick={() => onClickEdit ? onClickEdit() : {}} large={large}> 
                                <EditIcon fill={'#444444'}/>
                            </WrapperHandle>
                            <WrapperHandle onClick={() => onClickDelete ? onClickDelete() : {}} large={large}> 
                                <TrashIconNew fill={'#444444'}/>
                            </WrapperHandle>
                        </>: null}
                        </div> 
                    <Text large={large}>{text}</Text>
                </WrapperText>
            </Wrapper>
        </ThemeProvider>
    )
}
