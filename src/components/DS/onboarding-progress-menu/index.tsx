import React from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import {
    CardContainer,
    ImageTextGroup,
    Line,
    StepBox,
    StepBoxTextBlock,
    StepBoxIconBlock,
    StepBar,
    StepBoxTitle,
    StepBoxDescription,
    TextLevel,
    Challenge,
    CheckCircle
} from './onboardingProgressMenuStyles'
import Avatar from '@components/avatar'
import { Dot, Tick } from '@shared/icons'
import { IOnboardingProgressMenu } from './onboardingProgressMenu'

export default function OnboardingProgressMenu(props: IOnboardingProgressMenu) {
    const { items, level, textChallenge, image, countChallenge } = props
    return (
        <ThemeProvider theme={FRSTTheme}>
            <CardContainer>
                <ImageTextGroup>
                    <img src={image} width={55} height={55}/>
                    <div>
                        <TextLevel>{level}</TextLevel>
                        <Challenge>{countChallenge} {textChallenge}</Challenge>
                    </div>
                </ImageTextGroup>
                <Line />
                {items.map((i, index) => (
                    <StepBox>
                        <StepBoxIconBlock>
                            <CheckCircle isComplete={i.finished || i.isCurrent} isChecked={i.finished}>
                                {i.finished ? <Tick width='12' /> :
                                    <Dot width='8' height='8'/>}
                            </CheckCircle>
                            {
                                items.length -1 > index &&
                                <StepBar isComplete={i.finished} />
                            }
                        </StepBoxIconBlock>
                        <StepBoxTextBlock>
                            <StepBoxTitle href={i.titleUrl} isComplete={i.finished || i.isCurrent}>{i.title}</StepBoxTitle>
                            <StepBoxDescription>{i.description}</StepBoxDescription>
                        </StepBoxTextBlock>
                    </StepBox>
                ))}
            </CardContainer>
        </ThemeProvider>
    )
}
