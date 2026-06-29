interface Wrapper {
    disabled?: boolean;
    active?: boolean;
    isOnEditing?: boolean;
    isError?: boolean;
}
interface IEmojiWindow {
    visible?: boolean;
    positionEmojiWindow?: any;
}
interface TextArea {
    active?: boolean;
    height?: string;
    isError?: boolean;
}
interface IPublish {
    disabled?: boolean;
}
export declare const InputWrapper: import("styled-components").StyledComponent<"div", any, Wrapper, never>;
export declare const InputText: import("styled-components").StyledComponent<"textarea", any, TextArea, never>;
export declare const SmileIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HelperText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const EmojiWindow: import("styled-components").StyledComponent<"div", any, IEmojiWindow, never>;
export declare const TextLimitTx: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const WrapperBtn: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CancelBtn: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PublishBtn: import("styled-components").StyledComponent<"div", any, IPublish, never>;
export declare const AlertManyChars: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Or: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=inputCommentPost-ItStyles.d.ts.map