import React from 'react'

export const MESSAGES = {
    reachedGoal: <div>Este resultado atingiu a meta definida! 🎉</div>,
    progressExceeded: (
        <div>
            Este resultado <strong>superou a meta</strong> definida! 🎉
        </div>
    ),
    progressImproved: (
        <div>
            Este <strong>resultado evoluiu</strong>, mas <strong>não atingiu</strong> a meta definida.
        </div>
    ),
    progressNoResults: (
        <div>
            Este desafio <strong>não obteve resultados</strong> e <strong>não atingiu</strong> a meta definida.
        </div>
    ),
    progressNoGoal: (
        <div>
            Este resultado <strong>não atingiu</strong> a meta definida e <strong>regrediu</strong> em relação ao valor
            inicial
        </div>
    ),
    currentTextResult: <div>RESULTADO</div> ,
    currentTextInitAndResult: <div>INÍCIO E RESULTADO</div> ,
    currentTextInit: <div>INÍCIO</div>, 
    stabilizeExceedingText: <div>INÍCIO E META</div>,
    textGoal: <div>META E RESULTADO</div>,
    TextoGoalDefault: <div>META</div>
}
