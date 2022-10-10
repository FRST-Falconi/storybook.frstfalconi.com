import React,{ useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import {ICardTrailCarolsel} from './cardsTrailsCarousel'

import ScrollContainer from '@components/scroll-container'
import CardTrail from '@components/card-trail'

export default function ConquistaCarrossel({ objectCards, marginsArrowButton, 
    sizeArrowButton, horizontalMarginInternScroll, positionArrowButton, marginTopArrrowButton }: ICardTrailCarolsel ) {
    
    function renderCard(item, index) {

        return <CardTrail
                variant={item.variant}
                name={item.name}
                progress={item.progress}
                start={item.start}
                description={item.description}
                mentor={item.mentor}
                action={item.action}
                notStarted={item.notStarted}
                bannerImage={item.bannerImage}
                labels={item.labels}
            />
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <ScrollContainer 
                stepMove={380} 
                isVisibleControlsButtons 
                sizeArrowButton={sizeArrowButton} 
                marginsArrowButton={marginsArrowButton}
                horizontalMarginInternScroll={horizontalMarginInternScroll}
                positionArrowButton={positionArrowButton ? positionArrowButton : ''}
                marginTopArrrowButton={marginTopArrrowButton ? marginTopArrrowButton :'20px'}
            >
                <div>
                    { objectCards.map(renderCard) }
                </div>
            </ScrollContainer>
        </ThemeProvider>
    )
}