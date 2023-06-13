import React, { Children } from 'react'

import AccordionList from './index'
import { ThumbListContent } from '../../../../index'

export default {
  title: 'LXP/AccordionList',
  component: AccordionList
}
const Template = (args) => <AccordionList {...args} />

export const single = Template.bind({})
single.args = {
  title: 'Módulo 1',
  isOpen: false,
  setIsOpen: () => alert('salve'),
  children: (
    <>
      <ThumbListContent
        title="aula1"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula1"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula1"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula1"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula1"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
    </>
  )
}
