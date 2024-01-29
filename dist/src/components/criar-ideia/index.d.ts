/// <reference types="react" />
import '../../shared/global.css';
interface PropsCriarIdeia {
    textoCriar?: string;
    nomeUser?: string;
    nameEmpresa?: string;
    dateCriarIdeia?: string;
    textoDigitarIdeia?: string;
    valueMaxTexto?: number;
    textoValueMax?: string;
    onChange?: (e: any) => void;
    textCancelarButton?: string;
    textPublicarButton?: string;
    textOuButton?: string;
    txtError?: string;
    onClickButtonPublicar?: (e: any) => void;
    onClickCancelar?: (e: any) => void;
}
export default function CriarIdeia(props: PropsCriarIdeia): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map