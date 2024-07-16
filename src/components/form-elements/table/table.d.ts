import { IColumn } from './parts/TableHead/tableHead'
import { IDataRow } from './parts/TableBody/tableBody'
import React from 'react';

export interface ITable {
    columns: IColumn[];
    data: IDataRow[];
    isLoading?: boolean;
    lengthElSkeleton?: number;
    containerStyles?: React.CSSProperties
}