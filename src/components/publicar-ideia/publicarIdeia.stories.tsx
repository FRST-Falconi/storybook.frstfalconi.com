import React from 'react'

import Publicar from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Brainstorm/PublicarIdeia',
  component: Publicar
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Publicar {...args} />

export const normal = Template.bind({})
normal.args = {
  textoPublic:
    'Aliquam id nulla sed arcu lacinia ultricies. Praesent elementum risus placerat, hendrerit lorem in, consectetur lectus. Mauris molestie in arcu ut venenatis. Pellentesque lorem augue, posuere elementum libero laoreet, fringilla pretium nisl. Sed egestas efficitur dolor. Suspendisse justo enim, ullamcorper ac rhoncus vitae, molestie vehicula tellus.i.',
  nomeSobrenome: 'Nome Sobrenome',
  empresaNome: 'Empresa',
  dataPublic: 'Há 2 dias',
  txUserAutor: 'Clique para editar ou excluir',
  txUserBrainstorm: 'Clique para  excluir',
  userAutorPubli: false,
  userBrainstorm: true,
  user: false
}
