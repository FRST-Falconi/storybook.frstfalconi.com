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
    userAvatar?: string;
    textLoadMoreComments?: string;
    isDisabledAvaluation?: boolean;
    style?: React.CSSProperties;
    handleLikeClick?: () => void;
    handleImpactoChange?: any;
    handleRelevanciaChange?: any;
    handlePostReviewChange?: any;
    hideComments?: any;
    textTotalView?: string;
    handleClickTextTotalViews?: () => void;
    isCommentV2?: boolean;
    childrenCommentV2?: any;
}
export default function FeedInteraction(props: IFeedInteraction): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map