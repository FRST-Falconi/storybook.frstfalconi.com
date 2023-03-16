import { CSSProperties, ReactNode, MouseEvent } from 'react';
interface ModalProps {
    children?: ReactNode;
    width?: string;
    headerContent?: any;
    open?: boolean;
    style?: CSSProperties;
    mobileFullPage?: boolean;
    showCloseButton?: boolean;
    showHeader?: boolean;
    onClose?: (event?: MouseEvent | any) => void;
    onOpen?: (event?: MouseEvent | any) => void;
    closeOnClickOutside?: boolean;
    animation?: 'BlowUp' | 'Fade' | 'SlideUp' | 'SlideDown';
}
export default function Modal({ children, width, headerContent, open, mobileFullPage, showCloseButton, showHeader, style, onClose, onOpen, closeOnClickOutside, animation }: ModalProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map