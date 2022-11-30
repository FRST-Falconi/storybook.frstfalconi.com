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
        if(objDiv && objDiv.clientWidth && objDiv.clientWidth < objDiv.scrollWidth) 
            setIsVisibleArrowButtonRight(true)
        else
            setIsVisibleArrowButtonRight(false)
    },[]);

    useEffect(() => {
        function updateSize() {
            var objDiv = document.getElementById(iDScroll);
            ((objDiv.offsetWidth + objDiv.scrollLeft ) >= objDiv.scrollWidth) ? setIsVisibleArrowButtonRight(false) : setIsVisibleArrowButtonRight(true);
            (objDiv.scrollLeft - stepMove <= 0) ? setIsVisibleArrowButtonLeft(false) : setIsVisibleArrowButtonLeft(true);

            var objDiv = document.getElementById(iDScroll);
            if(objDiv && objDiv.clientWidth && objDiv.clientWidth < objDiv.scrollWidth) 
                setIsVisibleArrowButtonRight(true)
            else
                setIsVisibleArrowButtonRight(false)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <ThemeProvider theme={FRSTTheme}>
                <div style={{...styles}} className={className} >
                    <WrapperHorizontal>
                        { isVisibleControlsButtons && positionArrowButton != 'bottom' &&
                            <ButtonArrow
                                isLeftButton={true}
                                onClick={scrollToLeft}
                                onActionArea={setActionAreaButtonLeft}
                                actionArea={actionAreaButtonLeft}
                                sizeButton={sizeArrowButton}
                                isVisible={isVisibleArrowButtonLeft}
                                margin={marginsArrowButton ? ((marginsArrowButton + 50)*-1) + 'px' : '-138px' }
                                ArrowScroll={ArrowScrollLeft}
                            />
                        }
                        <WrapperContent id={iDScroll} paddingIntern={horizontalMarginInternScroll ? horizontalMarginInternScroll : '150px'} >
                            { children }
                        </WrapperContent>
                        { isVisibleControlsButtons && positionArrowButton != 'bottom' &&
                            <ButtonArrow
                                isLeftButton={false}
                                onClick={scrollToRight}
                                onActionArea={setActionAreaButtonRight}
                                actionArea={actionAreaButtonRight}
                                sizeButton={sizeArrowButton}
                                isVisible={isVisibleArrowButtonRight}
                                margin={marginsArrowButton ? ((marginsArrowButton + 50)*-1) + 'px' : '-138px' }
                                ArrowScroll={ArrowScrollRight}
                            />
                        }
                    </WrapperHorizontal>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>                        
                        { isVisibleControlsButtons && positionArrowButton == 'bottom' &&
                            <div style={{display: 'flex', flexDirection: 'row', marginTop: marginTopArrrowButton ? marginTopArrrowButton : '5px'}}>
                                <ButtonArrow
                                    isLeftButton={true}
                                    onClick={scrollToLeft}
                                    onActionArea={setActionAreaButtonLeft}
                                    actionArea={actionAreaButtonLeft}
                                    sizeButton={sizeArrowButton}
                                    isVisible={isVisibleArrowButtonLeft}
                                    margin={ marginsArrowButton ? marginsArrowButton + 'px': '10px'}
                                    ArrowScroll={ArrowScrollLeft}
                                />
                                <ButtonArrow
                                    isLeftButton={false}
                                    onClick={scrollToRight}
                                    onActionArea={setActionAreaButtonRight}
                                    actionArea={actionAreaButtonRight}
                                    sizeButton={sizeArrowButton}
                                    isVisible={isVisibleArrowButtonRight}
                                    margin={ marginsArrowButton ? marginsArrowButton + 'px': '10px'}
                                    ArrowScroll={ArrowScrollRight}
                                />
                            </div>
                        }
                    </div>
                </div>
        </ThemeProvider>
    )
}

function ButtonArrow({isLeftButton, onClick, onActionArea, actionArea, sizeButton, isVisible, margin, ArrowScroll}) {
    return (
        <ButtonControll 
            isLeftButton={isLeftButton} 
            onClick={ onClick }
            onMouseOver={() => onActionArea(true)}
            onMouseOut={() => onActionArea(false)}
            sizeButton={sizeButton ? sizeButton : 80}
            visibility={isVisible ? 'visible': 'hidden'}
            marginsArrowButton = { margin }
        >
            <ArrowScroll
                fill={actionArea ? '#fff' : '#000'}                            
                height={sizeButton ? ((sizeButton/2.3).toFixed(0)).toString() : '34'}
                width={sizeButton ? ((sizeButton/4.3).toFixed(0)).toString() : '18'}
            />
        </ButtonControll>
    )
}
