/// <reference types="react" />
import '../../../shared/global.css';
import ParticipantThumbnails from '../participantThumbnails';
interface objThumbnails {
    imgThumbnails?: any;
    titleThumbnail?: string;
    descpThumbnail?: string;
    handleFunctionThumbnail?: () => void;
}
interface ParticipantThumbnails {
    listThumbnails: Array<objThumbnails>;
}
export default function ParticipantThumbnailsList({ listThumbnails }: ParticipantThumbnails): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map