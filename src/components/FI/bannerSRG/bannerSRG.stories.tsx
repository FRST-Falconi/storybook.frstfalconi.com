import React from 'react'

import BannerSRG from './index'
import * as Icons from '../../../shared/icons'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/BannerSRG',
    component: BannerSRG,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerSRG {...args} />

export const normal = Template.bind({})
normal.args = {
    bannerSRG: {
        normal: 'https://i.gyazo.com/481d072fb1f0099585772121b906496f.png',
        responsive: 'https://i.gyazo.com/4c51a9876f08e41507d6f9e7c8515af3.png'
    },
    logoSRG: 'https://i.gyazo.com/566e0a91f926e5f7b24b34d2194bce76.png',
    avatarSRG: 'https://i.gyazo.com/59d6b73b26541b748ca6a5d167645746.png',
    labels: {
        textTitle: 'Space Race Game',
        textDescription: 'Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.',
        textHelperDescription: 'Antes de começar seu projeto, confira o nosso material de apoio para a etapa de definição do problema!',
    },
    newProject: {
        label: 'Criar novo projeto', 
        action: () => alert('Criar novo projeto')
    },
    acessHere: {
        label: 'Acesse aqui', 
        action: () => alert('Acesse aqui')
    }
}
