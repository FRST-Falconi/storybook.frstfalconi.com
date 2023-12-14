import { Container, MentionAvatar, MentionItem, MentionList, MentionSubTitle, MentionSubTitleText, MentionUserContainer, MentionUserName } from './mentionStyle';
import { MentionProps } from './types';
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
                key={user['user-uuid']}
                active={user['user-uuid'] === selectedUser?.['user-uuid']}
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
