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
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Name",
    userEmail: "email@dominio.com",
    userStatus: "normal",
    userArea: "Area",
    userPosition: "Cargo",
    licenses: [],
    editAction: () => { alert('Edit') },
}

export const complete = Template.bind({})
complete.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Name",
    userEmail: "email@dominio.com",
    userStatus: "complete",
    userArea: "Area",
    userPosition: "Cargo",
    licenses: [],
    editAction: () => { alert('Edit') },
}

export const enrolled = Template.bind({})
enrolled.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Name",
    userEmail: "email@dominio.com",
    userStatus: "enrolled",
    userArea: "Area",
    userPosition: "Cargo",
    licenses: [],
    editAction: () => { alert('Edit') },
}

export const defined = Template.bind({})
defined.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Name",
    userEmail: "email@dominio.com",
    userStatus: "defined",
    userArea: "Area",
    userPosition: "Cargo",
    licenses: [],
    editAction: () => { alert('Edit') },
}

export const error = Template.bind({})
error.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Name",
    userEmail: "email@dominio.com",
    userStatus: "error",
    userArea: "Area",
    userPosition: "Cargo",
    licenses: [],
    editAction: () => { alert('Edit') },
}
