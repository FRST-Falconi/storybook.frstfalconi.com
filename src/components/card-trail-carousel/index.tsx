import React,{ useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import {ICardTrailCarolsel} from './cardsTrailsCarousel'

import ScrollContainer from '@components/scroll-container'
import CardTrail from '@components/card-trail'

export default function CardTrailCarousel({ objectCards, marginsArrowButton, move, isVisibleButtons,
    sizeArrowButton, horizontalMarginInternScroll, positionArrowButton, marginTopArrrowButton, label }: ICardTrailCarolsel ) {
    
    function renderCard(item, index) {

        return <CardTrail
                key={index}
                variant={item.variant}
                name={item.name}
                progress={item.progress}
                start={item.start}
                description={item.description}
                mentor={item.mentor}
                action={item.action}
                notStarted={item.notStarted}
                bannerImage={item.bannerImage}
                labels={label ? label : { mentor: 'Mentor(a)', dateStart: "Data de Início"}}
            />
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <ScrollContainer 
                stepMove={move ? move : 380} 
                isVisibleControlsButtons={isVisibleButtons} 
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