import React from 'react'

import FileUpload from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/FileUpload',
    component: FileUpload,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FileUpload {...args} />

export const Landscape = Template.bind({})
Landscape.args = {
    variant: 'landscape',    
    startIcon: <Icons.Cam fill={'#ffffff'}/>,   
    handleChange: () => { alert('Click') }
}

export const Portrait = Template.bind({})
Portrait.args = {
    variant: 'portrait',
    startIcon: <Icons.Cam fill={'#ffffff'}/>,    
    handleChange: () => { alert('Click') }
}