import React from 'react'
import ConquistaCarrossel from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Conquista carrossel',
    component: ConquistaCarrossel,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ConquistaCarrossel {...args} />

export const normal = Template.bind({})
normal.args = {
    onSelected: (e : any) => { alert("Item Selecionado: " + e)},
    objectCards: [
                    {
                        description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
                        problemId: '123',
                        statusCard: 1,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                    {
                        description: 'Descobri fatores que estão contribuindo negativamente para que os alunos não engajem na plataforma',
                        problemId: '1234',
                        statusCard: 2,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                    {
                        description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
                        problemId: '1234',
                        statusCard: 1,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                    {
                        description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
                        problemId: '1234',
                        statusCard: 2,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                    {
                        description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
                        problemId: '1234',
                        statusCard: 2,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                    {
                        description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
                        problemId: '1234',
                        statusCard: 2,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                    {
                        description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
                        problemId: '1234',
                        statusCard: 1,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                    {
                        description: 'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
                        problemId: '1234',
                        statusCard: 1,
                        userArea: 'Customer Experience',
                        userName: 'Érika Heim',
                        
                    },
                ],
    marginLeftTitle: '0px',
    marginRightClear: '0px',
    marginsArrowButton: 50,
    sizeArrowButton: 80,
    widthCard: '343px',
    horizontalMarginInternScroll: '100px',
}