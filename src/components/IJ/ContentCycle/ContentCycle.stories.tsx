import React from 'react'

import ContentCycle from './index'

export default {
  title: 'IJ/ContentCycle',
  component: ContentCycle
}

const Template = (args) => <ContentCycle {...args} />

export const normal = Template.bind({})
normal.args = {
  title: 'Pikachu',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus doloribus voluptate dolorem quam asperiores eaque at quibusdam consequatur ab quisquam placeat cum explicabo, vitae amet porro id atque in ad.',
  selected: false,
  listSkils: ['velocidade', 'eletricidade'],
  urlPhoto:
    'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2023/02/pikachu-capitao-destacada.jpg?fit=1340%2C846&ssl=1',
  urlVideo: 'https://www.youtube.com/watch?v=j5KvubvurDA',
  titleVideo: 'Os Melhores momentos do Pikachu',
  progress: 0,
  started: false,
  stepContent: false,
  onSelect: () => alert('selecionei')
}
