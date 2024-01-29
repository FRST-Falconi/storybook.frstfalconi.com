/// <reference types="react" />
interface IAudioPlayer {
    audio: string;
    startAt?: number;
    coverImage?: string;
    title?: string;
    description?: string;
    date?: string;
    longLoading?: boolean;
    volume?: number;
    onProgress?: (data: any) => void;
    onEnded?: () => void;
    exitSound?: number;
    style?: React.CSSProperties;
}
export default function AudioPlayer(props: IAudioPlayer): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map