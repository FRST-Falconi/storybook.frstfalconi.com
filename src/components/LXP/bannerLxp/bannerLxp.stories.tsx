import React from 'react'

import BannerLxp from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/BannerLxp',
    component: BannerLxp,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerLxp {...args} />

export const Normal = Template.bind({})
Normal.args = {
    title: 'Nome do seu KnowHub',
    titleColor: '#FFF',
    isDisabledTitle: false,
    bgSrc: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
    selectedFile: (nome) => alert(nome),
    onSaveInfo: (nome) => alert(nome)
}