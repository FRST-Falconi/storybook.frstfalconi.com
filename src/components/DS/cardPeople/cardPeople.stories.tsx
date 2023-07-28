import React from 'react'
import CardPeople from './index'

export default {
    title: 'DS/CardPeople',
    component: CardPeople
}

const Template = (args) => <CardPeople {...args} />

export const normal =  Template.bind({})
normal.args = {
    isChecked: false,
    style:{width:'290px'},
    userInfo: {
        id: 'd914dacb-d633-4744-9b0a-2b19c2e3f231',
        name: 'Bernardo Silva',
        avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
        email: 'nome@frstfalconi.com',
        area: 'Tecnologia da informação',
        position: 'Gerente',
    },
    labels: {
        area: 'Área',
        position: 'Cargo'
    },
    onChecked: (e) => console.log('onChecked', e),
    hiddenCheckbox: false
}

export const noCheckBox = Template.bind({})
noCheckBox.args = {
    style:{width:'290px'},
    userInfo: {
        id: 'd914dacb-d633-4744-9b0a-2b19c2e3f231',
        name: 'Bernardo Silva',
        avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
        email: 'nome@frstfalconi.com',
        area: 'Tecnologia da informação',
        position: 'Gerente',
    },
    labels: {
        area: 'Área',
        position: 'Cargo'
    },
    hiddenCheckbox: true
}