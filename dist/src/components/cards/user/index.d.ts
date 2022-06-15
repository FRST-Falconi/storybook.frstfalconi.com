/// <reference types="react" />
import '../../../shared/global.css';
declare type statusAssessment = 'not-started' | 'started' | 'finished';
interface UserCardProps {
    loading: boolean;
    selected: boolean;
    handleSelect: (id: string) => void;
    userID: string;
    userName: string;
    userEmail: string;
    userStatus: string;
    userAvatar?: string;
    userArea?: string;
    userPosition?: string;
    licenses: string[];
    assessment?: statusAssessment;
    editAction?: () => void;
}
/**
 * @param {UserCardProps} props
 */
export default function CalendarCard(props: UserCardProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map