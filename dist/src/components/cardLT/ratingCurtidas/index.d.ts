/// <reference types="react" />
interface RatingCurtidasParams {
    /**
     * @prop {number} tipoBotao: Tipos de botão (1- Fundo Branco, rocket laranja. 2- Fundo Laranja, rocket branco. 3- Fundo cinza, rocket branco)
    */
    tipoBotao: number;
    titulo: string;
    qtdeCurtidas: number;
    style?: React.CSSProperties;
}
/**
 *
 * @componente
 */
export default function RatingCurtidas(props: RatingCurtidasParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map