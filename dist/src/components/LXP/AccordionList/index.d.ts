import React from 'react';
type TAccordionListprops = {
    title?: string;
    children?: React.Component;
    isOpen?: boolean;
    setIsOpen: any;
    selectedItem: boolean;
    style?: React.CSSProperties;
    isOldAccordionList?: boolean;
    value?: number;
    darkMode?: boolean;
};
export default function AccordionList({ title, children, isOpen, setIsOpen, isOldAccordionList, selectedItem, style, value, darkMode }: TAccordionListprops): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map