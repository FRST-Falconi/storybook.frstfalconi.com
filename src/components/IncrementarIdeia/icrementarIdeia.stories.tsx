import React from 'react'

import IcrementarIdeia from './index'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Brainstorm/IcrementarIdeia',
  component: IcrementarIdeia
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IcrementarIdeia {...args} />

export const icrementarIdeia = Template.bind({})
icrementarIdeia.args = {
  user: 'user',
  textPlaceholderGestor: 'Como melhorar essa ideia?',
  textPlaceholderAluno: 'Deseja comentar algo?',
  imgComentario: '/bg1.png',
  limitTexto: 250,
  txtError: 'Reduza seu texto para 350 caracteres.',
<<<<<<< HEAD:src/components/IncrementarIdeia/icrementarIdeia.stories.tsx
  hasEmoji: true
=======
  hasEmoji: true,
  limit: 1000,
  onChange: (e) => console.log(e),
  styles: {width: '200px'}
>>>>>>> develop:src/components/FI/IncrementarIdeia/icrementarIdeia.stories.tsx
}
