import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { ContainerTable, WrapperTable, TableHtml, WrapperLoading, SkeletonHeader, SkeletonRow } from './tableStyle'
import { useEffect, useState } from 'react'
import TableHead from './parts/TableHead'
import { TableBody } from './parts'
import { ITable } from './table'

export default function Table({
  columns,
  data,
  isLoading,
  lengthElSkeleton = 5,
  containerStyles,
  expandItemId,
  hiddeExpandItemId
}: ITable) {
  const [expandedRows, setExpandedRows] = useState([])

  useEffect(() => {
    if (expandItemId !== -1) {
      setExpandedRows((prevExpandedRows) => ({
        ...prevExpandedRows,
        [expandItemId]: true
      }))
    }
  }, [expandItemId])

  useEffect(() => {
    if (hiddeExpandItemId !== -1) {
      setExpandedRows((prevExpandedRows) => ({
        ...prevExpandedRows,
        [hiddeExpandItemId]: false
      }))
    }
  }, [hiddeExpandItemId])

  const handleExpandClick = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <ContainerTable style={containerStyles ? containerStyles : {}}>
        {isLoading ? (
          <WrapperLoading>
            <SkeletonHeader variant="rectangular" />
            {Array.from({ length: lengthElSkeleton }).map((_, index) => (
              <SkeletonRow key={index} variant="rectangular" isAlter={index % 2 === 0} />
            ))}
          </WrapperLoading>
        ) : (
          <WrapperTable>
            <TableHtml>
              <TableHead columns={columns} />
              <TableBody
                columns={columns}
                data={data}
                expandedRows={expandedRows}
                handleExpandClick={handleExpandClick}
                expandItemId={expandItemId}
                hiddeExpandItemId={hiddeExpandItemId}
              />
            </TableHtml>
          </WrapperTable>
        )}
      </ContainerTable>
    </ThemeProvider>
  )
}
