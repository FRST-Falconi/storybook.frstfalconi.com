import React from 'react'

import UserCard from './user/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/User',
    component: UserCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserCard {...args} />

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
}
