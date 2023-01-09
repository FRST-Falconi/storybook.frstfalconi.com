import React from "react"

export interface ParticipantCardI {
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
        remove: 'Remover',
        area: 'Área',
        position: 'Cargo',
    },

    handleSendInvitation?: (id: any) => void;
    handleClickRemove?: (id: any) => void;
}