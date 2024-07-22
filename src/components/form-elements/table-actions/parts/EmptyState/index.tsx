import { IEmptyState } from './emptyState'
import { WrapperEmptyState, ImageEmptyState, LabelEmptyState, ButtonCreateAction } from './emptyStateStyle'
import imgEmptyState from './../../../../../../public/img/Nonotification.png'

export default function EmptyState({ emptyState, customImage }: IEmptyState) {
  const imgEmpty = imgEmptyState
  return (
    <WrapperEmptyState
      style={{
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        border: '1.5px solid #ebebeb',
        borderTopWidth: '0px'
      }}
    >
      <ImageEmptyState src={customImage ? customImage : imgEmpty} alt="Empty" />
      <LabelEmptyState>
        {emptyState?.labels &&
          emptyState?.labels?.map((label?: string) => {
            return <p>{label}</p>
          })}
      </LabelEmptyState>
      <ButtonCreateAction onClick={() => emptyState?.handleClickButtonCreate?.()}>
        {emptyState?.labelButtonCreate}
      </ButtonCreateAction>
    </WrapperEmptyState>
  )
}
