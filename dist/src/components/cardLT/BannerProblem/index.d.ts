/// <reference types="react" />
interface BannerProblemParams {
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
    problema: string;
    cargo: string;
    nome: string;
    avatar: string;
    area: string;
    email: string;
    tags?: string[];
    typeMessagem: number;
    message: string;
    dataCriacao: string;
    qtdeAvaliacao: number;
    notaAvaliacao: number;
    descriptionImpacto: string;
    qtdeRelevancia: number;
    notaRelevancia: number;
    descriptionRelevancia: string;
    curtidas: number;
    stepProblem: number;
    stepActive: number;
    onSelectedStep: (step: number) => void;
    /**
     * @prop {object} trilhaData: A listagem de Trilhas no Select [{label: 'trilha1', value: 'id1'}]
     */
    trilhaData?: any;
    /**
     * @prop {string} trilha: Descrição da Trilha Selecionada
     */
    trilha: string;
    /**
     * @prop {string} trilhaId: Id da Trilha Selecionada, que será usado para selecionar o select quando for editar
     */
    trilhaId?: any;
    isEditable?: boolean;
    /**
     * @prop {object} tagData: A listagem de Tags no Select [{label: 'TAG1', value: 'id1'}]
     */
    tagData?: any;
    children: React.ReactNode;
    onClickMessage: () => void;
}
/**
 *
 * @componente
 */
export default function BannerProblem(props: BannerProblemParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map