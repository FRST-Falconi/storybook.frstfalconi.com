/// <reference types="react" />
interface ObjItemDesafio {
    title: string;
    count: number;
    percentage: string;
    title_en?: string;
    title_es?: string;
}
interface ObjQuantidadeDesafio {
    definicao: ObjItemDesafio;
    hipoteses: ObjItemDesafio;
    testes: ObjItemDesafio;
    resultados: ObjItemDesafio;
    proximosPassos: ObjItemDesafio;
    finalizados: ObjItemDesafio;
    languagem?: string;
}
export default function QuantidadeDesafios({ definicao, hipoteses, testes, resultados, proximosPassos, finalizados, languagem }: ObjQuantidadeDesafio): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map