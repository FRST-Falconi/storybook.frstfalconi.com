import React from 'react';
interface StepParams {
    /**
     * @prop {number} step: Step (Marte, Júpter, Saturno, Urano, Netuno)
     */
    step: number;
    /**
     * @prop {string} status: Status Planeta (B- Bloqueado, I- Inativo e A- Ativo)
     */
    status: string;
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
    /**
     * @prop {() => void} onClick: Função que será executada quando houver o click do botão
     */
    onClick?: () => void;
}
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
export default function Steps(props: StepParams): JSX.Element;
export {};
//# sourceMappingURL=Steps.d.ts.map