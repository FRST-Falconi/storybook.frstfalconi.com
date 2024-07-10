import { IColumn } from './parts/TableHead/tableHead'
import { IDataRow } from './parts/TableBody/tableBody'

export interface ITable {
    columns: IColumn[];
    data: IDataRow[];
    isLoading?: boolean;
    lengthElSkeleton?: number
}