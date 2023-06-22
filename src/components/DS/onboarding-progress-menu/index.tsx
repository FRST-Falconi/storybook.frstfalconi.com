import React from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import {
    CardContainer,
    ImageTextGroup,
    Line,
    Progress,
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
    const { items, heading, level, challenge } = props
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Progress>{heading}</Progress>
            <CardContainer>
                <ImageTextGroup>
                    <Avatar size="55px" src="https://picsum.photos/200/300"></Avatar>
                    <div>
                        <TextLevel>{level}</TextLevel>
                        <Challenge>{challenge}</Challenge>
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
