import { useMemo } from 'react'
import { MESSAGES } from './progressTexts';

function toRange(start, end, current) {
    if (start === end) {
        return 25
    }

    let porcentagem = ((current - start) / (end - start)) * 100;

    if (porcentagem > 75) {
        return 75;
    } else if (porcentagem < 28) {
        return 28;
    } else {
        return porcentagem;
    }
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
    const noGoal = (start < goal && currentValue < start) ||  (start > goal && currentValue > start)
    const noResult = (start < goal && currentValue == start) || (start > goal && currentValue == start)
    const resultEvolved = (start < goal && currentValue > start && currentValue)
    const stabilizeExceeding = (start === goal && currentValue > start && currentValue > goal)
    const stabilize = (start === goal && currentValue === goal && start === currentValue)
    const stabilizeDecreased = (current < start && goal == start)
    const isGoalDecreased = start > goal && currentValue == goal
    const isGoalIncrease = start < goal && currentValue > start && currentValue == goal

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
                currentVariant: CurrentVariant?.Normal,
                message: MESSAGES?.reachedGoal,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }

        // reachedGoalDecreased
        if (start > goal && currentValue == goal)
            return {
                start: 0,
                current: 100,
                goal: 100,
                barRef: 'goal',
                currentVariant: CurrentVariant?.Normal,
                message: MESSAGES?.reachedGoal,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }

        // exceededTargetIncrease
        if (start < goal && currentValue > start && currentValue > goal)
            return {
                start: 0,
                current: 100,
                goal: toRange(start, goal, currentValue),
                barRef: 'current',
                currentVariant: CurrentVariant?.Star,
                message: MESSAGES?.progressExceeded,
                currenText: MESSAGES?.currentTextResult,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }


        //stabilizeExceeding
        if (start === goal && currentValue > start)
            return {
                start: 0,
                current: 100,
                goal: 14,
                barRef: 'current',
                currentVariant: CurrentVariant?.Star,
                message: MESSAGES?.progressExceeded,
                currenText: MESSAGES?.currentTextResult,
                stabilizeExceedingText: MESSAGES?.stabilizeExceedingText
            }

        //stabilize
        if (start === goal && currentValue === goal && start === currentValue)
            return {
                start: 0,
                current: 100,
                goal: 100,
                barRef: 'current',
                currentVariant: CurrentVariant?.Star,
                message: MESSAGES?.reachedGoal,
                currentTextInit: MESSAGES?.currentTextInit,
                textGoal: MESSAGES.textGoal
            }

        if (start === goal && currentValue < start)
            return {
                start: 100,
                current: 0,
                goal: 100,
                barRef: 'start',
                currentVariant: CurrentVariant?.Warning,
                message: MESSAGES?.progressNoGoal,
                currenText: MESSAGES?.currentTextResult,
                TextoGoalDefault: MESSAGES?.stabilizeExceedingText
            }



        // exceededTargetDecreased
        if (start > goal && currentValue < goal)
            return {
                start: 0,
                current: 100,
                goal: toRange(start, currentValue, goal),
                barRef: 'current',
                currentVariant: CurrentVariant?.Star,
                message: MESSAGES?.progressExceeded,
                currenText: MESSAGES?.currentTextResult,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }

        // GrowingWithoutReachingGoal
        if (start < goal && currentValue > start && currentValue < goal)
            return {
                start: 0,
                current: toRange(start, currentValue, goal),
                goal: 100,
                barRef: 'current',
                currentVariant: CurrentVariant?.Normal,
                message: MESSAGES?.progressImproved,
                currenText: MESSAGES?.currentTextResult,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }

        // DecreasingWithoutGoal
        if (start > goal && currentValue > goal && currentValue < start)
            return {
                start: 0,
                current: toRange(start, goal, currentValue),
                goal: 100,
                barRef: 'current',
                currentVariant: CurrentVariant?.Normal,
                message: MESSAGES?.progressImproved,
                currenText: MESSAGES?.currentTextResult,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }

        // noResultsIncrease
        if (start < goal && currentValue == start)
            return {
                start: 0,
                current: 0,
                goal: 100,
                barRef: 'current',
                currentVariant: CurrentVariant?.Warning,
                message: MESSAGES?.progressNoResults,
                currenText: MESSAGES?.currentTextInitAndResult,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }

        // noResultsDecreased
        if (start > goal && currentValue == start)
            return {
                start: 0,
                current: 0,
                goal: 100,
                bar: 'current',
                currentVariant: CurrentVariant?.Warning,
                message: MESSAGES?.progressNoResults,
                currenText: MESSAGES?.currentTextInitAndResult,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }

        // noGoalIncrease
        if (start < goal && currentValue < start)
            return {
                start: toRange(currentValue, goal, start),
                current: 0,
                goal: 100,
                barRef: 'start',
                currentVariant: CurrentVariant?.Warning,
                message: MESSAGES?.progressNoGoal,
                currenText: MESSAGES?.currentTextResult,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault

            }

        // noGoalDecreased
        if (start > goal && currentValue > start)
            return {
                start: toRange(currentValue, goal, start),
                current: 0,
                goal: 100,
                barRef: 'start',
                currentVariant: CurrentVariant?.Warning,
                message: MESSAGES?.progressNoGoal,
                currenText:  MESSAGES?.currentTextResult,
                currentTextInit: MESSAGES?.currentTextInit,
                TextoGoalDefault: MESSAGES?.TextoGoalDefault
            }
    }, [start, goal, currentValue])

    const isGoalExceeded = useMemo(() => positions?.currentVariant == CurrentVariant?.Star, [positions])

    return {
        progressPercentage,
        currentValue,
        endValue,
        isGoalReached,
        isGoalExceeded,
        isNoGoal,
        positions,
        noGoal,
        noResult,
        resultEvolved,
        stabilizeExceeding,
        stabilizeDecreased,
        stabilize,
        isGoalDecreased,
        isGoalIncrease
    }
}
