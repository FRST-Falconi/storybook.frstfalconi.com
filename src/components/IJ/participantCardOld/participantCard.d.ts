import React from "react"

type enumVariant = 'primary' | 'secondary' | 'tertiary'

export interface ParticipantCardI {
    variant?: enumVariant,
    onClickUserInfo?: () => void;
    textVisitProfile: string;
    userInfo: {
        id: string,
        name: string,
        avatar: string,
        email: string,
        area: string,
        position: string,
    }
    labels?: {
        sendInvitation: string,
        invitationSuccess: string,        
        remove: string,
        area: string,
        position: string,
        or?: string
    },
    successfullInvite ?: boolean
    style: React.CSSProperties
    handleSendInvitation?: (id: any) => void;
    handleClickRemove?: (id: any) => void;
    hidenRemoveBtn?: boolean;
}