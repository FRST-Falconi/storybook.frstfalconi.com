import React from 'react'

import UsersChallenge from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'DS/UsersChallenge',
    component: UsersChallenge
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UsersChallenge {...args} />

export const AllUsers = Template.bind({})

AllUsers.args = {
  hasOnlyAutor: false,
  onUserNameClick: () => console.log('Clicou no nome'),
  onClickAvatar: () => console.log('Clicou na foto do avatar'),
  variant: 'feed',
  goalUsers: [
      {
          name: 'Isabella Lopes',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
          user_uuid: '1',
          author: false,
          area_name: 'Administração'
      },
      {
          name: 'Marcela Vieira de Souza Lima',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
          user_uuid: '2',
          author: false,
          area_name: 'Financeiro'
      },
      {
          name: 'Paulo Mendes',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
          user_uuid: '3',
          author: false,
          area_name: 'Tecnologia da informação'
      },
      {
          name: 'Clarice Tavares Guimarães',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
          user_uuid: '4',
          author: false,
          area_name: 'Recursos humanos'
      },
      {
          name: 'Vitor Felipe',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
          user_uuid: '5',
          author: false,
          area_name: 'Diretoria'
      },
      {
          name: 'Rebecca Gomes',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
          user_uuid: '6',
          author: true,
          area_name: 'Administração'
      },
      {
          name: 'João Vitor',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
          user_uuid: '7',
          author: false,
          area_name: 'Financeiro'
      },
      {
          name: 'Ana Beatriz Silva',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
          user_uuid: '8',
          author: false,
          area_name: 'Diretoria'
      },
      {
          name: 'Bruno Silva',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
          user_uuid: '9',
          author: false,
          area_name: 'Diretoria'
      }
  ]
}


export const AutorOnly = Template.bind({})
AutorOnly.args = {
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=male',
    hasOnlyAutor: true,
    onClickAvatar: () => console.log('Clicou no avatar'),
    name: 'José da Silva',
    userUuid: '1',
    areaName: 'Administração',
    companyName: 'Falconi',
    createData: "10 dias atrás",
    variant: 'vitrine',
}
