import { useMemo } from 'react'
import { MESSAGES } from './progressTexts';

function toRange(start: number, middle: number, end: number): number {
    return ((middle - start) / (end - start)) * 100
}

export enum CurrentVariant {
    Normal = 'Normal',
    Warning = 'Warning',
    Star = 'star'
}
export type CurrentVariantValue = (typeof CurrentVariant)[keyof typeof CurrentVariant]

export const useProgressGoalBar = ({ start, current, goal }) => {
    const startValue = start < goal ? start : goal
    const endValue = start > goal ? start : goal
    const currentValue = current

    const isGoalReached = currentValue === goal
    const isNoGoal = currentValue === start
    const noResult = (start < goal && currentValue == start) ||  (start > goal && currentValue == start)

    // Cálculo do progresso
    const progressPercentage = useMemo(() => {
        let percentage: number

        if (start < goal) {
            percentage = ((currentValue - start) / (goal - start)) * 100
        } else {
            percentage = ((start - currentValue) / (start - goal)) * 100
        }

        return Math.min(Math.max(Math.abs(percentage), 0), 100)
    }, [currentValue, start, goal])


    const positions = useMemo(() => {
        // reachedGoalIncrease
        if (start < goal && currentValue > start && currentValue == goal)
            return {
                start: 0,
                current: 100,
                goal: 100,
                barRef: 'goal',
                currentVariant: CurrentVariant.Normal,
                message: MESSAGES.reachedGoal,
            }

        // reachedGoalDecreased
        if (start > goal && currentValue == goal)
            return {
                start: 0,
                current: 100,
                goal: 100,
                barRef: 'goal',
                currentVariant: CurrentVariant.Normal,
                message: MESSAGES.reachedGoal,
            }

        // exceededTargetIncrease
        if (start < goal && currentValue > start && currentValue > goal)
            return {
                start: 0,
                current: 100,
                goal: toRange(start, goal, currentValue),
                barRef: 'current',
                currentVariant: CurrentVariant.Star,
                message: MESSAGES.progressExceeded,
                currenText: MESSAGES.currentTextResult
            }

        // exceededTargetDecreased
        if (start > goal && currentValue < goal)
            return {
                start: 0,
                current: 100,
                goal: toRange(start, goal, currentValue),
                barRef: 'current',
                currentVariant: CurrentVariant.Star,
                message: MESSAGES.progressExceeded,
                currenText: MESSAGES.currentTextResult
            }

        // GrowingWithoutReachingGoal
        if (start < goal && currentValue > start && currentValue < goal)
            return {
                start: 0,
                current: toRange(start, currentValue, goal),
                goal: 100,
                barRef: 'current',
                currentVariant: CurrentVariant.Normal,
                message: MESSAGES.progressImproved,
                currenText: MESSAGES.currentTextResult
            }

        // DecreasingWithoutGoal
        if (start > goal && currentValue > goal && currentValue < start)
            return {
                start: 0,
                current: toRange(start, currentValue, goal),
                goal: 100,
                barRef: 'current',
                currentVariant: CurrentVariant.Normal,
                message: MESSAGES.progressImproved,
                currenText: MESSAGES.currentTextResult
            }

        // noResultsIncrease
        if (start < goal && currentValue == start)
            return {
                start: 0,
                current: 0,
                goal: 100,
                barRef: 'current',
                currentVariant: CurrentVariant.Warning,
                message: MESSAGES.progressNoResults,
                currenText: MESSAGES.currentTextInitAndResult
            }

        // noResultsDecreased
        if (start > goal && currentValue == start)
            return {
                start: 0,
                current: 0,
                goal: 100,
                bar: 'current',
                currentVariant: CurrentVariant.Warning,
                message: MESSAGES.progressNoResults,
                currenText: MESSAGES.currentTextInitAndResult
            }

        // noGoalIncrease
        if (start < goal && currentValue < start)
            return {
                start: toRange(currentValue, start, goal),
                current: 0,
                goal: 100,
                barRef: 'start',
                currentVariant: CurrentVariant.Warning,
                message: MESSAGES.progressNoGoal,
                currenText: MESSAGES.currentTextResult
            }

        // noGoalDecreased
        if (start > goal && currentValue > start)
            return {
                start: toRange(currentValue, start, goal),
                current: 0,
                goal: 100,
                barRef: 'start',
                currentVariant: CurrentVariant.Warning,
                message: MESSAGES.progressNoGoal,
                currenText:  MESSAGES.currentTextResult
            }
    }, [])

    const isGoalExceeded = useMemo(() => positions.currentVariant == CurrentVariant.Star, [positions])

    return {
        progressPercentage,
        currentValue,
        endValue,
        isGoalReached,
        isGoalExceeded,
        isNoGoal,
        positions,
        noResult
    }
}
