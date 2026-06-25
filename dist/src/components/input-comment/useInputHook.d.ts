import React from 'react';
import { User } from './types';
import { EmojiClickData } from 'emoji-picker-react';
interface IInputHook {
    limit: number;
    placeholder: string;
    onSendMentions: (mentions: string[]) => void;
    onContentFormat: (content: string) => void;
    onContentUnformat: (content: string) => void;
    onChange?: (value: any) => void;
    value?: string;
    replyMentionedUser?: User;
    initialText?: string;
    configColor?: string;
}
export declare const useInputHook: ({ limit, placeholder, onSendMentions, onContentFormat, onContentUnformat, onChange, value, replyMentionedUser, initialText, configColor }: IInputHook) => {
    handleInput: (event: React.KeyboardEvent) => void;
    handlePlaceholderInputText: (isPlaceHolderFocus?: boolean) => void;
    showMention: boolean;
    setShowMention: React.Dispatch<React.SetStateAction<boolean>>;
    inputSearch: string;
    setInputSearch: React.Dispatch<React.SetStateAction<string>>;
    divInputRef: React.MutableRefObject<HTMLDivElement>;
    mentionTopPosition: string;
    handleMentionUser: (user: User) => void;
    textLength: number;
    isPlaceholder: boolean;
    styleLimitExceeded: boolean;
    divPlaceholder: React.MutableRefObject<HTMLDivElement>;
    handleEmojiSelected: (emojiData: EmojiClickData, event: MouseEvent) => void;
    showPicker: boolean;
    setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
};
export {};
//# sourceMappingURL=useInputHook.d.ts.map