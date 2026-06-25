/// <reference types="react" />
import { Vote } from './types';
export declare const HypothesisComponent: ({ description, type, id, title, votes, onVote, canVote, canViewVote, userLoggedId, deleteVote, canViewListVotes, votesSingularText, votesPluralText, voteText, deleteVoteText, handleViewProfile, avatar, hasEditHipotesis, onDeleteHipotesis, showAvatar, authorId, hasVoteGoal, loading, onChangeVote, authorGoalId, changeVoteText, onSaveEditHipotesis }: {
    description: string;
    type: string;
    id: string;
    title: string;
    votes: Vote[];
    userLoggedId: string;
    onVote?: (hypothesiId: string) => any;
    deleteVote?: (voteId: number) => any;
    handleViewProfile?: (userId: string) => any;
    canVote?: boolean;
    canViewListVotes?: boolean;
    canViewVote?: boolean;
    hasVoteGoal?: boolean;
    hasEditHipotesis?: boolean;
    votesSingularText?: string;
    votesPluralText?: string;
    voteText?: string;
    deleteVoteText?: string;
    avatar?: string;
    onDeleteHipotesis?: () => void;
    showAvatar?: boolean;
    authorId?: string;
    authorGoalId?: string;
    loading?: boolean;
    onChangeVote?: (hypothesiId: string) => any;
    changeVoteText?: string;
    onSaveEditHipotesis?: (description: string) => void;
}) => import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map