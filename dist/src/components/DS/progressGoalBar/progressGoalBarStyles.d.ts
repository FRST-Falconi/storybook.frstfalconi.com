import { CurrentVariantValue } from './useProgressGoalBar';
interface ProgressBarColorProps {
    width: number;
    isGoalExceeded: boolean;
    hasRegressed: boolean;
    isGoalIncrese: boolean;
    isGoalDecreased: boolean;
    stabileze: boolean;
}
export declare const WrapperProgressGoalBar: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ProgressGoalBarContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StartIndicator: import("styled-components").StyledComponent<"div", any, {
    position: number;
}, never>;
export declare const CurrentIndicator: import("styled-components").StyledComponent<"div", any, {
    position: number;
    status: CurrentVariantValue;
}, never>;
export declare const EndIndicator: import("styled-components").StyledComponent<"div", any, {
    position: number;
    isGoalReached: boolean;
    isGoalExceeded: boolean;
}, never>;
export declare const ProgressBarColor: import("styled-components").StyledComponent<"div", any, ProgressBarColorProps, never>;
export declare const TextUP: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const IndicatorText: import("styled-components").StyledComponent<"div", any, {
    position: number;
    noResult?: boolean;
    isGoalExceeded?: boolean;
    isGoalReached?: boolean;
    resultEvolved?: boolean;
    start?: number;
    stabilize?: boolean;
}, never>;
export declare const IndicatorTextInit: import("styled-components").StyledComponent<"div", any, {
    position: number;
    noResult?: boolean;
    isGoalExceeded?: boolean;
    isGoalReached?: boolean;
    resultEvolved?: boolean;
    start?: number;
    stabilize?: boolean;
}, never>;
export declare const IndicatorTextCurrent: import("styled-components").StyledComponent<"div", any, {
    position: number;
    noGoal: boolean;
    noResult: boolean;
}, never>;
export declare const IndicatorStart: import("styled-components").StyledComponent<"div", any, {
    position: number;
}, never>;
export declare const Number: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const TypeProgressText: import("styled-components").StyledComponent<"p", any, {}, never>;
export {};
//# sourceMappingURL=progressGoalBarStyles.d.ts.map