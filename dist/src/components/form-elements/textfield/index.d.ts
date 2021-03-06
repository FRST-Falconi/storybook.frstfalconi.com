/// <reference types="react" />
import '../../../shared/global.css';
declare type enumType = 'text' | 'password' | 'email';
export interface TextFieldProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    endIcon?: any;
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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function TextField(props: TextFieldProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map