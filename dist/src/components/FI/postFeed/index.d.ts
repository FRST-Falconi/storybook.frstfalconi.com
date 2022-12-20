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
    userCommentPlaceholder?: string;
    textLoadMoreComments?: string;
    textSaveCommentBtn?: string;
    isDisabledAvaluation?: boolean;
    ratingPostReview?: number;
    commentList?: any;
    handleLikeClick?: () => void;
    handlePostReviewChange?: () => void;
    handleSaveCommentBtn?: (comment: any) => void;
    onCommentChange?: (e: any) => void;
    isVisibleComments?: boolean;
}
export default function PostFeed(props: IPostFeed): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map