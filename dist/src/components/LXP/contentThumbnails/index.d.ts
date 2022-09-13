/// <reference types="react" />
import '../../../shared/global.css';
import { IContentThumbnails } from './contentThumbnails';
export declare enum typeContent {
    Content = 0,
    Video = 1,
    PodCast = 2,
    QuizSucessError = 3,
    Quiz = 4,
    Certificate = 5
}
export default function ContentThumbnails({ label, contentList, variant, src, disabled, icon, onChange, handleClick, title }: IContentThumbnails): JSX.Element;
//# sourceMappingURL=index.d.ts.map