import React from 'react'

import AlertCicle from '../icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons/Icon',
  component: AlertCicle,
}


const TemplateAlert = (args) => <AlertCicle {...args} />

export const AlertCicleIcon = TemplateAlert.bind({})
AlertCicleIcon.args = {
    fill: '#fff',
}