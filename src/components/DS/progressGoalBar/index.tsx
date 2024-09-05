import { ExclamationIcon, GoalIcon, LocalizationIcon } from '@shared/icons'
import * as Styles from './progressGoalBarStyles'

export const ProgressGoalBar = () => {
    // dados mockados que supostamente virao do backend
    const inicio: number = 10;
    const meta: number = 100;
    const atual: number = 100;

    // Cálculo da largura da barra de progresso
    const progressPercentage = Math.round(((atual - inicio) / (meta - inicio)) * 100)

    return (
        <Styles.WrapperProgressGoalBar>
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={0}>
                        <LocalizationIcon/>
                </Styles.StartIndicator> {/* posicao relativa */}
                {atual !== meta && (
                    <Styles.CurrentIndicator position={atual}>
                        <ExclamationIcon />
                    </Styles.CurrentIndicator>
                )}
                {/* altura 100% largura percentual*/}
                <Styles.EndIndicator position={meta}>
                    <GoalIcon />
                </Styles.EndIndicator>
                {/*  posicao relativa */}
                <Styles.ProgressBarColor width={atual}></Styles.ProgressBarColor>{' '}
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
