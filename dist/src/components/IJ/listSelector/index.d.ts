/// <reference types="react" />
interface ItemList {
    id: string;
    description: string;
}
interface IListSelector {
    listTitle: string;
    textViewMore: string;
    textViewLess: string;
    /**
     * @prop {Array<ItemList>} contentList: um array do objeto a ser exibido na lista( um ID e uma descrição)
     */
    contentList: Array<ItemList>;
    /**
     * @prop {number} minShowList: A quantidade minima a ser exibida da lista
     */
    minShowList: number;
    selectedItens: (itens: any) => void;
    style: React.CSSProperties;
}
export default function ListSelector(props: IListSelector): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map