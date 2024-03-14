import React from 'react'

import ModalNewFeatures from './index'

export default {
  title: 'LXP/ModalNewFeatures',
  component: ModalNewFeatures
}

const Template = (args) => <ModalNewFeatures {...args} />

export const ModalNewFeaturesNormal = Template.bind({})
ModalNewFeaturesNormal.args = {
  title: 'Novidades',
  open: open,
  onClose: () => alert('Modal Fechado'),
  onCurrentStep: () => alert('Modal Proximo'),
  onFinish: () => alert('salvar, aparecer só uma vez'),
  Exit:'X',
  steps: [
    {
      title: 'titulo do Topico 1',        
      topicName: 'Oficina de Desafios',
      midia: 'https://player.vimeo.com/video/836574158?h=0aa0de5905&autoplay=1',
      typeMidia: 'video',
      description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate fuga voluptatibus cumque est quascupiditate earum odit ex eligendi ab. Veritatis itaque pariatur cumque dolores ullam ea at modi recusandae!'
    },
    {
      styleImage:{objectFit:'scale-down', objectPosition: "left", marginLeft:"20px" },
      title: 'titulo do topico 2',
      topicName: 'Topico 2',
      midia:
        'https://cdn-images.frstfalconi.cloud/page_perfile.png',
      description:
        <p>Lorem ipsum dolor <a href="https://www.google.com" style={{color:"black", fontWeight:"bold", textDecoration:"none"}}>link</a></p>
    },
    {
      title: 'titulo do topico 3',
      topicName: 'Topico 3',
      midia: 'https://st.depositphotos.com/1743476/2267/i/600/depositphotos_22675279-stock-photo-businesswoman.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate fuga voluptatibus cumque est quascupiditate earum odit ex eligendi ab. Veritatis itaque pariatur cumque dolores ullam ea at modi recusandae!'
    },
    {
      title: 'titulo do Topico 4',
      topicName: 'Topico 4',
      midia: 'https://player.vimeo.com/video/836574158?h=0aa0de5905&autoplay=1',
      typeMidia: 'video',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate fuga voluptatibus cumque est quascupiditate earum odit ex eligendi ab. Veritatis itaque pariatur cumque dolores ullam ea at modi recusandae!'
    },
    {
      title: 'titulo do topico 5',
      topicName: 'Topico 5',
      midia:
        'https://www.sydle.com/api/1/blog/com.sydle.site/blogFacade/images/e-business-612541b6b060f57604938af9/e-business.jpg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate fuga voluptatibus cumque est quascupiditate earum odit ex eligendi ab. Veritatis itaque pariatur cumque dolores ullam ea at modi recusandae!'
    },
    {
      title:
        'titulo do topico 6 titulo do topico 6 titulo do topico 6 titulo do topico 6 titulo do topico 6 titulo do topico 6',
      topicName: 'Topico 6',
      midia: 'https://cdn-images.frstfalconi.cloud/CfFj.gif',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate fuga voluptatibus cumque est quascupiditate earum odit ex eligendi ab. Veritatis itaque pariatur cumqtaque pariatur  cumque dolores ullam ea at modi recusandae! cumque dolores ullam ea at modi recusandae!'
    }
  ]
}
