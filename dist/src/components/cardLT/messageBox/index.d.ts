/// <reference types="react" />
interface MessageBoxParams {
    texto: string;
    /**
     * @prop {number} tipoVisualizacao: Estilo de card (1- Mensagem sucesso, 2- Mensagem alerta, 3- Mensagem erro)
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
export default function MessageBox(props: MessageBoxParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map