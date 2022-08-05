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
    userName: "Nome Sobrenome",
    userEmail: "email@dominio.com",
    userStatus: "normal",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: [],
    assessment: 'not-started',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [],
}

export const incomplete = Template.bind({})
incomplete.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Nome Sobrenome",
    userEmail: "email@dominio.com",
    userStatus: "incomplete",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: [],
    assessment: 'started',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [],
}

export const complete = Template.bind({})
complete.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Nome Sobrenome",
    userEmail: "email@dominio.com",
    userStatus: "complete",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: [],
    assessment: 'started',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [],
}

export const enrolled = Template.bind({})
enrolled.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Nome Sobrenome",
    userEmail: "email@dominio.com",
    userStatus: "enrolled",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: ['Produto 01'],
    assessment: 'finished',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [{}],
}

export const enrolledMany = Template.bind({})
enrolledMany.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Nome Sobrenome",
    userEmail: "email@dominio.com",
    userStatus: "enrolled",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: ['Produto 01', 'Produto 03'],
    assessment: 'finished',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [
        {hasLicense: true, hasTrail: false, hasEnrollment: false, isCurrent: true, name: 'Produto 1'},
        {hasLicense: true, hasTrail: false, hasEnrollment: false, isCurrent: true, name: 'Produto 2'},
        {hasLicense: true, hasTrail: true, hasEnrollment: false, isCurrent: true, name: 'Produto 3'},
        {hasLicense: true, hasTrail: true, hasEnrollment: false, isCurrent: true, name: 'Produto 4'},
        {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: true, name: 'Produto 5'},
        {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: true, name: 'Produto 6'},
        {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: false, name: 'Produto 7'},
        {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: false, name: 'Produto 8'},
    ],
}

export const defined = Template.bind({})
defined.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Nome Sobrenome",
    userEmail: "email@dominio.com",
    userStatus: "defined",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: ['Produto 03'],
    assessment: 'finished',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [],
}

export const error = Template.bind({})
error.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Nome Sobrenome",
    userEmail: "email@don.com",
    userStatus: "error",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: [],
    assessment: 'finished',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [],
}

export const bigEmail = Template.bind({})
bigEmail.args = {
    loading: false,
    selected: false,
    handleSelect: (id) => { alert(`Select (or not) ${id}`) },
    userID: "bla-blu-fla",
    userName: "Nome Sobrenome Só que muito grande ",
    userEmail: "superdupermegauberhugeemail@frst.com",
    userStatus: "complete",
    userArea: "Desenvolvimento",
    userPosition: "FullFull Strack",
    licenses: [],
    assessment: 'finished',
    editAction: () => { alert('Edit') },
    newFormat: true,
    newLicenses: [],
}
