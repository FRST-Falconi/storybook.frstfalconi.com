import { ExclamationIcon, GoalIcon, LocalizationIcon } from '@shared/icons'
import * as Styles from './progressGoalBarStyles'

export const ProgressGoalBar = () => {
    // dados mockados que supostamente virao do backend
    const inicio: number = 0
    const meta: number = 100
    const atual: number = 100

    const isGoalReached = atual === meta

    // Cálculo do progresso
    // const progressPercentage = Math.round(((atual - inicio) / (meta - inicio)) * 100)

    // Definindo a mensagem de progresso
    const progressMessage = isGoalReached ? (
        'Este resultado atingiu a meta definida! 🎉'
    ) : (
        <div>
            Este <strong>resultado evoluiu</strong> e <strong>não atingiu</strong> a meta definida
        </div>
    )

    return (
        <Styles.WrapperProgressGoalBar>
            {/* Texto acima da barra */}
            <Styles.TextUP>{progressMessage}</Styles.TextUP>

            {/* Barra de progresso */}
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={inicio}>
                    <LocalizationIcon />
                </Styles.StartIndicator>
                {/* posicao relativa */}
                {atual !== meta && (
                    <Styles.CurrentIndicator position={atual}>
                        <ExclamationIcon />
                    </Styles.CurrentIndicator>
                )}
                {/* altura 100% largura percentual*/}
                <Styles.EndIndicator position={meta} isGoalReached={isGoalReached}>
                    <GoalIcon />
                </Styles.EndIndicator>
                {/*  posicao relativa */}
                <Styles.ProgressBarColor width={atual}></Styles.ProgressBarColor>
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
