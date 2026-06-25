/// <reference types="react" />
interface peopleCardProps {
    avatar: string;
    name: string;
    area: string;
    position: string;
    showBtnProfile: boolean;
    showBtnInvite: boolean;
    showBtnMessage: boolean;
    handleClickProfile?: () => void;
    handleClickInvite?: () => void;
    handleClickMessage?: () => void;
}
export default function PeopleCard({ avatar, name, area, position, showBtnProfile, showBtnInvite, showBtnMessage, handleClickProfile, handleClickInvite, handleClickMessage }: peopleCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map