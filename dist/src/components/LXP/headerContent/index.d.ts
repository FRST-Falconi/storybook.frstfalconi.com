/// <reference types="react" />
type typeHeader = 'inProgress' | 'recomendation';
interface HeaderContentParams {
    title?: string;
    description?: string;
    /**
    * @prop {string} bgImg: imagem de background do header
    */
    bgImg?: string;
    /**
    * @prop {typeHeader} typeOfHeader: Tipo de header para exibição ( inProgress: Para alunos que estão fazendo algum conteúdo. recomendation: Para alunos que não estão fazendo algum conteúdo ou para aqueles que atingiram de 85% a 100% do conteúdo assistido)
    */
    typeOfHeader: typeHeader;
    progresso?: number;
    channel?: string;
    listaRecomendacao?: any[];
    onClick: () => void;
}
export default function HeaderContent(props: HeaderContentParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map