import React from "react";
type valueEnum = string | number | boolean | null | React.ReactNode;
interface SelectProps {
    value?: valueEnum;
    label?: string | React.ReactNode;
    selected?: boolean;
    handleSelect?: (value: any) => void;
    disabled?: boolean;
}
export default function SelectItem({ value, label, selected, handleSelect, disabled }: SelectProps): React.JSX.Element;
export {};
//# sourceMappingURL=SelectItem.d.ts.map