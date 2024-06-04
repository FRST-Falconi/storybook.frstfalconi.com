import React from 'react'
import CardUser from './index'

export default {
    title: 'DS/CardUser',
    component: CardUser
}

const Template = (args) => <CardUser {...args} />

export const normal =  Template.bind({})
normal.args = {
    style:{width:'192px'},
    handleLinkProfile: () => alert("ir para o perfil?"),
    userInfo:{
        id: '4f99b5b0-ab24-11ee-8d9f-29bb2919a327',
        avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
        name:'Giovanna Mendes',
        profession: 'Tecnologia da Informação',
        education: 'Estudante/Universitário(a)',
        activeSice: 'Ativo desde :',
        date:"20/10/23"
    }
}

export const versionButtonInvite =  Template.bind({})
versionButtonInvite.args = {
    style:{width:'192px'},
    handleLinkProfile: () => alert("ir para o perfil?"),
    hasButton: true,
    handleInvite: () => alert('enviar convite'),
    handleRemove: () => alert('deletar recomendação'),
    labelButton: 'Convidar',
    userInfo:{
        id: '4f99b5b0-ab24-11ee-8d9f-29bb2919a327',
        avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
        name:'Giovanna Mendes',
        profession: 'Tecnologia da Informação',
        education: 'Estudante/Universitário(a)',
    }
}

