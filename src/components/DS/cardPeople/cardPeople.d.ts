
export interface ICardPeople {
    userInfo: {
        id: string,
        name: string,
        avatar: string,
        email: string,
        area: string,
        position: string,
    }
    labels?: {
        area: string,
        position: string
    },
}

export interface IPeopleContainer {
    isChecked: boolean
}