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
    users: mentionUserList,
    replyMentionedUser: {
        "user_uuid": "8735edca-e00c-11ec-8e40-0a3879a705c9",
        "user_email": "abadia.ribeiro@eletronorte.gov.br",
        "slug": "abadiaribeiroeletronortegovbr",
        "name": "Edilson Augusto de Andrade",
        "profile": {
            "uuid": "8735edca-e00c-11ec-8e40-0a3879a705c9",
            "first_name": "Edilson",
            "last_name": "Edilson Ribeiro De Souza",
            "email": "abadia.ribeiro@eletronorte.gov.br",
            "phone": "",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "78da5040-e393-4ae7-b6f7-c8aafbe045a0",
            "area_name": "Outro",
            "role_uuid": "1aa1ef3b-c9d1-4bf6-af34-d531f312fb07",
            "role_name": "Outro(a)",
            "company_uuid": "a61db098-0956-458c-9306-db8d3ccfc889",
            "company_name": "Centrais Eletricas Brasileiras SA | Eletrobras"
        }
    },
    group_uuid: 'b1005836-b0a6-4a50-8147-537ebdc64a75'
}
