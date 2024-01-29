/// <reference types="react" />
export interface User {
    id: number;
    name: string;
    avatar: string;
    subTitle: string;
}
export interface MentionProps extends Readonly<{
    users: User[];
    height: number;
    width: number;
    onSelect: (user: User) => void;
    inputSearch?: string;
}> {
}
export declare const Mentions: (mention: MentionProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map