/// <reference types="react" />
interface ModalStatusProblemaProps {
    open: boolean;
    title?: string;
    description?: string;
    approves: any[];
    language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es';
    handleClose: () => void;
    style: React.CSSProperties;
}
export default function ModalStatusProblema(props: ModalStatusProblemaProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map