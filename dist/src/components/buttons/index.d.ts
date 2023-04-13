import React from 'react';
import '../../shared/global.css';
type enumVariant = 'primary' | 'secondary' | 'link' | 'expandedPrimary' | 'expandedSecondary';
type enumType = 'group' | null;
interface buttonProps {
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
}
export default function Button({ variant, label, sizeIcon, disabled, startIcon, endIcon, handleClick, type, active, style, value, length, id, ref, handleMount }: buttonProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map