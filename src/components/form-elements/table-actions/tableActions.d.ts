import React from "react"

export interface IDataRow {
    id: number;
    value: string[] | any;
    showButtonExpanded?: boolean;
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
    }
}