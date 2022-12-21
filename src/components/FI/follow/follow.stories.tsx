import React from 'react'

import Follow from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Follow',
    component: Follow,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Follow {...args} />

export const desafio = Template.bind({})
desafio.args = {
    textButtonFollow: 'Seguir',
    style: {margin: 300},
    followItemsChallenge:[
        {
            title: 'O desafio',
            isFollowing: false,
            handleChange: () => alert(`Alterado`)
        },
        {
            title: 'A pessoa',
            isFollowing: false,
            handleChange: () => alert(`Alterado`)
        },
        {
            title: 'Tag 1: Customer Success',
            isFollowing: false,
            handleChange: () => alert(`Alterado`)
        },
        {
            title: 'Tag 2: Experiência do usuário',
            isFollowing: false,
            handleChange: () => alert(`Alterado`)
        },
        {
            title: 'Tag 3: CSAT',
            isFollowing: false,
            handleChange: () => alert(`Alterado`)
        },
    ],
    doNotFollowChallenge: {
        title: 'Não quero ver isto',
        isFollowing: false,
        handleChange: () => alert(`Alterado`)
    }
}

export const post = Template.bind({})
post.args = {
    textButtonFollow: 'Seguir',
    style: {margin: 300},
    
    doNotFollowPostText: 'Não quero ver isto',
    handleDoNotFollowPostClick: () => alert(`Unfollow!`)
}