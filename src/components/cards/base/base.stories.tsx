import React from 'react'

import BaseCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/Base',
    component: BaseCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BaseCard {...args} />

export const empty = Template.bind({})
// empty.args = {
//     loading: true,
// }

export const text = (args) => (
    <BaseCard>
        <p>Some text just to display</p>
    </BaseCard>
)