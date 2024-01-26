
export interface Profile {
  role_name: string
  company_name: string
  avatar: string
}
export interface User {
  user_uuid: string
  name: string
  profile: Profile
}
export interface MentionProps
  extends Readonly<{
    top: string;
    onSelect: (user: User) => void
    users: User[]
  }> { }

export interface IInputComment {
  placeholder?: string,
  onChange?: (value: string) => void,
  limit?: number,
  disabled?: boolean,
  className?: string,
  showCharacterCounter: boolean,
  styles?: any,
  users: User[],
  onSendMentions: (mentions: string[]) => void
  onContentFormat: (content: string) => void
  onContentUnformat: (content: string) => void
  value?: string
  replyMentionedUser?: User
  group_uuid?: string;
  limitMessageExceeded: string;
  initialText?: string;
}

