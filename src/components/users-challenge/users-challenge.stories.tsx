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
  avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
  hasOnlyAutor: false,
  handleClick: () => console.log('Clicou'),
  onUserNameClick: () => console.log('Clicou no nome'),
  onAvatarUserClick: () => console.log('Clicou na foto do avatar'),
  goalUsers: [
    {
      userName: 'Isabella Lopes',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=female',
      userId: '1',
      isGoalOwner: true,
      areaName: 'Administração'
    },
    {
      userName: 'Marcela Vieira de Souza Lima',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=female',
      userId: '2',
      isGoalOwner: false,
      areaName: 'Financeiro'
    },
    {
      userName: 'Paulo Mendes',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
      userId: '3',
      isGoalOwner: false,
      areaName: 'Tecnologia da informação'
    },
    {
      userName: ' Clarice Tavares Guimarães',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=female',
      userId: '4',
      isGoalOwner: false,
      areaName: 'Recursos humanos'
    },
    {
      userName: 'Vitor Felipe',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
      userId: '5',
      isGoalOwner: false,
      areaName: 'Diretoria'
    },
    {
      userName: 'Rebecca Gomes',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=female',
      userId: '6',
      isGoalOwner: false,
      areaName: 'Administração'
    },
    {
      userName: 'João Vitor',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
      userId: '7',
      isGoalOwner: false,
      areaName: 'Financeiro'
    },
    {
      userName: 'Ana Betriz Silva',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=female',
      userId: '8',
      isGoalOwner: false,
      areaName: 'Diretoria'
    },
    {
      userName: 'Bruno Silva',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
      userId: '9',
      isGoalOwner: false,
      areaName: 'Diretoria'
    },
  ]
}

export const AutorOnly = Template.bind({})
AutorOnly.args = {
  avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
  hasOnlyAutor: true,
  handleClick: () => console.log('Clicou'),
  goalOwner: 
    {
      userName: 'José da Silva',
      avatarImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
      userId: '1',
      isGoalOwner: true,
      areaName: 'Tecnologia da informação',
      companyName: 'FRST Falconi',
      createData: "10"
    },
  
}


