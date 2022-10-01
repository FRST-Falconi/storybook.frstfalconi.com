import React,{ useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import { TitleComponent, HeaderWrapper, ClearComponent, TextClear }  from './learningStepsStyles'
import { ILearningSteps } from './learningSteps'

import { TrashIcon } from '@shared/icons'

import StepCard from '@components/step-card'
import ScrollContainer from '@components/scroll-container'

export default function LearningSteps({ title, onSelected, objectCards, widthCard,
    marginLeftTitle, marginRightClear, marginsArrowButton, sizeArrowButton, horizontalMarginInternScroll,
    textClearFilter, textViewMore }: ILearningSteps) {
    const [ itemSelected, setItemSelected ] = useState(-1);

    const onItemSelect = (n: number) => {
        setItemSelected(n)
        onSelected(n)
    }

    function renderCard(item) {
        return (
            <StepCard
                key={item.id}
                title={item.title}
                onClick={() => onItemSelect(item.id)}
                numberPeople={item.numberPeople}
                className={null}
                textButtonMore={textViewMore ? textViewMore : 'Ver mais'}
                active={itemSelected == item.id}
                src={item.photos}
                width={widthCard}
            />
        )
    }



    return (
        <ThemeProvider theme={FRSTTheme}>
            <HeaderWrapper 
            marginLeft={marginLeftTitle ? marginLeftTitle : '0px'}
            marginRight={marginRightClear ? marginRightClear : '0px'}
            >
                <TitleComponent>
                    {title}
                </TitleComponent>
                <ClearComponent  onClick={() => onItemSelect(-1)}>
                     <TrashIcon/>
                     <TextClear>{textClearFilter? textClearFilter : 'Excluir Filtro'}</TextClear>
                </ClearComponent>
            </HeaderWrapper>
            <ScrollContainer 
                stepMove={380} 
                isVisibleControlsButtons 
                sizeArrowButton={sizeArrowButton} 
                marginsArrowButton={marginsArrowButton}
                horizontalMarginInternScroll={horizontalMarginInternScroll}
            >
                {objectCards.map(renderCard)}
            </ScrollContainer>
        </ThemeProvider>
    )
}