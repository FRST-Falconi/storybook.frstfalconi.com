type notificationCard = {
    notificationAvatar: string;
    notificationDescription: string;
    isNewNotification: boolean;
    notificationDate: string;
    notificationHour?: string | null;
    id: string;
    textNew: string;
    handleClick: () => void;
    handleClickDelete: () => Promise<void>;
    onClickUserInfo?: () => void;
    textVisitProfile?: string;
};
interface INotificationPopOver {
    notificationList?: Array<notificationCard>;
    textBack: string;
    textNotification: string;
    textMarkAllAsRead: string;
    textDeleteAll: string;
    textEmptyState: string;
    isLoading: boolean;
    isOpen: boolean;
    anchor: any;
    isMobile: boolean;
    handleClickMarkRead: () => void;
    handleClickDeleteAll: () => void;
    setOnAreaPopOver?: (e: any) => void;
    handleClickBack: () => void;
}
export default function NotificationPopOver(props: INotificationPopOver): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map