/// <reference types="react" />
import '../../../shared/global.css';
interface objThumbnails {
    imgThumbnails?: any;
    titleThumbnail?: string;
    descpThumbnail?: string;
    handleFunctionThumbnail?: () => void;
}
interface ParticipantThumbnails {
    listThumbnails: Array<objThumbnails>;
}
export default function ParticipantThumbnails({ listThumbnails }: ParticipantThumbnails): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map