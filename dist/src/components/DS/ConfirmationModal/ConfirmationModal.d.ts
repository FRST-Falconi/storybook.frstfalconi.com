import { ReactNode } from "react";
interface ConfirmationModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    onConfirm: () => void;
    labelButton: string;
}
export declare const ConfirmationModal: ({ open, onClose, title, children, onConfirm, labelButton }: ConfirmationModalProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=ConfirmationModal.d.ts.map