import { ExclamationIcon, GoalIcon, LocalizationIcon, StarIcon } from '@shared/icons'
import * as Styles from './progressGoalBarStyles'
import {useProgressGoalBar } from './useProgressGoalBar'

interface ProgressGoalBarProps {
    start: number //valor inicial
    current: number // valor alcancado
    goal: number // meta a ser alcancada
}

export const ProgressGoalBar = ({ start, current, goal }: ProgressGoalBarProps) => {
    const { isGoalExceeded, isGoalReached, positions, noResult } = useProgressGoalBar({ start, current, goal })

    return (
        <Styles.WrapperProgressGoalBar>
            {/* Texto acima da barra */}
            <Styles.TextUP>{positions.message}</Styles.TextUP>

            {/* Barra de progresso */}
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={positions.start}>
                    <LocalizationIcon />
                </Styles.StartIndicator>
                <Styles.IndicatorText position={positions.start}>
                        <>
                            <p>{start}</p>
                            <p>INÍCIO</p>
                        </>
                </Styles.IndicatorText>

                {/* posicao relativa */}
                {!isGoalReached && (
                    <>
                        <Styles.CurrentIndicator status={positions.currentVariant} position={positions.current}>
                            {isGoalExceeded ? <StarIcon /> : <ExclamationIcon />}
                        </Styles.CurrentIndicator>
                        <Styles.IndicatorText position={positions.current}>
                            {
                                !noResult &&
                                <>
                                <p>{current}</p>
                                <p>{positions.currenText}</p>
                                </>
                            }
                        </Styles.IndicatorText>
                    </>
                )}

                <Styles.EndIndicator
                    position={positions.goal}
                    isGoalExceeded={isGoalExceeded}
                    isGoalReached={isGoalReached}
                >
                    <GoalIcon />
                </Styles.EndIndicator>
                <Styles.IndicatorText position={positions.goal}>
                    <p>{goal}</p>
                    <p>META</p>
                </Styles.IndicatorText>

                {/*  posicao relativa */}
                <Styles.ProgressBarColor
                    isGoalExceeded={isGoalExceeded}
                    width={positions[positions.barRef]}
                ></Styles.ProgressBarColor>
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
