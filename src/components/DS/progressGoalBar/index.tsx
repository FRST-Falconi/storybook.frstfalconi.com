import { ExclamationIcon, GoalIcon, LocalizationIcon, StarIcon } from '@shared/icons'
import * as Styles from './progressGoalBarStyles'
import { useProgressGoalBar } from './useProgressGoalBar'

interface ProgressGoalBarProps {
    start: number //valor inicial
    current: number // valor alcancado
    goal: number // meta a ser alcancada
    isVisibleMessage?: boolean
}

export const ProgressGoalBar = ({ start, current, goal, isVisibleMessage = true }: ProgressGoalBarProps) => {
    const { isGoalExceeded, isGoalReached, positions, noGoal, noResult, resultEvolved } = useProgressGoalBar({
        start,
        current,
        goal
    })

    return (
        <Styles.WrapperProgressGoalBar>
            {/* Texto acima da barra */}
            { isVisibleMessage && <Styles.TextUP>{positions.message}</Styles.TextUP>}

            {/* Barra de progresso */}
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={positions.start}>
                    <LocalizationIcon />
                </Styles.StartIndicator>
                <Styles.IndicatorText
                    noResult={noResult}
                    position={positions.start}
                    isGoalReached={isGoalReached}
                    isGoalExceeded={isGoalExceeded}
                    resultEvolved={resultEvolved}
                    start={positions.start}
                >
                    <>
                        <Styles.Number>{start}</Styles.Number>
                        <Styles.TypeProgressText>{noResult ? positions.currenText : positions.currentTextInit}</Styles.TypeProgressText>
                    </>
                </Styles.IndicatorText>

                {!isGoalReached && (
                    <>
                        <Styles.CurrentIndicator status={positions.currentVariant} position={positions.current}>
                            {isGoalExceeded ? <StarIcon color='white' width={14} height={13}/> : <ExclamationIcon />}
                        </Styles.CurrentIndicator>
                        <Styles.IndicatorTextCurrent position={positions.current} noGoal={noGoal} noResult={noResult}>
                            {!noResult && (
                                <>
                                    <Styles.Number>{current}</Styles.Number>
                                    <Styles.TypeProgressText>{positions.currenText}</Styles.TypeProgressText>
                                </>
                            )}
                        </Styles.IndicatorTextCurrent>
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
                    <Styles.Number>{goal}</Styles.Number>
                    <Styles.TypeProgressText>META</Styles.TypeProgressText>
                </Styles.IndicatorText>

                {/*  posicao relativa */}
                <Styles.ProgressBarColor
                    isGoalExceeded={isGoalExceeded}
                    width={positions[positions.barRef]}
                    hasRegressed={noGoal}
                ></Styles.ProgressBarColor>
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
