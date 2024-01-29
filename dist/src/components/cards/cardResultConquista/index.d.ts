/// <reference types="react" />
import '../../../shared/global.css';
interface CardResultConquistaProps {
    userAvatar?: string;
    /**
     * @prop {number} statusCard: Qual card será exibido: 1 - Conquista, 2 - Aprendizado
     */
    statusCard: number;
    userName: string;
    userArea: string;
    description: string;
    problemId: string;
    onClick?: (problemId: string) => void;
    onClickAvatar?: () => void;
    onClickName?: () => void;
    textMoreDetails?: string;
    textVisitProfile?: string;
    style?: React.CSSProperties;
}
/**
 * @param {CardResultConquistaProps} props
 */
export default function CardResultConquista(props: CardResultConquistaProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map