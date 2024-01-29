/// <reference types="react" />
import '../../../shared/global.css';
interface CardDefinicaoFaseProps {
    cardTitle?: string;
    cardDescription?: string;
    handleClickContinue?: () => void;
    handleToView?: () => void;
    optionsMenuMore?: any | any[];
    titleFase?: string;
    fase?: 'finalizado' | '1' | '2' | '3' | '4' | '5';
    textButtonVisualizar?: string;
    textButtonContinue?: string;
}
export default function CardDefinicaoFase(props: CardDefinicaoFaseProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map