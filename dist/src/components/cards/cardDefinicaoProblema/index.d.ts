/// <reference types="react" />
import '../../../shared/global.css';
interface CardDefinicaoProblemaProps {
    problemId: string;
    problemStatus: string;
    backgroundImage?: string;
    cardTitle?: string;
    cardDescription?: string;
    /**
    * @prop {number} typeButton: Tipos de botão (1 - novo problema, 2 - editar problema)
    */
    typeButton: number;
    handleClick: (problemId: string) => void;
    /**
     * @prop {event} event: Evento de click do visualizar problema
    */
    handleToView: () => void;
}
export interface CardDefinicaoProblemaTranslateProps extends CardDefinicaoProblemaProps {
    statusTextNaoIniciou?: string;
    textStatusFinalizado?: string;
    textStatusProximosPassos?: string;
    textStatusResultadosAprendizados?: string;
    textStatusTestesRealizados?: string;
    textStatusHipotesesLevantadas?: string;
    textsStatusProblemaDefinido?: string;
    textStatusProblemaCriado?: string;
    textButtonDefinirProblema?: string;
    textHipotesesLevantadas?: string;
    textButtonVisualizar?: string;
    textButtonContinue?: string;
}
/**
 * @param {CardDefinicaoProblemaTranslateProps} props
 */
export default function CardDefinicaoProblema(props: CardDefinicaoProblemaTranslateProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map