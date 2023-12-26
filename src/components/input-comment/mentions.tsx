import { DefaultProfile } from '../../../public/customIcons/DefaultProfile';
import { Circle, Container, MentionAvatar, MentionItem, MentionList, MentionSubTitle, MentionSubTitleText, MentionUserContainer, MentionUserName } from './mentionsStyle';
import { MentionProps } from './types';
import { useMentions } from './useMentions';

export const Mentions = (mention: MentionProps) => {
  const { selectedUser, setSelectedUser, mentionListRef } = useMentions(mention);
  const { top, users } = mention;



  return (
    <>
      <Container top={top} tabIndex={0} hide={!users || users.length <= 0}>
        <MentionList tabIndex={1} ref={mentionListRef}>
          {users?.map((user, index) => {
            return (
              <MentionItem
                tabIndex={index += 2}
                key={user.user_uuid}
                active={user.user_uuid === selectedUser?.user_uuid}
                onMouseDown={() => setSelectedUser(user)}
                onKeyUpCapture={(e) => {
                  if (e.key.toLowerCase() === 'enter') {
                    setSelectedUser(user)
                  }
                }}
              >
                {!!user.profile.avatar && !!user.profile.avatar.length ? <MentionAvatar src={user.profile.avatar} /> : <DefaultProfile />}
                <MentionUserContainer>
                  <MentionUserName>{user.name}</MentionUserName>
                  <MentionSubTitle>
                    <MentionSubTitleText>{user.profile.role_name} <Circle />{user.profile.company_name}</MentionSubTitleText>
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
