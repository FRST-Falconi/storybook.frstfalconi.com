import React from 'react';
interface AvatarWithInfoParams {
    /**
     * @prop {string} fotoAvatar: Foto do perfil do usuario
     */
    fotoAvatar?: string;
    /**
     * @prop {string} nomeCompleto: nome completo do usuario
     */
    nomeCompleto: string;
    /**
     * @prop {string} cargo: Cargo do usuario
     */
    cargo: string;
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
    onClick?: () => void;
}
/**
 *
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
export default function AvatarWithInfo(props: AvatarWithInfoParams): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map