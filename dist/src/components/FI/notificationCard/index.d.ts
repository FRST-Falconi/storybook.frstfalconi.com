/// <reference types="react" />
interface INotificationCard {
    notificationAvatar: string;
    notificationDescription: string;
    isNewNotification: boolean;
    notificationDate: string;
    textVisitProfile?: string;
    textNew: string;
    style?: React.CSSProperties;
    handleClick: () => void;
    onClickUserInfo?: () => void;
}
export default function NotificationCard(props: INotificationCard): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map