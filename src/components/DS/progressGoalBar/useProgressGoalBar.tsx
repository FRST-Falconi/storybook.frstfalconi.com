import { useMemo } from 'react'

function calculatePercentageRelativeToRange(start: number, middle: number, end: number): number {
    return ((middle - start) / (end - start)) * 100
}

export const useProgressGoalBar = ({ start, current, goal }) => {
    const startValue = start < goal ? start : goal
    const endValue = start > goal ? start : goal
    const currentValue = current

    const isGoalReached = currentValue === goal
    const isGoalExceeded = start < goal && currentValue > goal || start > goal && currentValue < goal
    const isNOGoalWarning = currentValue === startValue || currentValue < startValue

    // Cálculo do progresso
    const progressPercentage = useMemo(() => {
        let percentage: number

        if (start < goal) {
            percentage = ((currentValue - start) / (goal - start)) * 100
        } else {
            percentage = ((start - currentValue) / (start - goal)) * 100
        }

        return Math.min(Math.max(Math.abs(percentage), 0), 100)
    }, [currentValue, start, goal])

    // Definindo a mensagem de progresso
    const progressMessage = useMemo(() => {
        if (currentValue === goal) {
            // Atingiu a meta, independentemente de ser para aumentar ou diminuir
            return 'Este resultado atingiu a meta definida! 🎉'
        } else if (isGoalExceeded) {
            // Superou a endValue, independentemente de ser para aumentar ou diminuir
            return (
                <div>
                    Este resultado <strong>superou a meta</strong> definida! 🎉
                </div>
            )
        } else if (currentValue < startValue) {
            // Caso o valor esteja abaixo do início, significa que regrediu
            return (
                <div>
                    Este resultado <strong>não atingiu</strong> a meta definida e <strong>regrediu</strong> em relação
                    ao valor inicial.
                </div>
            )
        } else if (currentValue === startValue) {
            // Não houve progresso em relação ao valor inicial
            return (
                <div>
                    Este desafio <strong>não obteve resultados</strong> e <strong>não atingiu</strong> a meta definida.
                </div>
            )
        } else {
            // Evoluiu, mas ainda não atingiu a meta
            return (
                <div>
                    Este <strong>resultado evoluiu</strong>, mas <strong>não atingiu</strong> a meta definida.
                </div>
            )
        }
    }, [currentValue, startValue, endValue, goal])

    const startIndicatorPosition = useMemo(() => {
        if (goal > start && currentValue < startValue)
            return calculatePercentageRelativeToRange(currentValue, start, endValue)
        if (goal < start && currentValue > startValue)
            return calculatePercentageRelativeToRange(start, currentValue, goal)
        return 0
    }, [startValue, currentValue, endValue])

    const currentIndicatorPosition = useMemo(() => {
        if (goal > start && currentValue < startValue) return 0
        if (goal > start && currentValue > endValue) return 100
        if (goal < start && currentValue < startValue) return 100
        if (goal < start && currentValue > endValue) return 0
        return calculatePercentageRelativeToRange(start, currentValue, goal)
    }, [startValue, currentValue, endValue])

    const endIndicatorPosition = useMemo(() => {
        if (goal > start && currentValue > endValue)
            return calculatePercentageRelativeToRange(startValue, endValue, currentValue)
        if (goal < start && currentValue < endValue)
            return calculatePercentageRelativeToRange(start, goal, currentValue)
        return 100
    }, [endValue, currentValue])

    return {
        calculatePercentageRelativeToRange,
        progressMessage,
        progressPercentage,
        currentValue,
        endValue,
        isGoalReached,
        startIndicatorPosition,
        currentIndicatorPosition,
        endIndicatorPosition,
        isGoalExceeded,
        isNOGoalWarning
    }
}
