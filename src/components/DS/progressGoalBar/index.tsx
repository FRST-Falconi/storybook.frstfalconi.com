import { ExclamationIcon, GoalIcon, LocalizationIcon } from '@shared/icons'
import * as Styles from './progressGoalBarStyles'
import { useProgressGoalBar } from './useProgressGoalBar'

interface ProgressGoalBarProps {
    start: number //valor inicial
    current: number // valor alcancado
    goal: number // meta a ser alcancada
    isVisibleMessage?: boolean
}

function StarIcon() {
    return (
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.57085 0.717765C6.7649 0.393208 7.2351 0.393208 7.42915 0.717765L9.18631 3.65671C9.25631 3.77378 9.37108 3.85717 9.50405 3.88756L12.8421 4.65054C13.2108 4.7348 13.3561 5.18198 13.1074 5.46682L10.8553 8.04618C10.7656 8.14892 10.7217 8.28385 10.7339 8.41969L11.0398 11.8302C11.0736 12.2068 10.6932 12.4832 10.3454 12.3347L7.19637 10.9899C7.07094 10.9363 6.92906 10.9363 6.80363 10.9899L3.65458 12.3347C3.30682 12.4832 2.92643 12.2068 2.96021 11.8302L3.2661 8.41969C3.27828 8.28385 3.23444 8.14892 3.14473 8.04618L0.892626 5.46682C0.643919 5.18198 0.789216 4.7348 1.15785 4.65054L4.49595 3.88756C4.62892 3.85717 4.74369 3.77378 4.81369 3.65671L6.57085 0.717765Z" fill="white"/>
        </svg>
    )
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
        stabilizeDecreased,
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
                
                {!stabilizeDecreased && <Styles.IndicatorTextInit
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
                </Styles.IndicatorTextInit>}

                {!isGoalReached && (
                    <>
                        <Styles.CurrentIndicator status={positions?.currentVariant} position={positions?.current}>
                            {isGoalExceeded ? <StarIcon /> : <ExclamationIcon />}
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

                <Styles.IndicatorText position={positions?.goal} stabilize={stabilize || stabilizeDecreased}>
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
