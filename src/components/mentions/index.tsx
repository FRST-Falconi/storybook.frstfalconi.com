import { useEffect, useState } from 'react'
import {
  Container,
  MentionAvatar,
  MentionItem,
  MentionList,
  MentionSubTitle,
  MentionSubTitleText,
  MentionUserContainer,
  MentionUserName
} from './mentionStyle'

export interface User {
  id: number
  name: string
  avatar: string
  subTitle: string
}
export interface MentionProps
  extends Readonly<{
    users: User[]
    height: number,
    width: number,
    onSelect: (user: User) => void
    inputSearch?: string
  }> { }

export const Mentions = (mention: MentionProps) => {
  const { onSelect, users, inputSearch } = mention;
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const mentionRegexKey = /@(\w+)/;
  const match = mentionRegexKey.exec(inputSearch || '');
  const userName = match ? match[1] : null;

  let filteredUsers = userName ? users.filter((user) => user.name.toLowerCase().includes(userName?.toLowerCase())) : users

  useEffect(() => {
    if (!selectedUser) return;

    onSelect(selectedUser)
  }, [selectedUser])
  return (
    <>
      <Container>
        <MentionList>
          {filteredUsers?.map((user) => {
            return (
              <MentionItem
                key={user.id}
                active={user.id === selectedUser?.id}
                onMouseDown={() => setSelectedUser(user)}
              >
                <MentionAvatar src={user.avatar} />
                <MentionUserContainer>
                  <MentionUserName>{user.name}</MentionUserName>
                  <MentionSubTitle>
                    <MentionSubTitleText>{user.subTitle}</MentionSubTitleText>
                  </MentionSubTitle>
                </MentionUserContainer>
              </MentionItem>
            )
          })}
        </MentionList>
      </Container>
    </>

  )
}
