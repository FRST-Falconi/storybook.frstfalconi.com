import '../../../shared/global.css';
interface CardFaseDesafiosProps {
    cardTitle?: string;
    cardDescription?: string;
    handleClickContinue?: () => void;
    handleToView?: () => void;
    optionsMenuMore?: any | any[];
    Hypotheshis?: number;
    HypothesesToTest?: number;
    Actions?: number;
    titleFase?: string;
    fase?: 'finalizado' | '1' | '2' | '3' | '4' | '5';
    textButton?: string;
    textButtonContinue?: string;
}
export default function CardFaseDesafios(props: CardFaseDesafiosProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map