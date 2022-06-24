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
}
/**
 * @param {CardDefinicaoProblemaProps} props
 */
export default function CardDefinicaoProblema(props: CardDefinicaoProblemaProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map