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

interface User {
  id: number
  name: string
  avatar: string
  subTitle: string
}
export interface MentionProps
  extends Readonly<{
    users: User[]
    height: number,
    width: number

  }> {}

export const Mentions = (mention: MentionProps) => {
  return (
    <>
      <Container>
      <MentionList>
        {mention?.users?.map((user) => {
          return (
            <MentionItem key={user.id}>
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
