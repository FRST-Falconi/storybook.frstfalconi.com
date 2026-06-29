import React from 'react';
export interface FeedInteractionV3Props {
    style?: React.CSSProperties;
    primaryColor?: string;
    initialIsLiked?: boolean;
    likeCount?: number;
    viewCount?: number;
    commentCount?: number;
    onLikeToggle?: (nextIsLiked: boolean) => void;
    handleLikeClick?: () => void;
    hiddenViewButton?: boolean;
    hiddenCommentButton?: boolean;
    hiddenLikeButton?: boolean;
    handleViewLikesClick?: () => void;
    handleCommentsClick?: () => void;
    handleViewsClick?: () => void;
}
export default function FeedInteractionV3(props: FeedInteractionV3Props): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map