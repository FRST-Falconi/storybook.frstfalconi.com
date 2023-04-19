/// <reference types="react" />
import '../../../shared/global.css';
declare type enumType = 'text' | 'password' | 'email' | 'number';
export interface TextFieldProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    endIcon?: any;
    endIconChanged?: any;
    startIcon?: any;
    type?: enumType;
    width?: string;
    height?: string;
    value?: any;
    error?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    required?: boolean;
    className?: string;
    multiline?: boolean;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    handleClickEndIcon?: () => void;
}
export default function TextField(props: TextFieldProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map