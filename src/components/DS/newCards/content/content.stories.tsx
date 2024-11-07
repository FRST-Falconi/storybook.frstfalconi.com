import React from 'react'

import CardContent from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/NewCards/CardContent',
  component: CardContent,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardContent {...args} />

export const normal = Template.bind({})
normal.args = {
  contentType: 'Documento',
  contentImage: 'https://picsum.photos/200',
  contentDescription: 'Criando desafios na plataforma FRST',
  company: {
    icon: 'https://cdn-images.frstfalconi.cloud/60ef5d74b488c39e9d095851b99c68fe.png',
    name: 'Frst Falconi',
    uuid: '123'
  },
  handleDownload: () => alert('Download!')
}
