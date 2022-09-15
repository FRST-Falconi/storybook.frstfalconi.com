import React from 'react'
import SearchResults from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Search Results',
    component: SearchResults,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchResults {...args} />

export const normal = Template.bind({})
normal.args = {
    src: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
    title: 'Name of the course',
    onClick: () => {alert('click')},
    description: 'Description bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Chicken tri-tipalcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger. Short loin hamburger tri-tip,chuck flank pork cho',
}

