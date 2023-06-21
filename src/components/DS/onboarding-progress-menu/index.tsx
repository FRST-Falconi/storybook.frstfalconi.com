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

export default function OnboardingProgressMenu() {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Progress>Seu progresso</Progress>
            <CardContainer>
                <ImageTextGroup>
                    <Avatar size="55px" src="https://picsum.photos/200/300"></Avatar>
                    <div>
                        <TextLevel>Iniciante</TextLevel>
                        <Challenge>0 desafios</Challenge>
                    </div>
                </ImageTextGroup>
                <Line />
                <StepBox>
                    <StepBoxIconBlock>
                        <CheckCircle></CheckCircle>
                        <StepBar />
                    </StepBoxIconBlock>
                    <StepBoxTextBlock>
                        <StepBoxTitle>Boas-Vindas</StepBoxTitle>
                        <StepBoxDescription>Entenda a sua jornada contínua de aceleração de performance.</StepBoxDescription>
                    </StepBoxTextBlock>
                </StepBox>
            </CardContainer>
        </ThemeProvider>
    )
}
