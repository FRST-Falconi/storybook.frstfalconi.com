import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import { TitleComponent, HeaderWrapper, ClearComponent, TextClear }  from './learningStepsStyles'
import { ILearningSteps } from './learningSteps'

import { TrashIcon } from '@shared/icons'

import StepCard from '@components/step-card'
import ScrollContainer from '@components/scroll-container'
import { useState } from 'react'

export default function LearningSteps({ title, onSelected, objectCards }: ILearningSteps) {
    const [ itemSelected, setItemSelected ] = useState(-1);

    const onItemSelect = (n: number) => {
        setItemSelected(n)
        onSelected(n)
    }

    function renderCard(item) {
        return (
            <StepCard 
                title={item.title}
                onClick={() => onItemSelect(item.id)}
                numberPeople={item.numberPeople}
                className={null}
                textButtonMore={'Ver mais'}
                active={itemSelected == item.id}
                src={item.photos}
            />
        )
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <HeaderWrapper>
                <TitleComponent>
                    {title}
                </TitleComponent>
                <ClearComponent  onClick={() => onItemSelect(-1)}>
                     <TrashIcon/>
                     <TextClear>Excluir Filtro</TextClear>
                </ClearComponent>
            </HeaderWrapper>
            <ScrollContainer stepMove={380} isVisibleControlsButtons>
                {objectCards.map(renderCard)}
            </ScrollContainer>
        </ThemeProvider>
    )
}
