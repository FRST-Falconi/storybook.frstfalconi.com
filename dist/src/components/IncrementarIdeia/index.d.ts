/// <reference types="react" />
interface PropsIcrementarIdeia {
    user: 'userAutor' | 'user';
    textPlaceholderGestor: string;
    textPlaceholderAluno: string;
    imgComentario?: string;
    limitTexto?: number;
    txtError: string;
    hasEmoji: boolean;
    onChange: (e: any) => void;
    value?: string;
    styles: React.CSSProperties;
}
export default function IcrementarIdeia(props: PropsIcrementarIdeia): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map