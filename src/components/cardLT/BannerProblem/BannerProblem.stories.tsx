import React from 'react'
import BannerProblem from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/BannerProblem',
    component: BannerProblem,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerProblem {...args} />

export const ShowData = Template.bind({})
ShowData.args = {

}