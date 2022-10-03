import React from 'react';
interface MissionStepsParams {
    /**
     * @prop {number} step: Step (Marte, Júpter, Saturno, Urano, Netuno)
     */
    stepProblem: number;
    /**
     * @prop {number} stepActive:
     */
    stepActive: number;
    idioma?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es';
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
    /**
     * @prop {(step: number) => void} onSelected: Função irá retornar o step selecionado
     */
    onSelected: (step: number) => void;
}
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
export default function MissionSteps(props: MissionStepsParams): JSX.Element;
export {};
//# sourceMappingURL=StepMission.d.ts.map