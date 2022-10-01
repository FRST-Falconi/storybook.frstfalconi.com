/// <reference types="react" />
interface RatingParams {
    titulo: string;
    /**
     * @prop {number} nota: Valor da média da avaliação
     */
    nota: number;
    /**
     * @prop {string} descricaoAvaliacao: Descrição da avaliação (Ótimo, Bom...)
     */
    descricaoAvaliacao: string;
    /**
     * @prop {string} nomeAvaliacao: nome da avaliação (avaliação...)
     */
    nomeAvaliacao: string;
    /**
    * @prop {number} qtdeAvaliacao: Valor a ser exibido como (23 avaliações)
    */
    qtdeAvaliacao: number;
    /**
     * @prop {number} tipoVisualizacao: Estilo de card (1- Estrela Amarela, 2- Estrela Negra, 3- Estrela Branca)
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
export default function Rating(props: RatingParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map