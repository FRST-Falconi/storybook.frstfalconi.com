/// <reference types="react" />
interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    onSaveBtn: (text: string) => void;
    anchor: HTMLDivElement | null;
}
export default function AddImpedimentoModal({ isOpen, onClose, onSaveBtn, anchor }: modalProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map