import { ReactNode } from "react";
interface ModalConfirmeProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    onConfirm: () => void;
}
export declare const ModalConfirme: ({ open, onClose, title, children, onConfirm }: ModalConfirmeProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map