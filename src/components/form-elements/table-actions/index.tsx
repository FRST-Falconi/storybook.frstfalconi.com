import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { ITableActions } from './tableActions'
import { useEffect, useState } from 'react'
import Table from '../table'
import { CollaboratorAvatar, DateLimit, TagStatus } from './parts'
import {
  ButtonActionInbox,
  WrapperEmptyState,
  WrapperEmptyStateCaseButton,
  WrapperButtonEmpty,
  ButtonEmpty
} from './tableActionsStyle'
import { BallonChatgRondedTips } from '@shared/icons'

export default function TableActions({
  columns,
  data,
  isLoading,
  lengthElSkeleton = 3,
  onPressAvatar,
  labelStatus,
  labelTextVisitProfile,
  labelTextMessage,
  emptyStateCreateAction
}: ITableActions) {
  const [adaptedColumns, setAdaptedColumns] = useState([])
  const [adaptedData, setAdaptedData] = useState([])

  useEffect(() => {
    const newColumns = columns.map((column, index) => {
      let width = '15%'
      let align = 'center'

      if (index === 1) {
        width = '40%'
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
          labelTextVisitProfile={labelTextVisitProfile}
        />,
        <p style={{ color: '#222' }}>{item.value[1]}</p>,
        item?.actionButtonInbox ? (
          <ButtonActionInbox onClick={() => item?.actionButtonInbox?.(item?.value?.[0]?.id)}>
            <BallonChatgRondedTips /> {labelTextMessage ? labelTextMessage : 'Mensagem'}
          </ButtonActionInbox>
        ) : (
          <></>
        ),
        <DateLimit date={item?.value?.[2]} status={item?.value?.[3]} />,
        <TagStatus status={item?.value?.[3]} label={labelStatus?.[item?.value?.[3]]} />
      ],
      showButtonExpanded: item.showButtonExpanded,
      children: item.children
    }))

    setAdaptedData(newData)
  }, [data])

  const customStyleBorderTable =
    emptyStateCreateAction?.mode == 'button' || emptyStateCreateAction?.mode == 'children'
      ? { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }
      : {}

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Table
        columns={adaptedColumns}
        data={adaptedData}
        isLoading={isLoading}
        lengthElSkeleton={lengthElSkeleton}
        containerStyles={customStyleBorderTable}
      />
      {emptyStateCreateAction?.mode && emptyStateCreateAction?.mode != 'hidden' && (
        <WrapperEmptyState variant={emptyStateCreateAction?.mode}>
          {emptyStateCreateAction?.mode == 'button' && (
            <WrapperEmptyStateCaseButton>
              <div>{emptyStateCreateAction?.labelAction}</div>
              <WrapperButtonEmpty>
                <ButtonEmpty onClick={() => emptyStateCreateAction?.handleClickButtonCreate?.()}>
                  {emptyStateCreateAction?.labelButtonCreate}
                </ButtonEmpty>
              </WrapperButtonEmpty>
            </WrapperEmptyStateCaseButton>
          )}

          {emptyStateCreateAction?.mode == 'children' && <div>{emptyStateCreateAction?.children}</div>}
        </WrapperEmptyState>
      )}
    </ThemeProvider>
  )
}
