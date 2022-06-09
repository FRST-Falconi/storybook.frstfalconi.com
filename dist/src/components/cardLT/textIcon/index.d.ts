/// <reference types="react" />
interface TextIconParams {
    /**
     * @prop {string} description: Valor do texto
     */
    description: string;
    /**
     * @prop {<React.SVGProps<SVGSVGElement>>} svg: Informar a tag da props. Ex.: "svg={<StarIcon color="black"/>}""
     */
    svg?: React.SVGProps<SVGSVGElement>;
    /**
    * @prop {<React.SVGProps<SVGSVGElement>>} linkImage: Link de imagens em PNG, JPEG...
    */
    linkImage?: React.SVGProps<SVGSVGElement>;
    /**
     * @prop {number} tipoVisualizacao: Selecionado ou não selecionado
     */
    tipoVisualizacao: number;
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
}
/**
 *
 * @componente
 */
export default function TextIcon(props: TextIconParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map