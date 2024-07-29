import { ITagStatus } from './tagStatus'
import { ContainerTag, WrapperTag, CicleTag } from './tagStatusStyle'

export default function TableBody({ status, label }: ITagStatus) {
  return (
    <ContainerTag>
      <WrapperTag status={status}>
        <CicleTag status={status} />
        {label}
      </WrapperTag>
    </ContainerTag>
  )
}
