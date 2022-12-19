/// <reference types="react" />
declare type valueEnum = string | number | boolean | null;
interface SelectProps {
    value?: valueEnum;
    label?: string;
    selected?: boolean;
    handleSelect?: (value: any) => void;
    disabled?: boolean;
}
export default function SelectLXPItem({ value, label, selected, handleSelect, disabled }: SelectProps): JSX.Element;
export {};
//# sourceMappingURL=SelectLXPItem.d.ts.map