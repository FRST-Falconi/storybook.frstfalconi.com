import React from 'react'

export const MESSAGES = {
    reachedGoal: <span>Este resultado atingiu a meta definida! 🎉</span>,
    progressExceeded: (
        <span>
            Este resultado <strong>superou a meta</strong> definida! 🎉
        </span>
    ),
    progressImproved: (
        <span>
            Este <strong>resultado evoluiu</strong>, mas <strong>não atingiu</strong> a meta definida.
        </span>
    ),
    progressNoResults: (
        <span>
            Este desafio <strong>não obteve resultados</strong> e <strong>não atingiu</strong> a meta definida.
        </span>
    ),
    progressNoGoal: (
        <span>
            Este resultado <strong>não atingiu</strong> a meta definida e <strong>regrediu</strong> em relação ao valor
            inicial
        </span>
    ),
    currentTextResult: <span>RESULTADO</span> ,
    currentTextInitAndResult: <span>INÍCIO E RESULTADO</span> ,
    currentTextInit: <span>INÍCIO</span>, 
    stabilizeExceedingText: <span>INÍCIO E META</span>,
    textGoal: <span>META E RESULTADO</span>,
    TextoGoalDefault: <span>META</span>
}
