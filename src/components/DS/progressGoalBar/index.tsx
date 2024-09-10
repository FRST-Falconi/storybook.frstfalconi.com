import { ExclamationIcon, GoalIcon, LocalizationIcon, StarIcon } from '@shared/icons'
import * as Styles from './progressGoalBarStyles'
import { useProgressGoalBar } from './useProgressGoalBar'

interface ProgressGoalBarProps {
    start: number;  //valor inicial
    current: number; // valor alcancado
    goal: number; // meta a ser alcancada
}


export const ProgressGoalBar = ({ start, current, goal }:ProgressGoalBarProps) => {
    const {
        progressMessage,
        progressPercentage,
        isGoalReached,
        currentIndicatorPosition,
        startIndicatorPosition,
        endIndicatorPosition,
        isGoalExceeded,
        isNOGoalWarning
    } = useProgressGoalBar({ start, current, goal })

    return (
        <Styles.WrapperProgressGoalBar>
            {/* Texto acima da barra */}
            <Styles.TextUP>{progressMessage}</Styles.TextUP>

            {/* Barra de progresso */}
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={startIndicatorPosition}>
                    <LocalizationIcon />
                </Styles.StartIndicator>
                <Styles.IndicatorText position={startIndicatorPosition}>Início</Styles.IndicatorText>


                {/* posicao relativa */}
                {!isGoalReached && (
                    <>
                    <Styles.CurrentIndicator status={isGoalExceeded ? 'exceeded' : (isNOGoalWarning ? 'warning' : 'normal')} position={currentIndicatorPosition}>
                        {isGoalExceeded ? <StarIcon/> :  <ExclamationIcon />}
                    </Styles.CurrentIndicator>
                    <Styles.IndicatorText position={currentIndicatorPosition}>Atual</Styles.IndicatorText>
                    </>
                )}

                {/* altura 100% largura percentual*/}
                <Styles.EndIndicator position={endIndicatorPosition} isGoalExceeded={isGoalExceeded} isGoalReached={isGoalReached}>
                    <GoalIcon />
                </Styles.EndIndicator>
                <Styles.IndicatorText position={endIndicatorPosition}>Meta</Styles.IndicatorText>


                {/*  posicao relativa */}
                <Styles.ProgressBarColor width={progressPercentage}></Styles.ProgressBarColor>
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
