import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { ITableActions } from './tableActions'
import { useEffect, useState } from 'react'
import Table from '../table'
import { CollaboratorAvatar, DateLimit, TagStatus } from './parts'

export default function TableActions({
  columns,
  data,
  isLoading,
  lengthElSkeleton = 3,
  onPressAvatar,
  labelStatus
}: ITableActions) {
  const [adaptedColumns, setAdaptedColumns] = useState([])
  const [adaptedData, setAdaptedData] = useState([])

  useEffect(() => {
    const newColumns = columns.map((column, index) => {
      let width = '20%'
      let align = 'center'

      if (index === 0) {
        width = '15%'
      }
      if (index === 1) {
        width = '45%'
        align = 'left'
      }

      return { title: column, width: width, align: align }
    })
    setAdaptedColumns(newColumns)
  }, [columns])

  useEffect(() => {
    const newData = data.map((item) => ({
      id: item.id,
      value: [
        <CollaboratorAvatar
          src={item?.value?.[0]?.id ? item?.value?.[0]?.src : item?.value?.[0]}
          onPressAvatar={onPressAvatar}
          uuid={item?.value?.[0]?.id}
        />,
        item.value[1],
        <DateLimit date={item?.value?.[2]} status={item?.value?.[3]} />,
        <TagStatus status={item?.value?.[3]} label={labelStatus?.[item?.value?.[3]]} />
      ],
      showButtonExpanded: item.showButtonExpanded,
      children: item.children
    }))

    setAdaptedData(newData)
  }, [data])

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Table columns={adaptedColumns} data={adaptedData} isLoading={isLoading} lengthElSkeleton={lengthElSkeleton} />
    </ThemeProvider>
  )
}
