import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { Wrapper, WrapperValue } from './commentPostStyles'
import { ICommentPost } from './commentPost'
import HeaderImprovementIdea from './../header-improvement-idea'
import InputCommentPostIt from './../FI/inputCommentPost-it'

export default function CommentPost({ 
    user, 
    like,
    menuMore,
    valueComment,
    onChangeValueComment,
    isActiveEdit,
    inputEdit,
    styles }: ICommentPost) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Wrapper style={{...styles}}>
                { isActiveEdit ? 
                <>
                    <InputCommentPostIt
                        value={valueComment}
                        avatar={user?.avatar}
                        onChange={(e) => {}}
                        placeholder={inputEdit?.placeholder}
                        limit={inputEdit?.limit}
                        hasEmoji={inputEdit?.hasEmoji}

                        onClickPublish={(e) => inputEdit?.onClickPublish(e)}
                        onClickCancel={() => inputEdit?.onClickCancel()}

                        labels={inputEdit?.labels}
                    />
                </>
                :
                <>
                    <HeaderImprovementIdea 
                        user={user} 
                        like={like} 
                        menuMore={menuMore}
                    />
                    <WrapperValue>
                        {valueComment}
                    </WrapperValue> 
                </> }
            </Wrapper>
        </ThemeProvider>
    )
}
