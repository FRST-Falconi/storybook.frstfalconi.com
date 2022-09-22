import React from 'react'

import Button from '../../buttons'
import ButtonGroup from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'EBR/ButtonGroup',
    component: ButtonGroup,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonGroup {...args} />

export const vertical = Template.bind({})
vertical.args = {
    active: '1',
    children: [
        <Button value="1" label="Setembro/22" disabled={false} handleClick={() => { alert('Click') }} />,
        <Button value="2" label="Junho/22" disabled={false} handleClick={() => { alert('Click') }} />,
        <Button value="3" label="Março/22" disabled={false} handleClick={() => { alert('Click') }} />
    ]
}