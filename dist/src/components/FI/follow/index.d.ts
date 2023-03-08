/// <reference types="react" />
interface IFollow {
    style: React.CSSProperties;
    textButtonFollow: string;
    followItemsChallenge?: Array<FollowInfo>;
    doNotFollowChallenge?: FollowInfo;
    doNotFollowPostText?: string;
    handleDoNotFollowPostClick?: () => void;
}
interface FollowInfo {
    title: string;
    isFollowing: boolean;
    handleChange: () => void;
}
export default function Follow(props: IFollow): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map