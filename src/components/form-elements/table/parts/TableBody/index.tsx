import { Fragment } from 'react'
import { IDataRow, ITableBody } from './tableBody'
import {
  WrapperDataRow,
  TableDataRowItem,
  TableDataChildrenItem,
  WrapperExpandButton,
  TableDataChildrenControlExpand
} from './tableStyle'
import { ArrrowExpandDropdown } from '@shared/icons'

export default function TableBody({ data, expandedRows, handleExpandClick, columns }: ITableBody) {
  return (
    <tbody>
      {data.map((row: IDataRow, index: number) => (
        <Fragment key={row.id}>
          <TableRow
            row={row}
            index={index}
            columns={columns}
            handleExpandClick={handleExpandClick}
            isExpanded={!!expandedRows?.[row?.id]}
          />
          <ExpandableRow index={index} row={row} columns={columns} isExpanded={!!expandedRows?.[row?.id]} />
        </Fragment>
      ))}
    </tbody>
  )
}

function TableRow({ row, index, handleExpandClick, isExpanded, columns }) {
  return (
    <WrapperDataRow index={index}>
      {row.value.map((cell, index) => (
        <TableDataRowItem key={index}>{cell}</TableDataRowItem>
      ))}
      {row.showButtonExpanded ? (
        <td>
          <ExpandButton isExpanded={isExpanded} onClick={() => handleExpandClick(row.id)} />
        </td>
      ) : (
        <td />
      )}
    </WrapperDataRow>
  )
}

function ExpandableRow({ index, row, columns, isExpanded }) {
  return (
    <TableDataChildrenItem index={index}>
      <td colSpan={columns.length + 1}>
        <TableDataChildrenControlExpand index={index} isExpanded={isExpanded}>
          {row.children}
        </TableDataChildrenControlExpand>
      </td>
    </TableDataChildrenItem>
  )
}

function ExpandButton({ isExpanded, onClick }) {
  return (
    <WrapperExpandButton onClick={onClick} isExpanded={isExpanded}>
      <ArrrowExpandDropdown />
    </WrapperExpandButton>
  )
}
