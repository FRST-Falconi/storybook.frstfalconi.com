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
    onSelected: (e) => alert(e),
    object: [
        {
            category: "Etapa do Ciclo",
            description: "Selecione a(s) etapa(s) do ciclo de aprendizagem:",
            group: [
                { id: '1', description: "Não Iniciou" },
                { id: '2', description: "Problema definido" },
                { id: '3', description: "Hipóteses levantadas" },
                { id: '4', description: "Testes realizados" },
                { id: '5', description: "Resultados e aprendizados" },
                { id: '6', description: "Próximos Passos" },
                { id: '7', description: "Finalizado" }
            ]
        },
        {
            category: "Trilha",
            description: "Selecione a(s) trilha(s):",
            group: [
                { id: '8', description: "Colaboraçao" },
                { id: '9', description: "Customer Centric" },
                { id: '10', description: "Customer Experience" },
                { id: '11', description: "Digital Business Mindset" },
                { id: '12', description: "Liderança Que Inspira" },
                { id: '13', description: "Visão Sistêmica" },
            ]
        },
        {
            category: "Avaliação 360º",
            description: "Selecione:",
            group: [
                { id: '14', description: "Aguardando avaliação" },
                { id: '15', description: "Problema aceito" },
                { id: '16', description: "Problema em revisão" },
            ]
        },
        {
            category: "Cargo",
            description: "Selecione o(s) cargo(s):",
            group: [
                { id: '17', description: "Estudante/Universitário(a)" },
                { id: '18', description: "Estagiário(a)" },
                { id: '19', description: "Recém-formado(a)" },
                { id: '20', description: "Trainee" },
                { id: '21', description: "Analista" },
                { id: '22', description: "Supervisor(a)" },
                { id: '23', description: "Coordenador(a)" },
                { id: '24', description: "Gerente" },
                { id: '25', description: "Diretor(a)/Head" },
                { id: '26', description: "C-Level" },
                { id: '27', description: "Fundador(a)/Sócio(a)" },
                { id: '28', description: "Outro(a)" },
            ]
        },
        {
            category: "Área",
            description: "Selecione o(s) cargo(s):",
            group: [
                { id: '29', description: "Administrativo" },
                { id: '30', description: "Alta Direção" },
                { id: '31', description: "Atendimento" },
                { id: '32', description: "Comercial/Vendas" },
                { id: '33', description: "Comunicação" },
                
                { id: '34', description: "Controladoria" },
                { id: '35', description: "Data Science" },
                { id: '36', description: "Design" },
                { id: '37', description: "Financeiro" },
                { id: '38', description: "Jurídico" },

                { id: '39', description: "Logística" },
                { id: '40', description: "Marketing" },
                { id: '41', description: "Novos Negócios" },
                { id: '42', description: "Operacional" },
                { id: '43', description: "Produto" },

                { id: '44', description: "Projetos" },
                { id: '45', description: "Recursos Humanos" },
                { id: '46', description: "Suprimentos" },
                { id: '47', description: "Tecnologia da Informação" },
                { id: '48', description: "Outro" },
            ]
        },
    ]
}
