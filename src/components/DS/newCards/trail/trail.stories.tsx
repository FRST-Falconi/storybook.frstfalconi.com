import React from 'react'

import TrailCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/NewCards/TrailCard',
  component: TrailCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TrailCard {...args} />

export const normal = Template.bind({})
normal.args = {
  banner: 'https://picsum.photos/200',
  trailName: 'Trilha FRST Originals: Liderança que inspira',
  company: {
    icon: 'https://cdn-images.frstfalconi.cloud/60ef5d74b488c39e9d095851b99c68fe.png',
    name: 'Frst Falconi',
    uuid: '123'
  },
  handleClick: () => alert('clicado!')
}
