/// <reference types="react" />
interface INotificationCard {
    notificationAvatar: string;
    notificationDescription: string;
    isNewNotification: boolean;
    notificationDate: string;
    textNew: string;
    style?: React.CSSProperties;
    handleClick: () => void;
}
export default function NotificationCard(props: INotificationCard): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map