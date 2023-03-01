/// <reference types="react" />
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface objPropiedades {
    title?: string;
    description?: string;
    bgImg?: string;
    typeOfHeader?: 'inProgress' | 'recomendation';
    progresso?: number;
    channel?: string;
    onClick?: () => void;
    labelButton?: string;
}
interface HeaderContentParams {
    textViewMore?: string;
    textViewLess?: string;
    autoplayTime?: number;
    listaRecomendacao: Array<objPropiedades>;
}
export default function HeaderContent(props: HeaderContentParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map