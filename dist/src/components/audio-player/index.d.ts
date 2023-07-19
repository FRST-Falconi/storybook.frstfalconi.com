/// <reference types="react" />
import '../../shared/global.css';
interface IAudioPlayer {
    audio: any;
    /**
     * @prop {number} startAt: o tempo em que o audio deve começar (em segundos)
    */
    startAt?: number;
    coverImage?: string;
    title?: string;
    description?: string;
    date?: string;
    longLoading?: boolean;
    /**
     * @prop {number} volume: valor do volume (minimo 0 - máximo 1)
    */
    volume?: number;
    onProgress?: (data: any) => void;
    onEnded?: () => void;
    exitSound?: number;
    style?: React.CSSProperties;
}
export default function AudioPlayer(props: IAudioPlayer): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map