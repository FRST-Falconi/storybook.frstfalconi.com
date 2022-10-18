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
    },
    social: {
        onClickSite: () => alert('Site'),
        onClickLinkedin: () => alert('Linkedin'),
        onClickInstagram: () => alert('Instagram'),
        onClickYoutube: () => alert('Youtube'),
        onClickSpotify: () => alert('Spotify'),
        onClickPodCast: () => alert('PodCast'),
    },
    lateralMenu: {     
        variant: 'primary',
        hiddenButtonHeader: true,
        avatar: {
            src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
            alt: 'Alt example'
        },
        name: 'Student Name',
        button: {
            variant: 'primary',
            label: 'Button CTA',
            onClick: () => alert('Click')
        },
        listOptions: [
            {    
                label: 'Início',
                selected: true,
                onClick: () => alert('Início'),
                beginComponent: <Icons.HomeLineIcon/>,
                activeBeginIcon: <Icons.HomeFilledIcon/>,
                style: {
                    width: '280px' 
                },
            },
            {    
                label: 'Assessment',
                onClick: () => alert('Assessment'),
                selected: false,
                beginComponent: <Icons.PencilLineIcon/>,
                activeBeginIcon: <Icons.PencilFilledIcon/>,
                style: {
                    width: '280px' 
                }
            },
            {    
                label: 'Eventos',
                hiddenIconDropArrow: true,
                onClick: () => alert('Eventos'),
                selected: false,
                beginComponent: <Icons.CalendarLineIcon/>,
                activeBeginIcon: <Icons.CalendarFilledIcon/>,
                style: {
                    width: '280px' 
                }
            },
            {    
                label: 'Hall de projetos',
                hiddenIconDropArrow: false,
                onClick: () => alert('Hall de projetos'),
                selected: false,
                beginComponent: <Icons.MedalLineIcon/>,
                activeBeginIcon: <Icons.MedalFilledIcon/>,
                style: {
                    width: '280px' 
                }
            },
        ]
    }
}
