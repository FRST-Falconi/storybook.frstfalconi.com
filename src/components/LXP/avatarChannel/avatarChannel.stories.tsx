import React from 'react'

import AvatarChannel from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/AvatarChannel',
    component: AvatarChannel,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AvatarChannel {...args} />

export const normal = Template.bind({})
normal.args = {
    size: '80px',
    channel: 'XP',
    alt: 'Alt example',
    disabled: false,
    color: '#6a3f86',    
    onChange: ()=> {alert('click')}
}

export const withImage= Template.bind({})
withImage.args = {
    src:'https://images-ext-1.discordapp.net/external/pNM-Z4rngrAg2cAPEEsZC80MsQz9WQ6LxJsJjUCndeM/https/png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg',
    size: '80px',
    channel: 'XP',
    alt: 'Alt example',
    disabled: false,
    color: '#6a3f86',    
    onChange: ()=> {alert('click')}
}