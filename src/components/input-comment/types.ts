
export interface User {
  "user-uuid": string
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
  IDInput?: string,
  styles?: any,
}
export const fakeUsers = {
  "users": [
    {
      "user-uuid": "1",
      "name": "João",
      "avatar": "https://avatars.githubusercontent.com/u/2254731?v=4",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "2",
      "name": "Maria",
      "avatar": "https://i.pravatar.cc/150?img=1",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "3",
      "name": "José",
      "avatar": "https://avatars.githubusercontent.com/u/2254731?v=4",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "4",
      "name": "Pedro",
      "avatar": "https://avatars.githubusercontent.com/u/2254731?v=4",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "5",
      "name": "Paulo",
      "avatar": "https://avatars.githubusercontent.com/u/2254731?v=4",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "6",
      "name": "Paula",
      "avatar": "https://i.pravatar.cc/150?img=1",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "7",
      "name": "Joana",
      "avatar": "https://avatars.githubusercontent.com/u/2254731?v=4",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "8",
      "name": "Joaquim",
      "avatar": "https://avatars.githubusercontent.com/u/2254731?v=4",
      "subTitle": "Falconi Road of Skills and Talent"
    },
    {
      "user-uuid": "9",
      "name": "Joaquina",
      "avatar": "https://i.pravatar.cc/150?img=1",
      "subTitle": "Falconi Road of Skills and Talent"
    }
  ]
}

