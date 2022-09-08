import React from 'react'

import Rating from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'EBR/Rating FIlled',
    component: Rating,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Rating {...args} />

export const DefaultRating = Template.bind({})
DefaultRating.args = {
    rating: 4,
    isVisibleNumberRating: true,
    qtdStars: 5,
    sizeStars: 18,
    marginStars: '3.5px',
    orientation: 'horizontal',
    handleRating: (e) => alert(e),
}
