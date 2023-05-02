/// <reference types="react" />
interface ModalVideoProps {
    open: boolean;
    recommendationId?: string;
    title?: string;
    nameVideo: string;
    videoUrl: string;
    timeBegin: number;
    language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es';
    handleClose: () => void;
    handleChangeRating?: (recommendationId: string, rating: number) => void;
    showRating?: boolean;
    rating?: number;
    ratingDescription?: string;
    style?: React.CSSProperties;
}
export default function ModalVideo(props: ModalVideoProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map