import { IColumn } from "../TableHead/tableHead";

export interface IDataRow {
  id: string | number;
  value: React.ReactNode[];
  showButtonExpanded?: boolean,
  expanded?: boolean;
  setExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export interface ITableBody {
  data: IDataRow[];
  expandedRows: Number[];
  handleExpandClick: (e: number) => void;
  columns: IColumn[],
  expandItemId?: any
  hiddeExpandItemId?: any
}
