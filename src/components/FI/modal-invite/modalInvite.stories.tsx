import React from 'react'

import ModalInvite from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/ModalInvite',
    component: ModalInvite,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ModalInvite {...args} />

export const modalMultInvite = Template.bind({})
modalMultInvite.args = {
    isOpenModal: true,
    isInviteMultiple: true,
    statusSend: 'none',

    onClickInvite: (e) => console.log('Send Invite', e),

    labels: {
        title: 'Quem você gostaria de convidar para dar ideias?',
        description: 'Convide pessoas para contribuir com novas ideias e votar nas existentes. Você pode convidar sua liderança, pessoas da mesma área, pessoas de áreas diferentes ou até mesmo pessoas de fora da sua empresa. ',

        name: 'Nome',
        lastName: 'Sobrenome',
        email: 'e-mail',

        placeholderName: 'Escreva aqui',
        placeholderLastName: 'Escreva aqui',
        placeholderEmail: 'email@suaempresa.com',

        buttonAddMore: 'Adicionar outra pessoa',
        invite: 'Convidar',
        delete: 'Excluir pessoa',

        messageStatusSuccess: 'Seu convite foi enviado com sucesso',
        messageStatusFail: 'Não foi possivel enviar seu convite',
        messageStatusInfo: 'Info'
    }
}
