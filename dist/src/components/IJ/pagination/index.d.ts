/// <reference types="react" />
interface IPagination {
    totalRegistry: number;
    registryPerPage: number;
    qtdNumberShowPagination: number;
    showFirstLastButton?: boolean;
    isLoading?: boolean;
    textFirstButton?: string;
    textLastButton?: string;
    children: React.ReactNode;
    onLoadPage: (page: number) => void;
    style?: React.CSSProperties;
    buttonBackgroundColor?: string;
}
export default function Pagination(props: IPagination): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map