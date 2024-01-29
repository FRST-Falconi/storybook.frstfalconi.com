interface Wrapper {
    disabled?: boolean;
    focus?: boolean;
    isPlaceholder?: boolean;
    isInputLimit?: boolean;
}
interface IEmojiWindow {
    visible?: boolean;
    positionEmojiWindow?: any;
}
interface TextArea {
    height?: string;
}
export declare const InputWrapper: import("styled-components").StyledComponent<"div", any, Wrapper, never>;
export declare const InputText: import("styled-components").StyledComponent<"div", any, TextArea, never>;
export declare const InputPlaceholder: import("styled-components").StyledComponent<"div", any, TextArea, never>;
export declare const SmileIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HelperContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HelperText: import("styled-components").StyledComponent<"span", any, {
    isInputLimit?: boolean;
}, never>;
export declare const EmojiWindow: import("styled-components").StyledComponent<"div", any, IEmojiWindow, never>;
export declare const LimitCharsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LimitCharsExceededMessage: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
//# sourceMappingURL=inputCommentStyles.d.ts.map