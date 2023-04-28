import React from 'react'
import ListContentCycle from './index'

export default {
  title: 'IJ/ListContentCycle',
  component: ListContentCycle
}
const Template = (args) => <ListContentCycle {...args} />
export const normal = Template.bind({})
normal.args = {
  listContent: [
    {
      title: 'Liderança que inspira',
      description: `Description bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. 
       Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger. Short
       loin hamburger tri-tip, chuck flank pork chop doner porchetta.  Tenderloin tri-tip meatloaf cow brisket
       `,
      selected: false,
      listSkils: ['Liderança', 'colaboração'],
      urlPhoto: '',
      urlVideo: 'https://vimeo.com/367756121',
      titleVideo: 'Um video Legal',
      progress: 0,
      started: false
    },
    {
      title: 'Liderança que inspira',
      description: `Description bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. 
       Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger. Short
       loin hamburger tri-tip, chuck flank pork chop doner porchetta.  Tenderloin tri-tip meatloaf cow brisket
       `,
      selected: false,
      listSkils: ['Liderança', 'colaboração'],
      urlPhoto: '',
      urlVideo: 'https://vimeo.com/367756121',
      titleVideo: 'Um video Legal',
      progress: 0,
      started: false
    },
    {
      title: 'Liderança que inspira',
      description: `Description bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. 
       Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger. Short
       loin hamburger tri-tip, chuck flank pork chop doner porchetta.  Tenderloin tri-tip meatloaf cow brisket
       `,
      selected: false,
      listSkils: ['Liderança', 'colaboração'],
      urlPhoto: '',
      urlVideo: 'https://vimeo.com/367756121',
      titleVideo: 'Um video Legal',
      progress: 0,
      started: false
    }
  ]
}
