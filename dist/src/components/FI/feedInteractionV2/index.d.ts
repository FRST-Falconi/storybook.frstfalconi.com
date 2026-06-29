/// <reference types="react" />
interface IFeedInteraction {
    id: string;
    qtdLikes: string;
    qtdComments: string;
    textLikes: string;
    textDeslike: string;
    textComments: string;
    textLoadMoreComments?: string;
    hideComments?: any;
    textTotalView?: string;
    handleClickTextTotalViews?: () => void;
    handleLikeClick?: () => void;
    handleShowLikes?: () => void;
    isLiked: boolean;
    isCommentV2?: boolean;
    childrenCommentV2?: any;
    style?: React.CSSProperties;
}
export default function FeedInteractionV2(props: IFeedInteraction): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map