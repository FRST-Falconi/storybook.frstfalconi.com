import React from 'react'

import FilterAccordionCheckbox from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Filter Accordion Checkbox',
    component: FilterAccordionCheckbox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FilterAccordionCheckbox {...args} />

export const normal = Template.bind({})
normal.args = {
    generalTitle: 'Escolha abaixo',
    object: [
        {
            category: "Etapa do Ciclo",
            description: "Selecione a(s) etapa(s) do ciclo de aprendizagem:",
            group: [
                { id: '1', description: "Não Iniciou" },
                { id: '2', description: "Problema definido" }
            ]
        },
        {
            category: "Trilha",
            description: "Selecione a(s) trilha(s):",
            group: [
                { id: '3', description: "Colaboraçao" },
                { id: '4', description: "Customer Centric" },
                { id: '5', description: "Customer Centric" },
                { id: '6', description: "Customer Centric" },
                { id: '7', description: "Customer Centric" },
                { id: '8', description: "Customer Centric" },
                { id: '9', description: "Customer Centric" },
                { id: '10', description: "Customer Centric" },
                { id: '11', description: "Customer Centric" },
                { id: '12', description: "Customer Centric" },
                { id: '13', description: "Customer Centric" },
                { id: '14', description: "Customer Centric" },
                { id: '15', description: "Customer Centric" },
                { id: '16', description: "Customer Centric" },
                { id: '17', description: "Customer Centric" },
                { id: '18', description: "Customer Centric" },
                { id: '19', description: "Customer Centric" },
                { id: '20', description: "Customer Centric" },
                { id: '21', description: "Customer Centric" },
                { id: '22', description: "Customer Centric-1" }
            ]
        },
    ]
}
