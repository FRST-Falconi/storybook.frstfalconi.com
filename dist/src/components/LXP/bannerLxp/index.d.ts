import React from 'react';
interface BannerLxpParams {
    title: string;
    titleColor?: string;
    bgSrc?: string;
    bgColor?: string;
    isDisabledTitle?: boolean;
    style?: React.CSSProperties;
    /**
     * @prop {object} selectedFile: função de callback que retorna o arquivo selecionado pelo componente
     */
    /**
     *
     * /**
     * @prop {object} handleChangeBanner: função de callback que pega o arquivo selecionado
     */
    handleChangeBanner?: (file: any) => void;
    /**
     * @prop {object} onSaveInfo: função de callback que retorna todos as informações do banner no final das alterações. (nesta ordem[Title, isTitledisabled, colorTitle, backgroundColor, fixImage])
     */
    onSaveInfo?: ([]: Iterable<any>) => void;
}
export default function BannerLxp(props: BannerLxpParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map