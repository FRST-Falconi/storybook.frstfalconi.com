import React from 'react';
interface BaseProps {
    className: string;
    [key: string]: unknown;
}
export declare const Button: React.ForwardRefExoticComponent<Omit<{
    active: boolean;
    reversed: boolean;
} & BaseProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export declare const EditorValue: React.ForwardRefExoticComponent<Omit<{
    value: any;
} & BaseProps, "ref"> & React.RefAttributes<null>>;
export declare const Icon: React.ForwardRefExoticComponent<Omit<BaseProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export declare const Instruction: React.ForwardRefExoticComponent<Omit<BaseProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Menu: React.ForwardRefExoticComponent<Omit<BaseProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const Portal: ({ children }: {
    children: any;
}) => any;
export declare const Toolbar: React.ForwardRefExoticComponent<Omit<BaseProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=components.d.ts.map