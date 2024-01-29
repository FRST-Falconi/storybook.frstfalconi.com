/// <reference types="react" />
interface objPropiedades {
    title?: string;
    description?: string;
    bgImg?: string;
    typeOfHeader?: 'inProgress' | 'recomendation';
    progresso?: number;
    channel?: string;
    onClick?: () => void;
    labelButton?: string;
    height?: number | string;
}
interface HeaderContentParams {
    textViewMore?: string;
    textViewLess?: string;
    autoplayTime?: number;
    listaRecomendacao: Array<objPropiedades>;
    style?: React.CSSProperties;
    height?: number | string;
}
export default function HeaderContent(props: HeaderContentParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map