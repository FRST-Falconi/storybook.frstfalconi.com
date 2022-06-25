/// <reference types="react" />
import '../../../shared/global.css';
interface CardProblemProps {
    selected: boolean;
    isButtonVerMais: boolean;
    handleSelect?: (id: string) => void;
    onClick?: (problemID: string) => void;
    problemID: string;
    userName: string;
    userCargo: string;
    /**
        * @prop {string} problemStatus: Qual o status do problema: (finalizado, proxPassos, resultadosAprendizados, testesRealizados, hipoteseLevantada, problemaDefinido, naoIniciou)
    */
    problemStatus: string;
    userAvatar?: string;
    tags?: string[];
    cardTitle?: string;
    ratingImpacto?: any;
    ratingRelevancia?: any;
    /**
        * @prop {string} statusProblema: Qual o status do problema (aprovado, revisar ou aguardando)
    */
    statusProblema?: string;
    trilhaVinculada?: string;
    lastUpdated?: string;
}
/**
 * @param {CardProblemProps} props
 */
export default function CardProblem(props: CardProblemProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map