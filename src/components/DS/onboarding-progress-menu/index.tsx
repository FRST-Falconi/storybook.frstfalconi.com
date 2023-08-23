import React, { useEffect, useRef, useState } from 'react'
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
import { useEventListener } from 'usehooks-ts'


export default function OnboardingProgressMenu(props: IOnboardingProgressMenu) {
    const { items, level, textChallenge, avatar, countChallenge, style } = props
    const [internalItems, setInternalItems] = useState(items)
    const [isScrollInTop, setIsScrollInTop] = useState(true);
    const [isScrollInBottom, setIsScrollInBottom] = useState(false);

    useEffect(() => {
        const sortedData = [...items].sort((a, b) => {
            if (a.finished && !b.finished) {
                return -1;
            }
            if (!a.finished && b.finished) {
                return 1;
            }
            return 0;
        });
        setInternalItems(sortedData)
    }, [items])

    const scrollRef = useRef(null)


    const handleScroll = (event) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const isScrolledToBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;

            const isScrolledToTop = container.scrollTop === 0;

            setIsScrollInBottom(isScrolledToBottom)
            setIsScrollInTop(isScrolledToTop)

        }
    }

    useEventListener('scroll', handleScroll, scrollRef)


    return (
        <ThemeProvider theme={FRSTTheme}>
            <CardContainer style={{ ...style }}>
                {
                    <ImageTextGroup>
                        <img src={avatar} width={55} height={55} />
                        <div>
                            <TextLevel>{level}</TextLevel>
                            <Challenge>
                                {countChallenge} {textChallenge}
                            </Challenge>
                        </div>
                    </ImageTextGroup>
                }

                {internalItems.length >= 7 && !isScrollInTop && (
                    <div
                        style={{
                            background: 'linear-gradient(#ffffff, #ffffff19)',
                            height: '50px',
                            position: 'absolute',
                            top: 100,
                            right: 36,
                            width: 'calc(100% - 46px)',
                            zIndex: 10
                        }}
                    ></div>
                )}
                <ScroollableContent ref={scrollRef}>
                    {internalItems.map((i, index) => (
                        <StepBox>
                            <StepBoxIconBlock>
                                <CheckCircle isComplete={i.finished} isChecked={i.finished}>
                                    {i.finished ? <Tick width="12" /> : <Dot width="16" height="16" />}
                                </CheckCircle>
                                {items.length - 1 > index && <StepBar isComplete={i.finished} />}
                            </StepBoxIconBlock>
                            <StepBoxTextBlock>
                                <StepBoxTitle onClick={i.handleClick} isComplete={i.finished}>
                                    {i.title}
                                </StepBoxTitle>
                                <StepBoxDescription>{i.description}</StepBoxDescription>
                            </StepBoxTextBlock>
                        </StepBox>
                    ))}
                </ScroollableContent>
                {internalItems.length >= 7 && !isScrollInBottom && (
                    <div
                        style={{
                            background: 'linear-gradient(#ffffff19, #ffffff)',
                            height: '50px',
                            position: 'absolute',
                            bottom: 38,
                            right: 36,
                            width: 'calc(100% - 46px)',
                        }}
                    ></div>
                )}
            </CardContainer>
        </ThemeProvider>
    )
}
