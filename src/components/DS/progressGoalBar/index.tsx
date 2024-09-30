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
    const {
        isGoalExceeded,
        isGoalReached,
        positions,
        noGoal,
        noResult,
        resultEvolved,
        stabilizeExceeding,
        stabilize,
        isGoalDecreased,
        isGoalIncrease
    } = useProgressGoalBar({
        start,
        current,
        goal
    })

    const getDisplayText = () => {
        if (noResult) {
            return positions?.currenText
        } else if (stabilizeExceeding) {
            return positions?.stabilizeExceedingText
        } else {
            return positions?.currentTextInit
        }
    }

    return (
        <Styles.WrapperProgressGoalBar>
            {/* Texto acima da barra */}
            {isVisibleMessage && <Styles.TextUP>{positions?.message}</Styles.TextUP>}

            {/* Barra de progresso */}
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={positions?.start}>
                    <LocalizationIcon />
                </Styles.StartIndicator>
                <Styles.IndicatorTextInit
                    noResult={noResult}
                    position={positions?.start}
                    isGoalReached={isGoalReached}
                    isGoalExceeded={isGoalExceeded}
                    resultEvolved={resultEvolved}
                    start={positions?.start}
                    stabilize={stabilize}
                >
                    <>
                        <Styles.Number>{start}</Styles.Number>
                        <Styles.TypeProgressText>{getDisplayText()}</Styles.TypeProgressText>
                    </>
                </Styles.IndicatorTextInit>

                {!isGoalReached && (
                    <>
                        <Styles.CurrentIndicator status={positions?.currentVariant} position={positions?.current}>
                            {isGoalExceeded ? <StarIcon color="white" width={14} height={13} /> : <ExclamationIcon />}
                        </Styles.CurrentIndicator>
                        <Styles.IndicatorTextCurrent position={positions?.current} noGoal={noGoal} noResult={noResult}>
                            {!noResult && (
                                <>
                                    <Styles.Number>{current}</Styles.Number>
                                    <Styles.TypeProgressText>{positions?.currenText}</Styles.TypeProgressText>
                                </>
                            )}
                        </Styles.IndicatorTextCurrent>
                    </>
                )}

                <Styles.EndIndicator
                    position={positions?.goal}
                    isGoalExceeded={isGoalExceeded}
                    isGoalReached={isGoalReached}
                >
                    <GoalIcon />
                </Styles.EndIndicator>

                <Styles.IndicatorText position={positions?.goal} stabilize={stabilize}>
                    <Styles.Number>{!stabilizeExceeding && goal}</Styles.Number>
                    <Styles.TypeProgressText>
                        {stabilizeExceeding || stabilize ? positions?.textGoal : positions?.TextoGoalDefault}
                    </Styles.TypeProgressText>
                </Styles.IndicatorText>

                {/*  posicao relativa */}
                <Styles.ProgressBarColor
                    isGoalExceeded={isGoalExceeded}
                    width={positions?.[positions?.barRef]}
                    hasRegressed={noGoal}
                    isGoalDecreased={isGoalDecreased}
                    isGoalIncrese={isGoalIncrease}
                    stabileze={stabilize}
                ></Styles.ProgressBarColor>
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
