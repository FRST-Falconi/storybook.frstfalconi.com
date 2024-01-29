/// <reference types="react" />
import './styles/primereact.css';
import './styles/primeflex.css';
import './styles/theme.css';
interface IDropdownMultiselect {
    listItems?: ISelectedValue;
    selectPlaceholder?: string;
    searchSelectPlaceholder?: string;
    people: string;
    person: string;
    maxSelectedShow?: number;
    isDisabled?: boolean;
    removeItemsToolTip?: string;
    modalTitle?: string;
    removeModalText?: string;
    btnSelectAllText?: string;
    getSelectedItems?: (selectedItems: any) => void;
    style?: React.CSSProperties;
    optionLayout?: (options: any) => void;
    selectedDefault?: ISelectedValue;
    activeLazyLoad?: boolean;
    onSearch?: (searchTerm: any) => void;
}
type ISelectedValue = {
    id: string;
    avatar: string;
    name: string;
    description: string;
    subDescription?: string;
}[];
export default function DropdownMultiselect(props: IDropdownMultiselect): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map