/// <reference types="react" />
export interface ICardJourney {
    userInfo: {
        id?: string;
        name?: string;
        avatar?: string;
        description?: string;
        colaboracao?: any;
        ButtonText?: string;
    };
    style?: React.CSSProperties;
    onClickProfile?: () => void;
    onClickButton?: () => void;
    onClickRemove?: () => void;
}
export default function CardJourney({ userInfo, style, onClickButton, onClickProfile, onClickRemove }: ICardJourney): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map