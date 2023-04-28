/// <reference types="react" />
interface ObjItemDesafio {
    title: string;
    count: number;
    percentage: string;
}
interface ObjQuantidadeDesafio {
    definicao: ObjItemDesafio;
    hipoteses: ObjItemDesafio;
    testes: ObjItemDesafio;
    resultados: ObjItemDesafio;
    proximosPassos: ObjItemDesafio;
    finalizados: ObjItemDesafio;
}
export default function QuantidadeDesafios({ definicao, hipoteses, testes, resultados, proximosPassos, finalizados }: ObjQuantidadeDesafio): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map