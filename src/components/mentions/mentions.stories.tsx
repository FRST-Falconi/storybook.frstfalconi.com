import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import InputComment from '../input-comment'
import { MentionProps, Mentions } from './index'
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

  return (
    <div style={{ width: '532px', background: 'transparent' }}>
      <InputComment
        placeholder="Enter text here..."
        className=""
        IDInput="input-comment"
        limit={1000}
        onChange={(e: any) => {
          if (e.target.value.includes('@')) {
            setShowMention(true)
          } else {
            setShowMention(false)
          }
        }}
        hasEmoji={true}
        showCharacterCounter={true}
        styles={{ margin: '0 0 0 0' }}
        emojiWindowlanguage="pt"
      >
        {showMention && <Mentions {...args} show={showMention} />}
      </InputComment>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  users: [
    {
      id: 1,
      name: 'João',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 2,
      name: 'Maria',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 3,
      name: 'José',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 4,
      name: 'Pedro',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 5,
      name: 'Paulo',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 6,
      name: 'Paula',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 7,
      name: 'Joana',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 8,
      name: 'Joaquim',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    },
    {
      id: 9,
      name: 'Joaquina',
      avatar: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      subTitle: 'Falconi Road of Skills and Talent'
    }
  ]
}
