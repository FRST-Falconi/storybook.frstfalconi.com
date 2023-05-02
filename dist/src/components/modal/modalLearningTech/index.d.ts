/// <reference types="react" />
type enumTypeButton = 'primary' | 'secondary' | 'link';
interface ModalLearningTechProps {
    open: boolean;
    title?: string;
    confirmationButton?: string;
    cancelButton?: string;
    /**
   * @prop {number} tipeButton: Tipos de botão (primary, secondary, link)
    */
    typeButtonConfirmation?: enumTypeButton;
    language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es';
    children: React.ReactNode;
    handleClose: () => void;
    handleConfirmation: () => void;
    style?: React.CSSProperties;
}
export default function ModalLearningTech(props: ModalLearningTechProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map