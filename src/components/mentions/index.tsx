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
import { MentionProps } from './types';
import { useMentions } from './useMentions';

export const Mentions = (mention: MentionProps) => {
  const { filteredUsers, selectedUser, setSelectedUser } = useMentions(mention);
  return (
    <>
      <Container>
        <MentionList>
          {filteredUsers?.map((user) => {
            return (
              <MentionItem
                key={user.uuid}
                active={user.uuid === selectedUser?.uuid}
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
