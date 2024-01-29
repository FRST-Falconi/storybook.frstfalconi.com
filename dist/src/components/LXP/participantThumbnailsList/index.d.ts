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
    colorBackground?: string;
}
export default function ParticipantThumbnailsList({ listThumbnails, colorBackground }: ParticipantThumbnails): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map