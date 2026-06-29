/// <reference types="react" />
interface INotificationCard {
    notificationAvatar: string;
    notificationDescription: string;
    isNewNotification: boolean;
    notificationDate: string;
    textVisitProfile?: string;
    notificationHour: string;
    textNew: string;
    style?: React.CSSProperties;
    handleClick: () => void;
    handleClickDelete: () => Promise<void>;
    onClickUserInfo?: () => void;
}
export default function NotificationCard(props: INotificationCard): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map