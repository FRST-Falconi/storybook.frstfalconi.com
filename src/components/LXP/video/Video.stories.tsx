import React from 'react'

import Video from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Video',
    component: Video,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Video {...args} />

export const Autoplay = Template.bind({})
Autoplay.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    autoplay: 1,

}

export const StartTime = Template.bind({})
StartTime.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    timeStart: '1m10s'
}

export const HightQuality = Template.bind({})
HightQuality.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    quality: '720p',
}

export const SpeedControl = Template.bind({})
SpeedControl.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    showSpeedControl: 1
}

export const HiddenControls = Template.bind({})
HiddenControls.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    controls: 'false'
}

export const LoopingEnable = Template.bind({})
LoopingEnable.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    loop: 1
}

export const KeyboardEvents = Template.bind({})
KeyboardEvents.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    keyboard: 1,
}

export const StartTimeAutoplay = Template.bind({})
StartTimeAutoplay.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    autoplay: 1,
    timeStart: '1m58s'
}

export const CustomSize = Template.bind({})
CustomSize.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    width: 840,
    height: 542,
}

export const MobileSize = Template.bind({})
MobileSize.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    width: 320,
    height: 150,
}

export const Centered = Template.bind({})
Centered.args = {
    videoId: '730966804',    
    privateHash: '410e4127a0',
    style: { width: '640px', height: '342px', margin: 'auto' }
}

