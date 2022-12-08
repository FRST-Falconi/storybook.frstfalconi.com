/// <reference types="react" />
interface INotificationCard {
    notificationAvatar: string;
    notificationDescription: string;
    isNewNotification: boolean;
    notificationDate: string;
    textNew: string;
    handleClick: () => void;
}
export default function NotificationCard(props: INotificationCard): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map