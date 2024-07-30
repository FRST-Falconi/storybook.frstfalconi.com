
interface IOption {
    id?: string;
    label?: string;
    startWithIcon?: React.ReactNode;
    endWithIcon?: React.ReactNode;
    onClick?: (id?: any) => void;
}

export interface IResourceInfoDrop {
    label: string;
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    options?: Array<IOption>;
    enablePulse?: boolean;
}