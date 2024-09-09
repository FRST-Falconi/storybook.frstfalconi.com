import { ExclamationIcon, GoalIcon, LocalizationIcon } from '@shared/icons'
import * as Styles from './progressGoalBarStyles'
import { useProgressGoalBar } from './useProgressGoalBar'

export const ProgressGoalBar = () => {
    const {
        progressMessage,
        progressPercentage,
        isGoalReached,
        currentIndicatorPosition,
        startIndicatorPosition,
        endIndicatorPosition
    } = useProgressGoalBar()

    return (
        <Styles.WrapperProgressGoalBar>
            {/* Texto acima da barra */}
            <Styles.TextUP>{progressMessage}</Styles.TextUP>

            {/* Barra de progresso */}
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={startIndicatorPosition}>
                    <LocalizationIcon />
                </Styles.StartIndicator>

                {/* posicao relativa */}
                {!isGoalReached && (
                    <Styles.CurrentIndicator position={currentIndicatorPosition}>
                        <ExclamationIcon />
                    </Styles.CurrentIndicator>
                )}

                {/* altura 100% largura percentual*/}
                <Styles.EndIndicator position={endIndicatorPosition} isGoalReached={isGoalReached}>
                    <GoalIcon />
                </Styles.EndIndicator>

                {/*  posicao relativa */}
                <Styles.ProgressBarColor width={progressPercentage}></Styles.ProgressBarColor>
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
