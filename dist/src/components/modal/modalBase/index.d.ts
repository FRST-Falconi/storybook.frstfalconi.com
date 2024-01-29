import { ReactNode } from 'react';
interface ModalBaseProps {
    open: boolean;
    recommendationId?: string;
    title?: string;
    timeBegin: number;
    language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es';
    handleClose?: () => void;
    handleChangeRating?: (recommendationId: string, rating: number) => void;
    showRating?: boolean;
    rating?: number;
    ratingDescription?: string;
    children: ReactNode;
}
export default function ModalBase(props: ModalBaseProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map