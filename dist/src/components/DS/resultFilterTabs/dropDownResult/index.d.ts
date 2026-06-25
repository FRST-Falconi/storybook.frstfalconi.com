/// <reference types="react" />
import { IResult } from '../resultFilterTabs';
interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    anchor?: HTMLDivElement | null;
    ResultList: Array<IResult>;
    maxTabs: number;
    onClickResultList: (result: IResult) => void;
}
export default function DropdownResult({ isOpen, anchor, onClose, ResultList, onClickResultList }: DropdownProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map