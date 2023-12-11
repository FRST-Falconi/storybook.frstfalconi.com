import { Meta, Story } from '@storybook/react'
import React, { useRef, useState } from 'react'
import { Mentions } from '.'
import InputComment from '../input-comment'
import { MentionProps, User } from './types'
export default {
  title: 'FI/Mentions',
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
  const [remains, setRemain] = useState<number>(1000);
  const divRef = useRef<HTMLDivElement>(null);
  const mentionTopPosition = `${(divRef.current?.clientHeight ?? 15) + 12}px`
  return (
    <div style={{ width: '532px', background: 'transparent' }}>
      <InputComment
        divRef={divRef}
        placeholder="Enter text here..."
        className=""
        IDInput="input-comment"
        remain={remains}
        limit={1000}
        onKeyUp={(e: KeyboardEvent) => {
          if (e.key === '@') {
            setShowMention(true)
          }
        }}
        onChange={(inputText) => {


          setRemain(1000 - inputText.length)
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
        {showMention && <Mentions {...args} top={mentionTopPosition} inputSearch={inputSearch} onSelect={(user: User) => {
          setShowMention(false)
          setSelectedUser(user)

        }} />}
      </InputComment>
    </div>
  )
}



export const InputComponentWithMentions = Template.bind({})

export const Mention: Story<MentionProps> = (args) => {
  return (
    <div style={{ width: '532px', height: '120px', background: 'transparent' }}>
      <Mentions {...args} users={args.users} />
    </div>
  )
}

Mention.args = {
  users: [
    {
      uuid: "1",
      name: 'João',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "2",
      name: 'Maria',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    }
  ]
}


InputComponentWithMentions.args = {
  users: [
    {
      uuid: "1",
      name: 'João',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "2",
      name: 'Maria',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "3",
      name: 'José',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "4",
      name: 'Pedro',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "5",
      name: 'Paulo',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "6",
      name: 'Paula',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "7",
      name: 'Joana',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "8",
      name: 'Joaquim',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      uuid: "9",
      name: 'Joaquina',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    }
  ]
}
