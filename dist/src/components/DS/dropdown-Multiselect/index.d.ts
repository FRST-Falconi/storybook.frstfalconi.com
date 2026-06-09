/// <reference types="react" />
import './styles/primereact.css';
import './styles/stylesMulti.css';
interface IDropdownMultiselect {
    listItems?: ISelectedValue;
    selectPlaceholder?: string;
    searchSelectPlaceholder?: string;
    people: string;
    person: string;
    maxSelectedShow?: number;
    isModalOpen?: boolean;
    isDisabled?: boolean;
    removeItemsToolTip?: string;
    modalTitle?: string;
    removeModalText?: string;
    btnSelectAllText?: string;
    getSelectedItems?: (selectedItems: any) => void;
    style?: React.CSSProperties;
    optionLayout?: (options: any) => void;
    itemLayout?: (item: any) => React.ReactNode;
    selectedDefault?: ISelectedValue;
    activeLazyLoad?: boolean;
    onSearch?: (searchTerm: any) => void;
    searchTerm?: string;
    canShowAvatar?: boolean;
    useTextFilter?: boolean;
    hiddenAddAll?: boolean;
    variantModeDescritpion?: boolean;
    width?: string;
    tagColor?: string;
    darkMode?: boolean;
}
type ISelectedValue = {
    id: string;
    avatar: any;
    name: string;
    description: string;
    subDescription?: string;
    isVariant?: boolean;
}[];
export default function DropdownMultiselect(props: IDropdownMultiselect): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map