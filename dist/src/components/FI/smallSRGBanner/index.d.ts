/// <reference types="react" />
interface ISmallSRGBanner {
    style: React.CSSProperties;
    textButton: string;
    handleClick: () => void;
    textTitleLogo?: string;
    isTexto?: boolean;
    traducao?: 'es-ES' | 'en-US';
    hideBtn?: boolean;
}
export default function SmallSRGBanner(props: ISmallSRGBanner): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map