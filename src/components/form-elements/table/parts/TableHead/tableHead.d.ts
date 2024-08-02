
type TextAlign = 'center' | 'left' | 'right';

export interface IColumn {
  title: string;
  width: string;
  align?: TextAlign;
  alignContent?: TextAlign;
}

export interface ITableHead {
  columns: IColumn[];
  isLoading?: boolean;
}
