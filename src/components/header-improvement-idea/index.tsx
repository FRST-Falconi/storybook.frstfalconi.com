import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { Wrapper, WrapperActions} from './headerImprovementIdeaStyles'
import { IHeaderImprovementIdea } from './headerImprovementIdea'
import HeaderUser from './../header-user'
import MenuMore from './../menu-more'
import CounterLike from './../counter-like'

export default function HeaderImprovementIdea({ user, like, menuMore, styles }: IHeaderImprovementIdea) {
    const [ userState, setUserState ] = useState(user);
    const [ likeState, setLikeState ] = useState(like);
    const [ menuMoreState, setMenuMoreState ] = useState(menuMore);

    useEffect(() => {
        setUserState(user);
        setLikeState(like);
        setMenuMoreState(menuMore);
    }, [user, like, menuMore])

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Wrapper style={{...styles}}>
                <HeaderUser 
                    avatar={user?.avatar} 
                    name={user?.name}
                    text={user?.text}
                />
                <WrapperActions>
                    <CounterLike
                        total={like?.total}
                        onClick={() => like?.onClick()}
                    />
                    {menuMore && menuMore?.length > 0 && 
                    <MenuMore
                        options={menuMore}
                    />}
                </WrapperActions>
            </Wrapper>
        </ThemeProvider>
    )
}
