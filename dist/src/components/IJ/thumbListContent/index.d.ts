/// <reference types="react" />
declare type typeThumb = 'video' | 'podcast' | 'question';
interface IThumbListContent {
    imageSrc?: string;
    typeThumbContent?: typeThumb;
    title?: string;
    description?: string;
    isLoading?: boolean;
    textViewMoreButton?: string;
    textViewLessButton?: string;
    onClickThumb?: () => void;
    style?: React.CSSProperties;
}
export default function ThumbListContent(props: IThumbListContent): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map