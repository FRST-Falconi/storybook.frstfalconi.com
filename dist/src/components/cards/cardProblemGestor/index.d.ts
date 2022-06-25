/// <reference types="react" />
import '../../../shared/global.css';
interface CardProblemGestorProps {
    problemID: string;
    userName: string;
    userCargo: string;
    userStatus: string;
    userAvatar?: string;
    tags?: string[];
    cardTitle?: string;
    ratingImpacto?: any;
    ratingRelevancia?: any;
    ratingCurtidas?: number;
    lastUpdated?: string;
    onClick: (problemID: string) => void;
}
/**
 * @param {CardProblemGestorProps} props
 */
export default function CardProblemGestor(props: CardProblemGestorProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map