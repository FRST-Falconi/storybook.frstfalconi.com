import React from 'react'

import SelectFRST from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/Select',
  component: SelectFRST
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SelectFRST {...args} />

export const normal = Template.bind({})
normal.args = {
  placeholder: 'placeholder',
  valueSelect: 'primeiro',
  handleValueSelect: (e) => alert(e),
  listItems: ['primeiro', 'segundo', 'terceiro', 'quarto']
}
