import React from 'react'

import EmojiPicker from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Emoji Picker',
    component: EmojiPicker,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <EmojiPicker {...args} />

export const normal = Template.bind({})
normal.args = {
    isOpenPicker:true,
    setIsOpenPicker: () => {},
    onEmojiSelect: () => {},
    configPicker: {
        title: 'FRST FALCONI',
        perLine: 10,
        sheetSize: 8,
        language: 'pt'
    }
}