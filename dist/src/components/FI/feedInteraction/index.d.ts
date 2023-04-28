/// <reference types="react" />
interface IFeedInteraction {
    id: string;
    qtdLikes: string;
    qtdComments: string;
    textLikes: string;
    textDeslike: string;
    textComments: string;
    textAvaluation: string;
    textAvaluationTitle: string;
    isLiked: boolean;
    isChallengeReview?: boolean;
    ratingImpacto?: number;
    textImpacto?: string;
    ratingRelevancia?: number;
    textRelevancia?: string;
    isPostReview?: boolean;
    ratingPostReview?: number;
    textLatestComment?: string;
    userAvatar?: string;
    userCommentPlaceholder?: string;
    latestComment?: any;
    commentList?: any[];
    textLoadMoreComments?: string;
    textSaveCommentBtn?: string;
    handleSaveCommentBtn?: (comment: any) => void;
    isDisabledAvaluation?: boolean;
    style?: React.CSSProperties;
    onCommentChange?: (e: any) => void;
    handleLikeClick?: () => void;
    handleImpactoChange?: any;
    handleRelevanciaChange?: any;
    handlePostReviewChange?: any;
    hideComments?: any;
    textTotalView?: string;
    handleClickTextTotalViews?: () => void;
}
export default function FeedInteraction(props: IFeedInteraction): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map