import React from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import {
    CardContainer,
    ImageTextGroup,
    StepBox,
    StepBoxTextBlock,
    StepBoxIconBlock,
    StepBar,
    StepBoxTitle,
    StepBoxDescription,
    TextLevel,
    Challenge,
    CheckCircle,
    ScroollableContent
} from './onboardingProgressMenuStyles'
import { Dot, Tick } from '@shared/icons'
import { IOnboardingProgressMenu } from './onboardingProgressMenu'

export default function OnboardingProgressMenu(props: IOnboardingProgressMenu) {
    const { items, level, textChallenge, image, countChallenge, style } = props

    return (
        <ThemeProvider theme={FRSTTheme}>
            <CardContainer style={{ ...style }}>
                {
                    <ImageTextGroup>
                        <img src={image} width={55} height={55} />
                        <div>
                            <TextLevel>{level}</TextLevel>
                            <Challenge>{countChallenge} {textChallenge}</Challenge>
                        </div>
                    </ImageTextGroup>
                }
                <ScroollableContent>
                    {items.map((i, index) => (

                        <StepBox>
                            <StepBoxIconBlock>
                                <CheckCircle isComplete={i.finished} isChecked={i.finished}>
                                    {i.finished ? <Tick width='12' /> :
                                        <Dot width='16' height='16' />}
                                </CheckCircle>
                                {
                                    items.length - 1 > index &&
                                    <StepBar isComplete={i.finished} />
                                }
                            </StepBoxIconBlock>
                            <StepBoxTextBlock>
                                <StepBoxTitle onClick={i.handleClick} isComplete={i.finished}>{i.title}</StepBoxTitle>
                                <StepBoxDescription>{i.description}</StepBoxDescription>
                            </StepBoxTextBlock>
                        </StepBox>

                    ))}
                </ScroollableContent>
            </CardContainer>
        </ThemeProvider>
    )
}
