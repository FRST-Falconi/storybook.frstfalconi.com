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
    removeEvaluation?: any;
    valueRatingImpacto?: string;
    valueRatingRelevancia?: string;
    userAvatar?: string;
    isUserLoggedChallenge?: boolean;
    textLoadMoreComments?: string;
    isDisabledAvaluation?: boolean;
    style?: React.CSSProperties;
    handleLikeClick?: () => void;
    handleShowLikes?: () => void;
    tooltipLikesText?: string;
    handleImpactoChange?: any;
    handleRelevanciaChange?: any;
    handlePostReviewChange?: any;
    hideComments?: any;
    textTotalView?: string;
    handleClickTextTotalViews?: () => void;
    isCommentV2?: boolean;
    childrenCommentV2?: any;
    isVisibleAvaliations?: boolean;
}
export default function FeedInteraction(props: IFeedInteraction): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map