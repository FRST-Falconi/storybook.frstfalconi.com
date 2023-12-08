import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { Mentions } from '.'
import InputComment from '../input-comment'
import { MentionProps, User } from './types'
export default {
  title: 'First Interactive/Mentions',
  component: Mentions,
  argTypes: {
    users: {
      description: 'Users',
      control: {
        type: 'object'
      }
    }
  }
} as Meta

const Template: Story<MentionProps> = (args) => {
  const [showMention, setShowMention] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div style={{ width: '532px', background: 'transparent' }}>
      <InputComment
        placeholder="Enter text here..."
        className=""
        IDInput="input-comment"
        limit={1000}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === '@') {
            setShowMention(true)
          }
        }}
        onChange={(inputText) => {
          if (inputText === '') setShowMention(false);
          setInputSearch(inputText)
          setSelectedUser(null);
        }}
        hasEmoji={true}
        showCharacterCounter={true}
        styles={{ margin: '0 0 0 0' }}
        emojiWindowlanguage="pt"
        user={selectedUser}
      >
        {showMention && <Mentions {...args} inputSearch={inputSearch} onSelect={(user: User) => {
          setShowMention(false)
          setSelectedUser(user)

        }} />}
      </InputComment>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  users: [
    {
      uuid: 1,
      name: 'João',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 2,
      name: 'Maria',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 3,
      name: 'José',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 4,
      name: 'Pedro',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 5,
      name: 'Paulo',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 6,
      name: 'Paula',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 7,
      name: 'Joana',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 8,
      name: 'Joaquim',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: 9,
      name: 'Joaquina',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    }
  ]
}
