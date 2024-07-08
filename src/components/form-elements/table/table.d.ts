import { IColumn } from './parts/TableHead/tableHead'
import { DataRow } from './parts/TableBody/tableBody'

export interface ITable {
    columns: IColumn[];
    data: DataRow[];
    isLoading?: boolean;
    lengthElSkeleton?: number
}