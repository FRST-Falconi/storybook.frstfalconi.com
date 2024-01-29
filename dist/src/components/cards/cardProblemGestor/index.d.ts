/// <reference types="react" />
import '../../../shared/global.css';
interface CardProblemGestorProps {
    problemID: string;
    userName: string;
    userCargo: string;
    problemStatus: string;
    userAvatar?: string;
    tags?: string[];
    cardTitle?: string;
    ratingImpacto?: any;
    ratingRelevancia?: any;
    ratingCurtidas?: number;
    lastUpdated?: string;
    onClick: (problemID: string) => void;
    statusName?: string;
    statusColor?: string;
    statusBackgroundColor?: string;
    locales?: any;
    onClickUserInfo?: () => void;
    textVisitProfile?: string;
}
/**
 * @param {CardProblemGestorProps} props
 */
export default function CardProblemGestor(props: CardProblemGestorProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map