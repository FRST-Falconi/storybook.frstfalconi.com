import { IDateLimit } from './dateLimit'
import { WrapperDateLimit } from './dateLimitStyle'

export default function DateLimit({ date, status }: IDateLimit) {
  return <WrapperDateLimit status={status}>{date}</WrapperDateLimit>
}
