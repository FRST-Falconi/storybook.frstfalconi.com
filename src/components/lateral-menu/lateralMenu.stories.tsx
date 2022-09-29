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
    name: 'Student/Channel name',
    channel: 'Info channel',
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
    avatar: {
        src: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        alt: 'Alt example'
    },
    name: 'Student/Channel name',
    channel: 'Info channel',
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