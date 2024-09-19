export interface User {
  user_uuid: string
  name: string
  avatar?: string
  author?: boolean
}
export interface UsersChallengeProps {
  goalUsers?: User[]
  hasOnlyAutor?: boolean
  onUserNameClick?: (userId: string) => void
  onClickAvatar?: (userId: string) => void
  avatar?: string
  name?: string
  userId?: string
  areaName?: string
  companyName?: string
  createData?: string | number
  variant?: string
}