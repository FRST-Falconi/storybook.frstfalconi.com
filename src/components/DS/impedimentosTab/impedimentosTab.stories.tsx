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
    addButtonText: 'Sugerir impedimento',
    idSelectedTab: '2',
    tabsList: [
        {
            id: '1',
            avatar: `https://xsgames.co/randomusers/avatar.php?g=male`,
            user_name: 'Fulano teste de nome muito grande kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus, nunc viverra accumsan ornare, sapien felis sodales felis, at blandit sem quam nec purus. Aliquam eget auctor nisi, at aliquet eros. Morbi quam eros, laoreet eu elit eu, euismod maximus ex. Duis ut libero at mauris luctus euismod. Sed eu sem dolor. Vivamus in turpis lobortis lacus fermentum maximus. Cras at neque at sapien sollicitudin volutpat. Phasellus sagittis, felis vel consectetur pulvinar, libero enim dictum tortor, elementum gravida mauris tortor in libero. Aliquam egestas auctor ex, at vehicula justo cursus nec. Integer id quam neque. Praesent quis venenatis ex. Curabitur sed ante eu enim cursus pretium. Maecenas dapibus aliquet leo, vitae dictum est maximus sit amet. Fusce sollicitudin velit eu eros mollis pellentesque. Quisque vel augue dictum, convallis elit feugiat, pretium mi. Donec ac euismod quam, vel ornare dui.',
            title: 'Impedimento 1',
            isGoalOwner: true,
            disabledPriorize: true,
            showOptions: true,
            handlePriorize: (impedimento) => console.log("Priorizar: ", impedimento),
            handleDelete: (impedimento) => console.log("Delete: ", impedimento),
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento),
            handleClickAvatar: () => console.log("Go to profile!")
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
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento),
            handleClickAvatar: () => console.log("Go to profile!")
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
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento),
            handleClickAvatar: () => console.log("Go to profile!")
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
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento),
            handleClickAvatar: () => console.log("Go to profile!")
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
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento),
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '6',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            user_name: 'Fulano',
            description: 'Sexto impedimento',
            title: 'Impedimento 6',
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '7',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Sétimo impedimento',
            title: 'Impedimento 7',
            handleClickAvatar: () => console.log("Go to profile!")
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
            handleEdit: (updatedImpedimento) => console.log("Edit: ", updatedImpedimento),
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '9',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Nono impedimento',
            title: 'Impedimento 9',
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '10',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Décimo impedimento',
            title: 'Impedimento 10',
            handleClickAvatar: () => console.log("Go to profile!")
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
    addButtonText: 'Sugerir impedimento',
    tabsList: [
        {
            id: '1',
            avatar: `https://xsgames.co/randomusers/avatar.php?g=male`,
            user_name: 'Fulano',
            description: 'Primeiro impedimento',
            title: 'Impedimento 1',
            isGoalOwner: true,
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '2',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            user_name: 'Fulano',
            description: 'Segundo impedimento',
            title: 'Impedimento 2',
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '3',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Terceiro impedimento',
            title: 'Impedimento 3',
            isGoalOwner: false,
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '4',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Quarto impedimento',
            title: 'Impedimento 4',
            isGoalOwner: true,
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '5',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Quinto impedimento',
            title: 'Impedimento 5',
            isGoalOwner: true,
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '6',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            user_name: 'Fulano',
            description: 'Sexto impedimento',
            title: 'Impedimento 6',
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '7',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Sétimo impedimento',
            title: 'Impedimento 7',
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '8',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Oitavo impedimento',
            title: 'Impedimento 8',
            isGoalOwner: true,
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '9',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            user_name: 'Fulano',
            description: 'Nono impedimento',
            title: 'Impedimento 9',
            handleClickAvatar: () => console.log("Go to profile!")
        },
        {
            id: '10',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            user_name: 'Fulano',
            description: 'Décimo impedimento',
            title: 'Impedimento 10',
            handleClickAvatar: () => console.log("Go to profile!")
        },
    ],
    onSaveNewImpedimento: (text) => console.log("Salvando impedimento: ", text),
    onSelectedTab: (impedimento) => console.log("Impedimento selecionado: ", impedimento),
}
