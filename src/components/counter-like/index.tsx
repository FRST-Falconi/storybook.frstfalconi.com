import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { WrapperButton, Counter } from './counterLikeStyles'
import { IConterLike } from './counterLike'
import { IconLikeLine, IconLikeFilled } from '@shared/icons'

export default function CounterLike({ active, onClick, total, size }: IConterLike) {
    const [ actionArea, setActionArea] = useState(false)
    const [ counter, setCounter ] = useState(0)

    useEffect(() => {
        setCounter(total)
    }, [total])

    return (
        <ThemeProvider theme={FRSTTheme}>
            <WrapperButton
                onClick={() => onClick()}
                onMouseOver={() => setActionArea(true)}
                onMouseOut={() => setActionArea(false)}
            >   
                <>
                    { active ? 
                        <IconLikeFilled
                            width={size}
                        />
                    : <IconLikeLine 
                        width={size}
                        fill={actionArea ? '#F26818' : '#444444'}
                    /> }
                </>
                    { counter && counter > 0 && <Counter
                        active={actionArea}
                        isLiked={active}
                    >
                        {counter}
                    </Counter> }
            </WrapperButton>
        </ThemeProvider>
    )
}
