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
            avatar: 'https://api-deimos-cdn.frstfalconi.cloud/avatar/12a9402f-caa0-4970-9513-c371f3ed089c.jpg',
            description: 'Falta de processos para serem seguidos'
        },
        {
            id: '2',
            avatar: '',
            description: 'Segundo impedimento'
        },
        {
            id: '3',
            avatar: 'https://api-deimos-cdn.dev.frstfalconi.cloud/avatar/50dfd165-2a7f-4fa8-8573-85fd9655b3b9.jpg',
            description: 'Terceiro impedimento'
        }
    ],
    onSaveNewImpedimento: (text) => console.log("Salvando impedimento: ", text)
}
