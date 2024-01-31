import React from 'react'

import ModalBase from './index'
import AudioPlayer from '../../audio-player'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal/ModalBase',
  component: ModalBase
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => {
  return <ModalBase {...args} />
}

export const ModalDefaultBase = Template.bind({})

ModalDefaultBase.args = {
  open: true,
  handleClose: () => alert('Fechando o modal'),
  title: 'Cultura da Inovação',
  language: 'en-US',
  children: (
    <AudioPlayer
    audio={'https://lxp-cdn.frstfalconi.cloud/f077ea93b532e29525910bbd9b8a5fd6.mp3'}
    startAt= {290}
    coverImage= {'https://i.gyazo.com/002fc9811582004a947a954e5c83d784.png'}
    title= {'T4:e02 - Human Made: Coragem, Criatividade e Resiliência'}
    description= {'FIRST THINGS FRST - Gente que transforma o futuro'}
    date= {'10/05/2023'}
    volume= {0.7}
    longLoading= {true}
    onProgress= {(e) => console.log('onProgress: ', e)}
    onEnded= {() => console.log('onEnded: ', 'Fim')}
    style= {{width: 814}}
    />
  )
}

export const ModalBaseRating = Template.bind({})

ModalBaseRating.args = {
  open: true,
  handleClose: () => alert('Fechando o modal'),
  title: 'Cultura da Inovação',
  language: 'en-US',
  showRating: true,
  rating: 5,
  ratingDescription: 'Avalie abaixo o quanto isso foi útil para você.',
  recommendationId: '123',
  handleChangeRating: (recommendationId, rating) => alert(`RecomendationId:${recommendationId} and Rating:${rating}`),
  children: (
    <AudioPlayer
    audio={'https://lxp-cdn.frstfalconi.cloud/f077ea93b532e29525910bbd9b8a5fd6.mp3'}
    startAt= {290}
    coverImage= {'https://i.gyazo.com/002fc9811582004a947a954e5c83d784.png'}
    title= {'T4:e02 - Human Made: Coragem, Criatividade e Resiliência'}
    description= {'FIRST THINGS FRST - Gente que transforma o futuro'}
    date= {'10/05/2023'}
    volume= {0.7}
    longLoading= {true}
    onProgress= {(e) => console.log('onProgress: ', e)}
    onEnded= {() => console.log('onEnded: ', 'Fim')}
    style= {{width: 814}}
    />
  )
}
