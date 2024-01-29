/// <reference types="react" />
import '../../../shared/global.css';
interface CardProblemProps {
    selected: boolean;
    language: string;
    isButtonVerMais: boolean;
    handleSelect?: (id: string) => void;
    onClick?: (problemID: string) => void;
    isActiveClickProfile?: boolean;
    onClickUserInfo?: () => void;
    textVisitProfile?: string;
    problemID: string;
    userName: string;
    userCargo: string;
    /**
     * @prop {string} problemStatus: Qual o status do problema: (finalizado, proxPassos, resultadosAprendizados, testesRealizados, hipoteseLevantada, problemaDefinido, problemaCriado)
     */
    problemStatus: string;
    userAvatar?: string;
    cardTitle?: string;
    /**
     * @prop {string} statusProblema: Qual o status do problema (aprovado, revisar ou aguardando)
     */
    statusProblema?: string;
    trilhaVinculada?: string;
    lastUpdated?: string;
    isVerified?: boolean;
}
/**
 * @param {CardProblemProps} props
 */
export default function CardProblem(props: CardProblemProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map