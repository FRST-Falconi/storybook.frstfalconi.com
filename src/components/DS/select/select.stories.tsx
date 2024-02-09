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

export const upgraded = Template.bind({})
upgraded.args = {
  placeholder: 'placeholder',
  valueSelect: 'primeiro',
  handleValueSelect: (e) => alert(e),
  listItems: [
    <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}><div style={{width: '12px', height: '12px', borderRadius: '100%', background: '#2CA92A'}}></div> primeiro</div>,
    <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}><div style={{width: '12px', height: '12px', borderRadius: '100%', background: '#222222'}}></div> segundo</div>,
    <div style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}><div style={{width: '12px', height: '12px', borderRadius: '100%', background: '#A50000'}}></div> terceiro</div>
  ]
}

export const disabled = Template.bind({})
disabled.args = {
  placeholder: 'placeholder',
  valueSelect: 'primeiro',
  handleValueSelect: (e) => alert(e),
  listItems: ['primeiro', 'segundo', 'terceiro', 'quarto'],
  disabled: true
}