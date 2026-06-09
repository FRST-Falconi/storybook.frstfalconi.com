export interface User {
  user_uuid: string
  name: string
  avatar?: string
  author?: boolean
}
type AccessLevel = "private" | "protected";
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
  accessLevel?: AccessLevel
  configColor?: string
}