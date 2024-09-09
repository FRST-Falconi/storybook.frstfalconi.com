import { useMemo } from "react";

export const useProgressGoalBar = () => {
    // dados mockados que supostamente virao do backend
    const inicio: number = 20
    const meta: number = 60
    const atual: number = 120
    const isGoalReached = atual === meta
    // Cálculo do progresso
    const progressPercentage = Math.min(((atual - inicio) / (meta - inicio)) * 100, 100); // Garantindo que não passe de 100%

    // Definindo a mensagem de progresso
    const progressMessage = useMemo(() => {
        if (atual > meta) {
            // Superou a meta, independentemente de ser para aumentar ou diminuir
            return (
                <div>
                    Este resultado <strong>superou a meta</strong> definida! 🎉
                </div>
            );
        } else if (isGoalReached) {
            // Atingiu a meta, independentemente de ser para aumentar ou diminuir
            return 'Este resultado atingiu a meta definida! 🎉';
        } else if (atual < inicio) {
            // Caso o valor esteja abaixo do início, significa que regrediu
            return (
                <div>
                    Este resultado <strong>não atingiu</strong> a meta definida e <strong>regrediu</strong> em relação ao valor inicial.
                </div>
            );
        } else if (atual === inicio) {
            // Não houve progresso em relação ao valor inicial
            return (
                <div>
                    Este desafio <strong>não obteve resultados</strong> e <strong>não atingiu</strong> a meta definida.
                </div>
            );
        } else {
            // Evoluiu, mas ainda não atingiu a meta
            return (
                <div>
                    Este <strong>resultado evoluiu</strong>, mas <strong>não atingiu</strong> a meta definida.
                </div>
            );
        }
    }, [atual, inicio, meta, isGoalReached]);



    function calculatePercentageRelativeToRange(start: number, middle: number, end: number): number {
        if (start === end) {
            throw new Error('The start and end values must be different.');
        }
        if (middle < start || middle > end) {
            throw new Error('The middle value must be within the range defined by start and end.');
        }

        return ((middle - start) / (end - start)) * 100;
    }

    const startIndicatorPosition = useMemo(() => {
        if (atual < inicio) return calculatePercentageRelativeToRange(atual, inicio, meta)
        return 0
    }, [inicio, atual])

    const currentIndicatorPosition = useMemo(() => {
        if (atual < inicio) return 0
        if (atual > meta) return 100
        return calculatePercentageRelativeToRange(inicio, atual, meta)
    }, [inicio, atual])

    const endIndicatorPosition = useMemo(() => {
        if (atual > meta) return calculatePercentageRelativeToRange(inicio,  meta, atual)
        return 100
    }, [inicio, atual])

    return {
        calculatePercentageRelativeToRange, progressMessage, progressPercentage, atual, meta,
        isGoalReached, startIndicatorPosition, currentIndicatorPosition, endIndicatorPosition
    }
}