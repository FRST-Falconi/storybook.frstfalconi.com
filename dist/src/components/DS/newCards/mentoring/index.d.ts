/// <reference types="react" />
interface mentoringCardProps {
    avatar: string;
    first_name: string;
    last_name: string;
    position: string;
    title: string;
    subtitle1?: Array<string>;
    happenedIn: string;
    date: string;
    link_recording: string;
    handleAvatarClick: () => void;
    handleRecordLink: (link: string) => void;
}
export default function MentoringCard({ avatar, first_name, last_name, position, title, subtitle1, happenedIn, date, link_recording, handleAvatarClick, handleRecordLink }: mentoringCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map