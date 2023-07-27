import React, { useEffect, useState } from 'react'
import CardPeople from './index'

export default {
    title: 'DS/CardPeople',
    component: CardPeople
}

const Template = (args) => <CardPeople {...args} />

export const normal =  Template.bind({})
normal.args = {
    isChecked: false,
    userInfo: {
        id: '',
        name: '',
        avatar: '',
        email: '',
        area: 'Tecnologia da informação',
        position: 'Gerente',
    },
    labels: {
        area: 'Área',
        position: 'Cargo'
    },
}