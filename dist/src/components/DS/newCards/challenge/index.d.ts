/// <reference types="react" />
interface ChallengeCardProps {
    selected?: boolean;
    avatar?: string;
    name?: string;
    role?: string;
    description?: string;
    lastStep?: string;
    cardID: string;
    type_challenge?: string;
    isIterator?: boolean;
    indicatorStart?: number;
    indicatorCurrent?: number;
    indicatorGoal?: number;
    impact?: number;
    relevance?: number;
    handleSelected?: (e: any) => void;
    handleClickChallenge?: () => void;
    handleClickPresentation?: () => void;
    onClickAvatar?: () => void;
    isVisibleHeaderTypeChallenge?: boolean;
    handleGroupExecution: (params: any) => void;
    iteratorNumber?: number;
    resultNumber?: number;
    showCheckbox?: boolean;
    showExecutionGroup: boolean;
}
export default function NewChallengeCard({ selected, avatar, name, role, description, lastStep, cardID, type_challenge, isIterator, isVisibleHeaderTypeChallenge, indicatorStart, indicatorCurrent, indicatorGoal, impact, relevance, handleSelected, handleClickChallenge, handleClickPresentation, onClickAvatar, handleGroupExecution, iteratorNumber, resultNumber, showCheckbox, showExecutionGroup, }: ChallengeCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map