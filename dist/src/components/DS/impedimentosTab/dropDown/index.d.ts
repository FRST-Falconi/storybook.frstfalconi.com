import { TabInfo } from '../impedimentosTab';
interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    anchor: HTMLDivElement | null;
    impedimentoList: Array<TabInfo>;
    maxTabs: number;
    onClickImpedimento: (impedimento: TabInfo) => void;
}
export default function Dropdown({ isOpen, anchor, onClose, impedimentoList, onClickImpedimento }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map