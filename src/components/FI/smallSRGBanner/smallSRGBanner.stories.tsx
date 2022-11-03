import React from 'react'

import SmallSRGBanner from './index'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/SmallSRGBanner',
    component: SmallSRGBanner,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SmallSRGBanner {...args} />

export const normal = Template.bind({})
normal.args = {
    textButton: 'Criar novo desafio',
    handleClick: () => alert('Clicado!'),
}
