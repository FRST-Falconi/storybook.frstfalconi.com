/// <reference types="react" />
import { MentionProps, User } from "./types";
export declare const useMentions: (mention: MentionProps) => {
    selectedUser: User;
    setSelectedUser: import("react").Dispatch<import("react").SetStateAction<User>>;
    mentionListRef: import("react").MutableRefObject<HTMLDivElement>;
};
//# sourceMappingURL=useMentions.d.ts.map