import React from 'react'

import ScrollContainer from './index'
import { CardTest } from './scrollContainerStyles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/Scroll Container V2',
  component: ScrollContainer
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ScrollContainer {...args} />

export const normal = Template.bind({})
normal.args = {
  stepMove: 100,
  isVisibleControlsButtons: true,
  
  horizontalMarginInternScroll: '100px',
  verticalMarginInternScroll: '100px',
  
  marginsArrowButtonHorizontal: '100px',
  marginsArrowButtonVertical: '100px',
  
  positionArrowButton: 'mid',
  sizeArrowButton: 'large',
  handleClick: (e: any) => {
    alert(e)
  },
  className: null,
  styles: { marginLeft: '0', height: '300px' },
  children: (
    <>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
      <CardTest/>
    </>
  )
}