import React from 'react'

import LateralMenu from './index'
import * as Icons from '../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Header/Lateral Menu',
    component: LateralMenu,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LateralMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    variant: 'primary',
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    hiddenButtonHeader: false,
    name: 'Student/Channel name',
    button: {
        variant: 'primary',
        label: 'Button CTA',
        onClick: () => alert('Click')
    },
    listOptions: [
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
    ]
}

export const normalWithItemActive = Template.bind({})
normalWithItemActive.args = {
    variant: 'primary',
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    name: 'Student/Channel name',
    hiddenButtonHeader: false,
    button: {
        variant: 'primary',
        label: 'Button CTA',
        onClick: () => alert('Click')
    },
    listOptions: [
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: true,
            beginComponent: <Icons.Noun/>,
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
    ]
}


export const channel = Template.bind({})
channel.args = {
    variant: 'primary',    
    channel: 'Info channel',
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    name: 'Student name',
    button: {
        variant: 'primary',
        label: 'Button CTA',
        onClick: () => alert('Click')
    },
    listOptions: [
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Label',
            onClick: () => alert('label'),
            selected: false,
            beginComponent: <Icons.Noun/>,
            subItems: [
                { id: '1', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '2', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '3', label: 'List Entry', onClick: (e) => alert(e) },
                { id: '4', label: 'List Entry', onClick: (e) => alert(e) }
            ],
            style: {
                width: '280px' 
            }
        },
    ]
}


export const versionOneSRG = Template.bind({})
versionOneSRG.args = {
    variant: 'primary',
    hiddenButtonHeader: true,
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    name: 'Student/Channel name',
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
            }
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


export const versionTwoSRG = Template.bind({})
versionTwoSRG.args = {
    variant: 'primary',
    hiddenButtonHeader: true,
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    name: 'Student/Channel name',
    button: {
        variant: 'primary',
        label: 'Button CTA',
        onClick: () => alert('Click')
    },
    listOptions: [
        {    
            label: 'Início',
            selected: false,
            onClick: () => alert('Início'),
            beginComponent: <Icons.HomeLineIcon/>,
            activeBeginIcon: <Icons.HomeFilledIcon/>,
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Trilhas e Desafios',
            onClick: () => alert('Trilhas e Desafios'),
            selected: false,
            beginComponent: <Icons.LampLineIcon/>,
            activeBeginIcon: <Icons.LampFilledIcon/>,
            style: {
                width: '280px' 
            }
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
    ]
}

export const versionThreeSRG = Template.bind({})
versionThreeSRG.args = {
    variant: 'primary',
    hiddenButtonHeader: true,
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    name: 'Student/Channel name',
    button: {
        variant: 'primary',
        label: 'Button CTA',
        onClick: () => alert('Click')
    },
    listOptions: [
        {    
            label: 'Início',
            selected: false,
            onClick: () => alert('Início'),
            beginComponent: <Icons.HomeLineIcon/>,
            activeBeginIcon: <Icons.HomeFilledIcon/>,
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Trilhas e Desafios',
            onClick: () => alert('Trilhas e Desafios'),
            selected: false,
            beginComponent: <Icons.LampLineIcon/>,
            activeBeginIcon: <Icons.LampFilledIcon/>,
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Assessment',
            onClick: () => alert('Assessment'),
            selected: false,
            beginComponent: <Icons.PencilLineIcon/>,
            activeBeginIcon: <Icons.PencilFilledIcon/>,
            subItems: [
                { id: '1', label: 'Realizar reassessment', onClick: (e) => alert(e) },
                { id: '2', label: 'Ver resultado', onClick: (e) => alert(e) },
            ],
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
            button: {
                label: 'Entrar',
                variant: 'primary',
                onClick: () => alert('Click')
            },
            style: {
                width: '280px' 
            }
        },
        {    
            label: 'Conteúdos FRST',
            onClick: () => alert('Conteúdos FRST'),
            selected: false,
            beginComponent: <Icons.LampLineIcon/>,
            activeBeginIcon: <Icons.LampFilledIcon/>,
            style: {
                width: '280px' 
            }
        },
    ]
}