import React from 'react'

import ImpedimentosTab from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/ImpedimentosTab',
  component: ImpedimentosTab,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ImpedimentosTab {...args} />

export const normal = Template.bind({})
normal.args = {
    maxTabs: 5,
    tabsList: [
        {
            id: '1',
            avatar: `https://xsgames.co/randomusers/avatar.php?g=male`,
            description: 'Primeiro impedimento',
            title: 'Impedimento 1',
            isGoalOwner: true
        },
        {
            id: '2',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            description: 'Segundo impedimento',
            title: 'Impedimento 2'
        },
        {
            id: '3',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            description: 'Terceiro impedimento',
            title: 'Impedimento 3',
            isGoalOwner: false
        },
        {
            id: '4',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            description: 'Quarto impedimento',
            title: 'Impedimento 4',
            isGoalOwner: true
        },
        {
            id: '5',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            description: 'Quinto impedimento',
            title: 'Impedimento 5',
            isGoalOwner: true
        },
        {
            id: '6',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            description: 'Sexto impedimento',
            title: 'Impedimento 6'
        },
        {
            id: '7',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            description: 'Sétimo impedimento',
            title: 'Impedimento 7'
        },
        {
            id: '8',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            description: 'Oitavo impedimento',
            title: 'Impedimento 8',
            isGoalOwner: true
        },
        {
            id: '9',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
            description: 'Nono impedimento',
            title: 'Impedimento 9'
        },
        {
            id: '10',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
            description: 'Décimo impedimento',
            title: 'Impedimento 10'
        },
    ],
    onSaveNewImpedimento: (text) => console.log("Salvando impedimento: ", text),
    onSelectedTab: (impedimento) => console.log("Impedimento selecionado: ", impedimento)
}
