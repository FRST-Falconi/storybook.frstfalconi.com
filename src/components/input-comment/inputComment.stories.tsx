import React from 'react'

import InputComment from './index'
import { mentionUserList } from './mention.mocks'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Input Comment',
    component: InputComment,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputComment {...args} />

export const normal = Template.bind({})
normal.args = {
    placeholder: 'Enter text here...',
    disabled: false,
    remain: 20,
    limit: 1000,
    onChange: (e: any) => { console.log(e) },
    onContentUnformat: ((unformattedValue: string) => console.log(unformattedValue)),
    onContentFormat: ((formattedValue: string) => console.log(formattedValue)),
    onSendMentions: (mentions: string[]) => console.log(mentions.join(' ')),
    className: null,
    hasEmoji: true,
    showCharacterCounter: true,
    styles: { margin: '0 0 0 0' },
    emojiWindowlanguage: 'pt',
    users: mentionUserList
}
