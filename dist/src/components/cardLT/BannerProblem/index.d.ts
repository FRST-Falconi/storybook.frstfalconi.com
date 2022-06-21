/// <reference types="react" />
interface BannerProblemParams {
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
<<<<<<< HEAD
    problema: string;
    cargo: string;
    nome: string;
    avatar: string;
    area: string;
    email: string;
    trilha: string;
    tags?: string[];
    typeMessagem: number;
    message: string;
    dataCriacao: string;
    qtdeAvaliacao: number;
    notaAvaliacao: number;
    qtdeRelevancia: number;
    notaRelevancia: number;
    curtidas: number;
    stepProblem: number;
    stepActive: number;
    onSelectedStep: (step: number) => void;
    isEditable?: boolean;
    children: React.ReactNode;
=======
>>>>>>> origin/modalLT
}
/**
 *
 * @componente
 */
export default function BannerProblem(props: BannerProblemParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map