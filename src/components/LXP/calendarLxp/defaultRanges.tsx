import {
    addDays,
    endOfDay,
    startOfDay,
    startOfMonth,
    endOfMonth,
    addMonths,
    startOfWeek,
    endOfWeek,
    isSameDay,
    differenceInCalendarDays,
    startOfQuarter,
    endOfQuarter,
    addQuarters,
    startOfYear,
    endOfYear,
} from 'date-fns';

const defineds = {
    startOfWeek: startOfWeek(new Date()),
    endOfWeek: endOfWeek(new Date()),
    startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
    endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
    startOfToday: startOfDay(new Date()),
    endOfToday: endOfDay(new Date()),
    startOfYesterday: startOfDay(addDays(new Date(), -1)),
    endOfYesterday: endOfDay(addDays(new Date(), -1)),
    startOfMonth: startOfMonth(new Date()),
    endOfMonth: endOfMonth(new Date()),
    startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
    endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
    startOfQuarter: startOfQuarter(new Date()),
    endOfQuarter: endOfQuarter(new Date()),
    startOfLastQuarter: startOfQuarter(addQuarters(new Date(), -1)),
    endOfLastQuarter: endOfQuarter(addQuarters(new Date(), -1)),
    startOfYear: startOfYear(new Date()),
    endOfYear: endOfYear(new Date()),
};

const staticRangeHandler = {
    range: {},
    isSelected(range) {
        const definedRange = range;
        return (
            isSameDay(range.startDate, definedRange.startDate) &&
            isSameDay(range.endDate, definedRange.endDate)
        );
    },
};

export function createStaticRanges(ranges) {
    return ranges.map(range => ({ ...staticRangeHandler, ...range }));
}

export const defaultStaticRanges = createStaticRanges([

    {
        label: 'Esta semana',
        range: () => ({
            startDate: defineds.startOfWeek,
            endDate: defineds.endOfWeek,
        }),
    },
    {
        label: 'Semana passada',
        range: () => ({
            startDate: defineds.startOfLastWeek,
            endDate: defineds.endOfLastWeek,
        }),
    },
    {
        label: 'Mês passado',
        range: () => ({
            startDate: defineds.startOfLastMonth,
            endDate: defineds.endOfLastMonth,
        }),
    },
    {
        label: 'Este trimestre',
        range: () => ({
            startDate: defineds.startOfQuarter,
            endDate: defineds.endOfQuarter
        }),
    },
    {
        label: 'Trimestre passado',
        range: () => ({
            startDate: defineds.startOfLastQuarter,
            endDate: defineds.endOfLastQuarter
        }),
    },
    {
        label: 'Este ano',
        range: () => ({
            startDate: defineds.startOfYear,
            endDate: defineds.endOfYear
        }),
    },
]);
