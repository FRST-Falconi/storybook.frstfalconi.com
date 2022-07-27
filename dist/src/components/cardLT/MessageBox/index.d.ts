/// <reference types="react" />
interface MessageBoxParams {
    texto: string;
    descricao?: string;
    hasHover?: boolean;
    /**
     * @prop {number} tipoVisualizacao: Estilo de card (1- Mensagem sucesso, 2- Mensagem alerta, 3- Mensagem erro, 4- Notificação arquivo, 5- Erro Notificação arquivo)
     */
    tipoVisualizacao: number;
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
    /**
   * @prop {() => void} onClick: Função que será executada quando houver o click do botão
   */
    onClick?: () => void;
    /**
   * @prop {() => void} onClickExit: Função que será executada quando houver o click do botão de saida
   */
    onClickExit?: () => void;
}
/**
 *
 * @componente
 */
export default function MessageBox(props: MessageBoxParams): any;
export {};
//# sourceMappingURL=index.d.ts.map