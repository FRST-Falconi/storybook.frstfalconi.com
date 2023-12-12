import { MentionProps } from '.';
import {
  Container,
  MentionAvatar,
  MentionItem,
  MentionList,
  MentionSubTitle,
  MentionSubTitleText,
  MentionUserContainer,
  MentionUserName
} from './mentionStyle';
import { useMentions } from './useMentions';

export const Mentions = (mention: MentionProps) => {
  const { filteredUsers, selectedUser, setSelectedUser, mentionListRef } = useMentions(mention);
  const { top } = mention;



  return (
    <>
      <Container top={top} tabIndex={0}>
        <MentionList tabIndex={1} ref={mentionListRef}>
          {filteredUsers?.map((user, index) => {
            return (
              <MentionItem
                tabIndex={index += 2}
                key={user.uuid}
                active={user.uuid === selectedUser?.uuid}
                onMouseDown={() => setSelectedUser(user)}
                onKeyUpCapture={(e) => {
                  if (e.key.toLowerCase() === 'enter') {
                    setSelectedUser(user)
                  }
                }}
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
      </Container >
    </>

  )
}
