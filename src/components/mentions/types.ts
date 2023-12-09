
export interface User {
  uuid: string
  name: string
  avatar: string
  subTitle: string
}
export interface MentionProps
  extends Readonly<{
    top:string;
    users: User[]
    height: number,
    width: number,
    onSelect: (user: User) => void
    inputSearch?: string
  }> { }
