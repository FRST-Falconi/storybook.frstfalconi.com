import React from 'react'

import UserCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/User',
    component: UserCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserCard {...args} />

export const loading = Template.bind({})
loading.args = {
    loading: true,
    selected: true,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "string",
    userEmail: "string",
    userStatus: "complete",
    userImage: "string",
    userArea: "string",
    userPosition: "string",
    licenses: [],
    editAction: () => { alert('Edit') },
}