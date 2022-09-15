/// <reference types="react" />
import '../../shared/global.css';
declare type enumVariant = 'primary' | 'secondary' | 'link' | 'third' | 'expandedPrimary' | 'expandedSecondary';
interface buttonProps {
    variant?: enumVariant;
    label?: string;
    disabled?: boolean;
    startIcon?: any;
    endIcon?: any;
    sizeIcon?: string;
    handleClick?: () => void;
}
export default function Button({ variant, label, sizeIcon, disabled, startIcon, endIcon, handleClick }: buttonProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map