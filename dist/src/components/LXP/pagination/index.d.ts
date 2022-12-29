/// <reference types="react" />
interface IPagination {
    /**
     * @prop {number} totalRegistry: Quantidade total de registros a serem paginados
     */
    totalRegistry: number;
    /**
     * @prop {number} registryPerPage: Quantidade de registros a serem exibidos por página
     */
    registryPerPage: number;
    /**
     * @prop {number} qtdNumberShowPagination: Quantidade de botões a serem exibidos na paginação
     */
    qtdNumberShowPagination: number;
    showFirstLastButton?: boolean;
    textFirstButton?: string;
    textLastButton?: string;
    children: React.ReactNode;
    onLoadPage: (page: number) => void;
    style: React.CSSProperties;
}
export default function Pagination(props: IPagination): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map