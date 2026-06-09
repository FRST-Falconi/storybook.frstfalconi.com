import React, { ButtonHTMLAttributes } from 'react';
import '../../shared/global.css';
type enumVariant = 'primary' | 'secondary' | 'link' | 'expandedPrimary' | 'expandedSecondary';
type enumType = 'group' | null;
interface ButtonProps {
    variant?: enumVariant;
    label?: string;
    disabled?: boolean;
    startIcon?: any;
    endIcon?: any;
    sizeIcon?: string;
    handleClick?: (e: any) => void;
    type?: enumType;
    value?: any;
    active?: boolean;
    style?: React.CSSProperties;
    length?: number;
    id?: string;
    ref?: any;
    handleMount?: (e: any) => void;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    backgroundColor?: string;
}
export default function Button({ variant, label, sizeIcon, disabled, startIcon, endIcon, handleClick, type, active, style, value, length, id, ref, handleMount, buttonProps, backgroundColor, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map