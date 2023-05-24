import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { WrapperButton, Counter } from './counterLikeStyles'
import { IConterLike } from './counterLike'
import { IconLikeLine, IconLikeFilled } from '@shared/icons'

export default function CounterLike({ onClick, total, styles }: IConterLike) {
    const [ actionArea, setActionArea] = useState(false)
    const [ counter, setCounter ] = useState(0)
    const [ isPressed, setIsPressed ] = useState(false)

    useEffect(() => {
        setCounter(total)
    }, [total])

    const handleClick = () => {
        setIsPressed(true);
        onClick();

        setTimeout(() => {
            setIsPressed(false);
        }, 1000)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <WrapperButton
                onClick={() => handleClick()}
                onMouseOver={() => setActionArea(true)}
                onMouseOut={() => setActionArea(false)}                
                style={{...styles}}
            >   
                <>
                    { isPressed ? 
                      <IconLikeFilled />
                    : <IconLikeLine  fill={actionArea ? '#F26818' : '#444444'} /> }
                </>
                    { counter >= 1 && <Counter
                        active={actionArea}
                        isLiked={isPressed}
                    >
                        {counter}
                    </Counter> }
            </WrapperButton>
        </ThemeProvider>
    )
}
