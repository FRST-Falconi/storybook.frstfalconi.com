import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { IColumnRow, ITableActions } from './tableActions'
import { useEffect, useState } from 'react'
import Table from '../table'
import { CollaboratorAvatar, DateLimit, EmptyState, TagStatus } from './parts'
import {
  WrapperCellButtonInbox,
  ButtonActionInbox,
  WrapperEmptyState,
  WrapperEmptyStateCaseButton,
  WrapperButtonEmpty,
  ButtonEmpty
} from './tableActionsStyle'
import { AddIcon, BallonChatgRondedTips } from '@shared/icons'

export default function TableActions({
  columns,
  data,
  isLoading,
  lengthElSkeleton = 3,
  onPressAvatar,
  labelStatus,
  labelTextVisitProfile,
  buttonBottomCreateAction,
  showButtonInbox,
  emptyState,
  expandItemId,
  hiddeExpandItemId,
  customImageEmptyState
}: ITableActions) {
  const [adaptedColumns, setAdaptedColumns] = useState([])
  const [adaptedData, setAdaptedData] = useState([])

  useEffect(() => {
    const newColumns = columns.map((column: IColumnRow) => {
        return { 
          title: column?.title, 
          width: column?.width, 
          align: column?.alignHeader 
        }
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
          align={columns?.[0]?.alignContent}
        />,
        // @ts-ignore
        <p style={{ color: '#222', textAlign: columns?.[1]?.alignContent }}>{item.value[1]}</p>,
        <DateLimit date={item?.value?.[2]} status={item?.value?.[3]} />,
        <TagStatus status={item?.value?.[3]} label={labelStatus?.[item?.value?.[3]]} />,
        item?.actionButtonInbox ? (
          <WrapperCellButtonInbox>
            <ButtonActionInbox
              enable={item?.enableButtonInbox}
              onClick={() => item?.enableButtonInbox ? item?.actionButtonInbox?.(item?.value?.[0]?.id) : {}}
            >
              <BallonChatgRondedTips />
            </ButtonActionInbox>
          </WrapperCellButtonInbox>
        ) : (
          <></>
        )
      ],
      showButtonExpanded: item.showButtonExpanded,
      children: item.children
    }))

    setAdaptedData(newData)
  }, [data])

  const customStyleBorderTable =
    buttonBottomCreateAction?.mode == 'button' || buttonBottomCreateAction?.mode == 'children' || data?.length == 0
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
        expandItemId={expandItemId}
        hiddeExpandItemId={hiddeExpandItemId}
      />
      {!isLoading && data?.length == 0 && <EmptyState emptyState={emptyState} customImage={customImageEmptyState} />}
      {!isLoading && data?.length !== 0 && buttonBottomCreateAction?.mode && buttonBottomCreateAction?.mode != 'hidden' && (
        <WrapperEmptyState>
          {buttonBottomCreateAction?.mode == 'button' && (
            <WrapperEmptyStateCaseButton>
              <WrapperButtonEmpty>
                <ButtonEmpty onClick={() => buttonBottomCreateAction?.handleClickButtonCreate?.()}>
                  {/** @ts-ignore */}
                  <AddIcon fill={FRSTTheme?.colors?.primary1} width={'14'} height={'14'} />
                  {buttonBottomCreateAction?.labelButtonAddAction}
                </ButtonEmpty>
              </WrapperButtonEmpty>
            </WrapperEmptyStateCaseButton>
          )}

          {buttonBottomCreateAction?.mode == 'children' && <div>{buttonBottomCreateAction?.children}</div>}
        </WrapperEmptyState>
      )}
    </ThemeProvider>
  )
}
