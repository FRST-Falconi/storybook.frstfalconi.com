import React from 'react'

import RatingCurtidas from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/RatingCurtidas',
    component: RatingCurtidas,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RatingCurtidas {...args} />

export const CurtidasRating = Template.bind({})
CurtidasRating.args = {
    titulo: 'Curtidas',
    qtdeCurtidas: 24,
    descricaoCurtida: 'pessoas',
    tipoBotao: 2,
    style: {background: '#E5E5E5'}
}
