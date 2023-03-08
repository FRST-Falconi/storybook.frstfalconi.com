/// <reference types="react" />
type notificationCard = {
    notificationAvatar: string;
    notificationDescription: string;
    isNewNotification: boolean;
    notificationDate: string;
    textNew: string;
    handleClick: () => void;
};
interface INotificationPopOver {
    notificationList?: Array<notificationCard>;
    textBack: string;
    textNotification: string;
    textMarkAllAsRead: string;
    textEmptyState: string;
    isOpen: boolean;
    anchor: any;
    isMobile: boolean;
    handleClickMarkRead: () => void;
    setOnAreaPopOver?: (e: any) => void;
    handleClickBack: () => void;
}
export default function NotificationPopOver(props: INotificationPopOver): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map