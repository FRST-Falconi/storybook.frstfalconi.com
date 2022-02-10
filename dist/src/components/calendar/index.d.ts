/// <reference types="react" />
interface Trail {
    id: string;
    moduleID: string;
    name: string;
    events: Array<any>;
    nextEvent?: any;
    joinEventAction?: () => void;
}
interface CalendarProps {
    loading: boolean;
    short: boolean;
    trails: Array<Trail>;
    showFullPageAction?: () => void;
}
/**
 * @param {CalendarProps} props
 */
export default function CalendarCard(props: CalendarProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map