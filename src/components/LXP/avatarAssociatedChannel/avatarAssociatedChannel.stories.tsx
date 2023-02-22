import React from 'react'

import AvatarAssociatedChannel from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LXP/AvatarAssociateChannel',
  component: AvatarAssociatedChannel
}

const Template = (args) => <AvatarAssociatedChannel {...args} />

export const normal = Template.bind({})
normal.args = {
  channel: 'XP',
  color: '#6a3f86',
  nameChannel: 'Nome do Canal',
  descriptionChannel:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quasi, incidunt molestias sapiente dignissimos velit praesentium adipisci ipsa, reprehenderit mollitia optio commodi at iste. Repudiandae repellendus in debitis aliquid distinctio?'
}

export const sourceImage = Template.bind({})
sourceImage.args = {
  image: true,
  sourceImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzySO8TACxxZVykdof7q6tJYrA8c_XfgGV8w&usqp=CAU',
  nameChannel: 'Nome do Canal',
  descriptionChannel:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quasi, incidunt molestias sapiente dignissimos velit praesentium adipisci ipsa, reprehenderit mollitia optio commodi at iste. Repudiandae repellendus in debitis aliquid distinctio?'
}
