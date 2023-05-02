/// <reference types="react" />
interface RocketButtonParams {
    /**
     * @prop {number} tipoBotao: Tipos de botão (1- Fundo Branco, rocket laranja. 2- Fundo Laranja, rocket branco. 3- Fundo cinza, rocket branco)
    */
    tipoBotao: number;
    style?: React.CSSProperties;
    handleClick?: () => void;
}
/**
 *
 * @componente
 */
export default function RocketButton(props: RocketButtonParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map