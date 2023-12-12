
export interface User {
  uuid: string
  name: string
  avatar: string
  subTitle: string
}
export interface MentionProps
  extends Readonly<{
    top:string;
    onSelect: (user: User) => void
    inputSearch: string
  }> { }

  
export interface IInputComment {
  placeholder?: string,
  value?: any,
  onChange?: (value:string) => void,
  remain?: number,
  limit?: number,
  disabled?: boolean,
  className: string,
  showCharacterCounter: boolean,
  IDInput: string,
  styles: any,
}
