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

export const NewAccordionList = Template.bind({});
NewAccordionList.args = {
  title: 'Módulo 1',
  isOpen: false,
  selectedItem: true,
  setIsOpen: () => alert('salve'),
  style: { maxWidth: '498px' },
  isOldAccordionList: false,
  value: 40,
  children: (
    <>
      <ThumbListContent
        title="aula1"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula2"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula3"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula4"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula5"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
    </>
  ),
};

export const NewAccordionListDarkMode = Template.bind({});
NewAccordionListDarkMode.args = {
  title: 'Módulo 1',
  isOpen: false,
  selectedItem: true,
  setIsOpen: () => alert('salve'),
  style: { maxWidth: '498px' },
  isOldAccordionList: false,
  value: 40,
  darkMode: true,
  children: (
    <>
      <ThumbListContent
        title="aula1"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula2"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula3"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula4"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
      <ThumbListContent
        title="aula5"
        tagValue="notVisualized"
        description="Uma aula muito boa"
        style={{ width: '100%' }}
      />
    </>
  ),
};

export const TwoModules = () => (
  <div>
    <NewAccordionList {...NewAccordionList.args} title="Módulo 1"  selectedItem={true} value={40}   isOpen={false}/>
    <NewAccordionList {...NewAccordionList.args} title="Módulo 2" value={100} style={{ borderTop: 'none', borderRadius: '0',   maxWidth: '498px',}}  selectedItem={false}   isOpen={false}/>
    <NewAccordionList {...NewAccordionList.args} title="Módulo 3"  value={60}  style={{ borderTop: 'none', borderRadius: '0',   maxWidth: '498px',}}  selectedItem={false}   isOpen={false}/>
  </div>
);

