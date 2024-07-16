import React from "react"

declare type modeEmptyState = 'hidden' | 'button' | 'children';

export interface IDataRow {
    id: number;
    value: string[] | any;
    showButtonExpanded?: boolean;
    actionButtonInbox?: (id: string) => void
    children?: React.ReactNode;
}

export interface ITableActions {
    columns: string[];
    data: IDataRow[];
    isLoading?: boolean;
    lengthElSkeleton?: number;
    onPressAvatar?: (e: string) => void
    labelStatus: {
        completed?: string,
        not_completed?: string,
        in_progress?: string,
        deprioritized?: string
    },
    labelTextVisitProfile?: string,
    labelTextMessage?: string,
    emptyStateCreateAction?: {
        mode: modeEmptyState,
        handleClickButtonCreate: (e?: any) => void,
        children: React.ReactNode,
        labelButtonCreate: string,
        labelAction: string
    },
}