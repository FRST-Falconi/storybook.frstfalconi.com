/// <reference types="react" />
interface IPostFeed {
    title: string;
    description: string;
    style?: React.CSSProperties;
    postImage?: string;
    postVideoId?: string;
    videoWidth?: string;
    videoHeight?: string;
    textPostButton?: string;
    handlePostButtonClick?: () => void;
    /**
     * Feed Interaction props
     */
    postId?: string;
    isPostLiked?: boolean;
    qtdComments?: string;
    qtdLikes?: string;
    userAvatar?: string;
    textAvaluation?: string;
    textAvaluationTitle?: string;
    textComments?: string;
    textLikes?: string;
    textDeslike?: string;
    textLoadMoreComments?: string;
    isDisabledAvaluation?: boolean;
    ratingPostReview?: number;
    handleLikeClick?: () => void;
    handlePostReviewChange?: () => void;
    isVisibleComments?: boolean;
    videoSource?: string;
    fixPostButton?: any;
    isCompletePost?: boolean;
    isCommentV2?: boolean;
    childrenCommentV2?: any;
}
export default function PostFeed(props: IPostFeed): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map