import * as Styles from './progressGoalBarStyles'

export const ProgressGoalBar = () => {
    // dados mockados que supostamente virao do backend
    const inicio = 0
    const meta = 100
    const atual = 50

    // Cálculo da largura da barra de progresso
    // const progressPercentage = ((atual - inicio) / (meta - inicio)) * 100

    return (
        <Styles.WrapperProgressGoalBar>
            <Styles.ProgressGoalBarContainer>
                <Styles.StartIndicator position={inicio}>{inicio}</Styles.StartIndicator> {/* posicao relativa */}
                <Styles.CurrentIndicator position={atual}/>
                {/* altura 100% largura percentual*/}
                <Styles.EndIndicator position={meta}>{meta}</Styles.EndIndicator> {/*  posicao relativa */}
                
                
                <Styles.ProgressBarColor width={atual}></Styles.ProgressBarColor>{' '}
            </Styles.ProgressGoalBarContainer>
        </Styles.WrapperProgressGoalBar>
    )
}
