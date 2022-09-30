import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './scrollContainerStyles'

import { ArrowScrollLeft, ArrowScrollRight } from '@shared/icons'
import { IScrollContainer } from './scrollContainer'
import { randID } from './scrollContainer.utils'

import { WrapperHorizontal, WrapperContent, ButtonControll, CardTest } from './scrollContainerStyles'

export default function ScrollContainer({ children, type, isVisibleControlsButtons, positionArrowButton, marginTopArrrowButton,
    stepMove, className, styles, sizeArrowButton, marginsArrowButton, horizontalMarginInternScroll }: IScrollContainer) {    
    const [ actionAreaButtonLeft, setActionAreaButtonLeft] = useState(false)
    const [ actionAreaButtonRight, setActionAreaButtonRight] = useState(false)
    
    const [ iDScroll , setIDScroll ] =  useState(`iDScroll-${randID()}`);
    
    const [ isVisibleArrowButtonLeft, setIsVisibleArrowButtonLeft ] = useState(false);
    const [ isVisibleArrowButtonRight, setIsVisibleArrowButtonRight ] = useState(false); 

    const [isPressedLeftButton, setIsPressedLeftButton] = useState(false); 
    const [isPressedRightButton, setIsPressedRightButton] = useState(false); 
    
    useEffect((() => {
        if(!actionAreaButtonLeft) 
            setIsPressedLeftButton(false)
        if(!actionAreaButtonRight) 
            setIsPressedRightButton(false)
    }), [actionAreaButtonLeft, actionAreaButtonRight])

    const scrollToLeft = () => {
        var objDiv = document.getElementById(iDScroll);
        (objDiv.scrollLeft - stepMove <= 0) ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true);
        setIsVisibleArrowButtonRight(true)
        objDiv.scrollLeft = objDiv.scrollLeft - stepMove;
    }

    const scrollToRight = () => {
        var objDiv = document.getElementById(iDScroll);
        (objDiv.scrollLeft + stepMove <= 0) ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true);
        ((objDiv.offsetWidth + objDiv.scrollLeft + stepMove) >= objDiv.scrollWidth) ? setIsVisibleArrowButtonRight(false) : setIsVisibleArrowButtonRight(true);
        objDiv.scrollLeft = objDiv.scrollLeft + stepMove;
    }

    useEffect(()=>{
        var objDiv = document.getElementById(iDScroll);
        if(objDiv.clientWidth < objDiv.scrollWidth) 
            setIsVisibleArrowButtonRight(true)
        else
            setIsVisibleArrowButtonRight(false)
    },[]);

    const getCurrentSizeButtons = (isPressed) => {
        if(sizeArrowButton)
            return isPressed ? sizeArrowButton * 0.85 : sizeArrowButton
        else 
            return 80
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            {type == 'vertical' ? (null) :
                <div style={{...styles}} className={className} >
                    <WrapperHorizontal>
                        { isVisibleControlsButtons && positionArrowButton != 'bottom' &&
                        <ButtonControll 
                            onMouseDown={() => setIsPressedLeftButton(true)}
                            onMouseUp={() => setIsPressedLeftButton(false)}

                            isLeftButton={true} 
                            onClick={ scrollToLeft }
                            onMouseOver={() => setActionAreaButtonLeft(true)}
                            onMouseOut={() => setActionAreaButtonLeft(false)}
                            sizeButton={getCurrentSizeButtons(isPressedLeftButton)}
                            visibility={isVisibleArrowButtonLeft ? 'visible': 'hidden'}
                            marginsArrowButton = {
                                marginsArrowButton ? 
                                ((marginsArrowButton + 50)*-1) + 'px'
                                    :
                                '-138px'
                            }
                        >
                            <ArrowScrollLeft 
                                fill={actionAreaButtonLeft ? '#fff' : '#000'}                            
                                height={sizeArrowButton ? ((sizeArrowButton/2.3).toFixed(0)).toString() : '34'}
                                width={sizeArrowButton ? ((sizeArrowButton/4.3).toFixed(0)).toString() : '18'}/>
                        </ButtonControll>}
                        <WrapperContent id={iDScroll} paddingIntern={horizontalMarginInternScroll ? horizontalMarginInternScroll : '150px'} >
                            { children }
                        </WrapperContent>
                        { isVisibleControlsButtons && positionArrowButton != 'bottom' &&
                        <ButtonControll 
                            onMouseDown={() => setIsPressedRightButton(true)}
                            onMouseUp={() => setIsPressedRightButton(false)}

                            isLeftButton={false} 
                            onClick={ scrollToRight }
                            onMouseOver={() => setActionAreaButtonRight(true)}
                            onMouseOut={() => setActionAreaButtonRight(false)}
                            sizeButton={getCurrentSizeButtons(isPressedRightButton)}
                            visibility={isVisibleArrowButtonRight ? 'visible': 'hidden'}
                            marginsArrowButton = {
                                marginsArrowButton ? 
                                ((marginsArrowButton + 50)*-1) + 'px'
                                    :
                                '-138px'
                            }
                        >
                            <ArrowScrollRight 
                                fill={actionAreaButtonRight ? '#fff' : '#000'} 
                                height={sizeArrowButton ? ((sizeArrowButton/2.3).toFixed(0)).toString() : '34'}
                                width={sizeArrowButton ? ((sizeArrowButton/4.3).toFixed(0)).toString() : '18'}/>
                        </ButtonControll>}
                    </WrapperHorizontal>
                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>                        
                            {isVisibleControlsButtons && positionArrowButton == 'bottom' &&
                            <div style={{display: 'flex', flexDirection: 'row', marginTop: marginTopArrrowButton ? marginTopArrrowButton : '5px'}}>
                                <ButtonControll 
                                    onMouseDown={() => setIsPressedLeftButton(true)}
                                    onMouseUp={() => setIsPressedLeftButton(false)}

                                    isLeftButton={true} 
                                    onClick={ scrollToLeft }
                                    onMouseOver={() => setActionAreaButtonLeft(true)}
                                    onMouseOut={() => setActionAreaButtonLeft(false)}
                                    sizeButton={getCurrentSizeButtons(isPressedLeftButton)}
                                    visibility={isVisibleArrowButtonLeft ? 'visible': 'hidden'}
                                    marginsArrowButton = { marginsArrowButton ? marginsArrowButton + 'px': '10px'}
                                >
                                    <ArrowScrollLeft 
                                        fill={actionAreaButtonLeft ? '#fff' : '#000'}                            
                                        height={sizeArrowButton ? ((sizeArrowButton/2.3).toFixed(0)).toString() : '34'}
                                        width={sizeArrowButton ? ((sizeArrowButton/4.3).toFixed(0)).toString() : '18'}/>
                                </ButtonControll>
                                <ButtonControll                                     
                                    onMouseDown={() => setIsPressedRightButton(true)}
                                    onMouseUp={() => setIsPressedRightButton(false)}
                                    
                                    isLeftButton={false} 
                                    onClick={ scrollToRight }
                                    onMouseOver={() => setActionAreaButtonRight(true)}
                                    onMouseOut={() => setActionAreaButtonRight(false)}
                                    sizeButton={getCurrentSizeButtons(isPressedRightButton)}
                                    visibility={isVisibleArrowButtonRight ? 'visible': 'hidden'}
                                    marginsArrowButton = { marginsArrowButton ? marginsArrowButton + 'px': '10px'}
                                >
                                    <ArrowScrollRight 
                                        fill={actionAreaButtonRight ? '#fff' : '#000'} 
                                        height={sizeArrowButton ? ((sizeArrowButton/2.3).toFixed(0)).toString() : '34'}
                                        width={sizeArrowButton ? ((sizeArrowButton/4.3).toFixed(0)).toString() : '18'}/>
                                </ButtonControll>
                            </div>
                            }
                        </div>
                </div>
            }
        </ThemeProvider>
    )
}