/// <reference types="react" />
interface calendarProps {
    loading: boolean;
    short: boolean;
    trails: Array<any>;
    calendarEvents: Array<any>;
    activeEvent?: string;
    joinEventClick?: () => void;
}
export default function CalendarCard(props: calendarProps): JSX.Element;
export {};
