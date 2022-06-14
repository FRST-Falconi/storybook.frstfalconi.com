import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './scrollContainerStyles'


import { ArrowScrollLeft, ArrowScrollRight } from '@shared/icons'
import { IScrollContainer } from './scrollContainer'
import { randID } from './scrollContainer.utils'

import { WrapperHorizontal, WrapperContent, ButtonControll, Card } from './scrollContainerStyles'

export default function ScrollContainer({ children, type, isVisibleControlsButtons, stepMove,  className, styles }: IScrollContainer) {
    const [ actionAreaButtonLeft, setActionAreaButtonLeft] = useState(false)
    const [ actionAreaButtonRight, setActionAreaButtonRight] = useState(false)
    
    const [ iDScroll , setIDScroll ] =  useState(`iDScroll-${randID()}`);

    const scrollToLeft = () => {
        var objDiv = document.getElementById(iDScroll);
        objDiv.scrollLeft = objDiv.scrollLeft - stepMove;    
        console.log( objDiv.clientWidth)    
    }

    const scrollToRight = () => {
        var objDiv = document.getElementById(iDScroll);
        objDiv.scrollLeft = objDiv.scrollLeft + stepMove;
        console.log( objDiv.clientWidth)    
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            {type == 'vertical' ? (null) :
                <div style={{...styles}} className={className} >
                    <WrapperHorizontal>
                        { isVisibleControlsButtons &&
                        <ButtonControll 
                            isLeftButton={true} 
                            onClick={ scrollToLeft }
                            onMouseOver={() => setActionAreaButtonLeft(true)}
                            onMouseOut={() => setActionAreaButtonLeft(false)}
                        >
                            <ArrowScrollLeft fill={actionAreaButtonLeft ? '#fff' : '#000'}/>
                        </ButtonControll>}
                        <WrapperContent id={iDScroll}>
                            { children }
                        </WrapperContent>
                        { isVisibleControlsButtons &&
                        <ButtonControll 
                            isLeftButton={false} 
                            onClick={ scrollToRight }
                            onMouseOver={() => setActionAreaButtonRight(true)}
                            onMouseOut={() => setActionAreaButtonRight(false)}
                        >   
                            <ArrowScrollRight fill={actionAreaButtonRight ? '#fff' : '#000'}/>
                        </ButtonControll>}

                    </WrapperHorizontal>
                </div>
            }
        </ThemeProvider>
    )
}