import { ITableHead } from './tableHead'
import { THeadColumn, THColumnTitleItem, TRowColumn } from './tableStyle'

export default function TableHead({ columns }: ITableHead) {
  return (
    <THeadColumn>
      <TRowColumn>
        {columns.map((column, index) => (
          <THColumnTitleItem
            key={index}
            style={{
              width: column.width,
              textAlign: column.align
            }}
          >
            {column.title}
          </THColumnTitleItem>
        ))}
        <th />
      </TRowColumn>
    </THeadColumn>
  )
}
