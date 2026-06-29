/// <reference types="react" />
export declare enum CurrentVariant {
    Normal = "Normal",
    Warning = "Warning",
    Star = "star"
}
export type CurrentVariantValue = (typeof CurrentVariant)[keyof typeof CurrentVariant];
export declare const useProgressGoalBar: ({ start, current, goal }: {
    start: any;
    current: any;
    goal: any;
}) => {
    progressPercentage: number;
    currentValue: any;
    endValue: any;
    isGoalReached: boolean;
    isGoalExceeded: boolean;
    isNoGoal: boolean;
    positions: {
        start: number;
        current: number;
        goal: number;
        barRef: string;
        currentVariant: CurrentVariant;
        message: import("react").JSX.Element;
        currentTextInit: import("react").JSX.Element;
        TextoGoalDefault: import("react").JSX.Element;
        currenText?: undefined;
        stabilizeExceedingText?: undefined;
        textGoal?: undefined;
        bar?: undefined;
    } | {
        start: number;
        current: number;
        goal: number;
        barRef: string;
        currentVariant: CurrentVariant;
        message: import("react").JSX.Element;
        currenText: import("react").JSX.Element;
        currentTextInit: import("react").JSX.Element;
        TextoGoalDefault: import("react").JSX.Element;
        stabilizeExceedingText?: undefined;
        textGoal?: undefined;
        bar?: undefined;
    } | {
        start: number;
        current: number;
        goal: number;
        barRef: string;
        currentVariant: CurrentVariant;
        message: import("react").JSX.Element;
        currenText: import("react").JSX.Element;
        stabilizeExceedingText: import("react").JSX.Element;
        currentTextInit?: undefined;
        TextoGoalDefault?: undefined;
        textGoal?: undefined;
        bar?: undefined;
    } | {
        start: number;
        current: number;
        goal: number;
        barRef: string;
        currentVariant: CurrentVariant;
        message: import("react").JSX.Element;
        currentTextInit: import("react").JSX.Element;
        textGoal: import("react").JSX.Element;
        TextoGoalDefault?: undefined;
        currenText?: undefined;
        stabilizeExceedingText?: undefined;
        bar?: undefined;
    } | {
        start: number;
        current: number;
        goal: number;
        barRef: string;
        currentVariant: CurrentVariant;
        message: import("react").JSX.Element;
        currenText: import("react").JSX.Element;
        TextoGoalDefault: import("react").JSX.Element;
        currentTextInit?: undefined;
        stabilizeExceedingText?: undefined;
        textGoal?: undefined;
        bar?: undefined;
    } | {
        start: number;
        current: number;
        goal: number;
        bar: string;
        currentVariant: CurrentVariant;
        message: import("react").JSX.Element;
        currenText: import("react").JSX.Element;
        TextoGoalDefault: import("react").JSX.Element;
        barRef?: undefined;
        currentTextInit?: undefined;
        stabilizeExceedingText?: undefined;
        textGoal?: undefined;
    };
    noGoal: boolean;
    noResult: boolean;
    resultEvolved: any;
    stabilizeExceeding: boolean;
    stabilizeDecreased: boolean;
    stabilize: boolean;
    isGoalDecreased: boolean;
    isGoalIncrease: boolean;
};
//# sourceMappingURL=useProgressGoalBar.d.ts.map