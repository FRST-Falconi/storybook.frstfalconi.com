import React from 'react'

import ImpedimentosTab from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/ImpedimentosTab',
  component: ImpedimentosTab,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ImpedimentosTab {...args} />

export const withOptions = Template.bind({})
withOptions.args = {
    maxTabs: 5,
    showAddButton: true,
    idSelectedTab: '2',
    tabsList: [
        {
            id: '1',
            avatar: `https://xsgames.co/randomusers/avatar.php?g=male`,
            user_name: 'Fulano teste de nome muito grande kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
            description: 'Primeiro impedimento',
            title: 'Impedimento 1',
            isGoalOwner: true,
            disabledPriorize: true,
            showOptions: true,
            handlePriorize: (impedimento) => console.log("Priorizar: ", impedimento),
            handleDelete: (impedimento) => console.log("Delete: ", impedimento),
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento)
        },
        {
            id: '2',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            user_name: 'Fulano',
            description: 'Segundo impedimento',
            title: 'Impedimento 2',
            showOptions: true,
            handlePriorize: (impedimento) => console.log("Priorizar: ", impedimento),
            handleDelete: (impedimento) => console.log("Delete: ", impedimento),
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento)
        },
        {
            id: '3',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Terceiro impedimento',
            title: 'Impedimento 3',
            isGoalOwner: false,
            showOptions: false,
            handlePriorize: (impedimento) => console.log("Priorizar: ", impedimento),
            handleDelete: (impedimento) => console.log("Delete: ", impedimento),
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento)
        },
        {
            id: '4',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Quarto impedimento',
            title: 'Impedimento 4',
            isGoalOwner: true,
            showOptions: true,
            handlePriorize: (impedimento) => console.log("Priorizar: ", impedimento),
            handleDelete: (impedimento) => console.log("Delete: ", impedimento),
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento)
        },
        {
            id: '5',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Quinto impedimento',
            title: 'Impedimento 5',
            isGoalOwner: true,
            showOptions: true,
            handlePriorize: (impedimento) => console.log("Priorizar: ", impedimento),
            handleDelete: (impedimento) => console.log("Delete: ", impedimento),
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento)
        },
        {
            id: '6',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            user_name: 'Fulano',
            description: 'Sexto impedimento',
            title: 'Impedimento 6'
        },
        {
            id: '7',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Sétimo impedimento',
            title: 'Impedimento 7'
        },
        {
            id: '8',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Oitavo impedimento',
            title: 'Impedimento 8',
            isGoalOwner: true,
            showOptions: true,
            handlePriorize: (impedimento) => console.log("Priorizar: ", impedimento),
            handleDelete: (impedimento) => console.log("Delete: ", impedimento),
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento)
        },
        {
            id: '9',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Nono impedimento',
            title: 'Impedimento 9'
        },
        {
            id: '10',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Décimo impedimento',
            title: 'Impedimento 10'
        },
    ],
    onSaveNewImpedimento: (text) => console.log("Salvando impedimento: ", text),
    onSelectedTab: (impedimento) => console.log("Impedimento selecionado: ", impedimento),
    handleClickAvatar: () => console.log("Go to profile!")
}

export const withoutOptions = Template.bind({})
withoutOptions.args = {
    maxTabs: 5,
    showOptions: false,
    showAddButton: false,
    tabsList: [
        {
            id: '1',
            avatar: `https://xsgames.co/randomusers/avatar.php?g=male`,
            user_name: 'Fulano',
            description: 'Primeiro impedimento',
            title: 'Impedimento 1',
            isGoalOwner: true
        },
        {
            id: '2',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            user_name: 'Fulano',
            description: 'Segundo impedimento',
            title: 'Impedimento 2'
        },
        {
            id: '3',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Terceiro impedimento',
            title: 'Impedimento 3',
            isGoalOwner: false
        },
        {
            id: '4',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Quarto impedimento',
            title: 'Impedimento 4',
            isGoalOwner: true
        },
        {
            id: '5',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Quinto impedimento',
            title: 'Impedimento 5',
            isGoalOwner: true
        },
        {
            id: '6',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            user_name: 'Fulano',
            description: 'Sexto impedimento',
            title: 'Impedimento 6'
        },
        {
            id: '7',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Sétimo impedimento',
            title: 'Impedimento 7'
        },
        {
            id: '8',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Oitavo impedimento',
            title: 'Impedimento 8',
            isGoalOwner: true
        },
        {
            id: '9',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Nono impedimento',
            title: 'Impedimento 9'
        },
        {
            id: '10',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Décimo impedimento',
            title: 'Impedimento 10'
        },
    ],
    onSaveNewImpedimento: (text) => console.log("Salvando impedimento: ", text),
    onSelectedTab: (impedimento) => console.log("Impedimento selecionado: ", impedimento),
    handleClickAvatar: () => console.log("Go to profile!")
}
