import React from "react"

type enumStatusSend = 'success' | 'fail' | 'info' | 'none'

export interface IModalInvite {
    isOpenModal: boolean,
    isInviteMultiple?: boolean,
    statusSend?: enumStatusSend,

    onClickInvite?: (e) => void,

    labels?: {
        title?: string,
        description?: string,

        name?: string,
        lastName?: string,
        email?: string,

        placeholderName?: string,
        placeholderLastName?: string,
        placeholderEmail?: string,

        buttonAddMore?: string,
        invite?: string,
        delete?: string,

        messageStatusSuccess?: string,
        messageStatusFail?: string,
        messageStatusInfo?: string
    }
}