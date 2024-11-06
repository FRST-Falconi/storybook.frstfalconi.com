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
  handleDownload: () => alert('Download!')
}
