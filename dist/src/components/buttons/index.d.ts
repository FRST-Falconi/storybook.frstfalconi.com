/// <reference types="react" />
import '../../shared/global.css';
interface buttonProps {
    variant?: string;
    label?: string;
    disabled?: boolean;
    startIcon?: any;
    handleClick?: () => void;
}
export default function Button({ variant, label, disabled, startIcon, handleClick }: buttonProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map