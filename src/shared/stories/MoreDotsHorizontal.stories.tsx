import React from 'react'

import { MoreDotsHorizontal } from '../icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons',
  component: MoreDotsHorizontal,
}


const TemplateMoreDotsHorizontal = (args) => <MoreDotsHorizontal {...args} />

export const MoreDotsHorizontalIcon = TemplateMoreDotsHorizontal.bind({})
MoreDotsHorizontalIcon.args = {
    fill: '#fff',
}