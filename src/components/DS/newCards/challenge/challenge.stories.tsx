import React from 'react'

import ChallengeCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/NewCards/ChallengeCard',
  component: ChallengeCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ChallengeCard {...args} />

export const normal = Template.bind({})
normal.args = {
  selected: false,
  avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
  name: 'Beatriz Amaral Souza',
  role: 'Head de Produto',
  description: 'Alcancei a minha meta ao aumentar de 10% para 50% a utilização de ferramentas digitais pra documentação',
  lastStep: '4-proximos-passos',
  cardID: 'challenge_123',
  goalUUID: '1234',
  authorUUID: 'abc',
  userLoggedUUID: 'abc',
  group_uuid: 'b1005836-b0a6-4a50-8147-537ebdc64a75',
  type_challenge: 'original',
  isIterator: false,
  indicatorStart: 16,
  indicatorCurrent: 25,
  indicatorGoal: 20,
  impact: 4,
  relevance: 5,
  handleSelected: (e) => console.log("Selected: ", e),
  handleClickChallenge: () => alert("Challenge!"),
  handleClickPresentation: () => alert("Presentation"),
  onClickAvatar: () => alert("Profile"),
  isVisibleHeaderTypeChallenge: true,
  handleGroupExecution: (params: any) => console.log("Group execution: ", params),
  goalExecutionGroup: null,
  iteratorNumber: 1,
  isCompanyAbleGroupExecution: false,
  resultNumber: 1
}
