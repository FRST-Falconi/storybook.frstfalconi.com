/// <reference types="react" />
type loadSizes = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
type loadPosition = 'right' | 'bottom' | 'left' | 'top';
interface ILoading {
    /**
     * @prop {loadSizes} sizeLoading: extra-small: 16px | small: 20px | medium: 24px | large: 32px | extra-large: 40px
     */
    sizeLoading?: loadSizes;
    loadColor?: string;
    loadText?: string;
    loadTextColor?: string;
    /**
     * @prop {loadPosition} positionLoadingText: position of the load text: right, bottom, left or top
     */
    positionLoadingText?: loadPosition;
    style?: React.CSSProperties;
}
export default function Loading(props: ILoading): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map