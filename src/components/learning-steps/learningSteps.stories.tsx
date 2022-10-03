import React from 'react'

import LearningSteps from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Learning Steps',
    component: LearningSteps,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LearningSteps {...args} />

export const normal = Template.bind({})
normal.args = {
    title: "Etapas do ciclo de aprendizagem",
    onSelected: (e : any) => { alert("Item Selecionado: " + e)},
    textViewMore: 'Ver mais',
    textClearFilter: 'Excluir Filtro',
    objectCards: [
                    {
                        id: 0,
                        title: '0. Não iniciou',
                        numberPeople: 15,
                    },
                    {
                        id: 1,
                        title: '1. Problema definido',
                        numberPeople: 3,
                        photos:
                            ['https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg']
                    },
                    {
                        id: 2,
                        title: '2. Hipóteses levantadas',
                        numberPeople: 10,
                        photos:
                            ['https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg']
                    },
                    {
                        id: 3,
                        title: '3. Testes realizados',
                        numberPeople: 4,
                        photos:
                            ['https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg']
                    },
                    {
                        id: 4,
                        title: '4. Resultados e aprendizados',
                        numberPeople: 13,
                        photos:
                            ['https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg']
                    },
                    {
                        id: 5,
                        title: '5. Próximos passos',
                        numberPeople: 105,
                        photos:
                            ['https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg']
                    },
                    {
                        id: 6,
                        title: '6. Finalizado',
                        numberPeople: 2,
                        photos:
                            ['https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
                            'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg']
                    },
                ],
    marginLeftTitle: '0px',
    marginRightClear: '0px',
    marginsArrowButton: 50,
    sizeArrowButton: 80,
    widthCard: '343px',
    horizontalMarginInternScroll: '100px',
}


export const minimo = Template.bind({})
minimo.args = {
    onSelected: (e : any) => { alert("Item Selecionado: " + e)},
    objectCards: [
            {
                id: 0,
                title: '0. Não iniciou',
            },
            {
                id: 1,
                title: '1. Problema definido',
            },
            {
                id: 2,
                title: '2. Hipóteses levantadas',
            },
            {
                id: 3,
                title: '3. Testes realizados',
            },
            {
                id: 4,
                title: '4. Resultados e aprendizados',
            },
            {
                id: 5,
                title: '5. Próximos passos',
            },
            {
                id: 6,
                title: '6. Finalizado',
            },
        ],
}
