/// <reference types="react" />
declare type notificationCard = {
    notificationAvatar: string;
    notificationDescription: string;
    isNewNotification: boolean;
    isBottomCard: boolean;
    notificationDate: string;
    textNew: string;
    handleClick: () => void;
};
interface INotificationPopOver {
    notificationList: Array<notificationCard>;
    textNotification: string;
    textMarkAllAsRead: string;
    handleClickMarkRead: () => void;
}
export default function NotificationPopOver(props: INotificationPopOver): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map