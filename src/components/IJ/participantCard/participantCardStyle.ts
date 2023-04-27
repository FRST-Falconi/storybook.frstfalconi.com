import styled from 'styled-components'

interface ParticipantCardI {
  size?: string
  src?: any
  disabled?: boolean
}

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  padding: 17px;
  padding-top: 5px;

  background: ${({ theme }) => theme.colors.shadeWhite};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }
`

export const TagArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const TagStatus = styled.div`
  background-color: #398787;
  color: #fff;
  font-weight: 400;
  border-radius: 4px;
  max-width: 120px !important;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AccortionTitle = styled.span`
  color: #0645ad;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 16px;
  svg {
    margin-right: 5px;
  }
`

export const WrapperUserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
`
export const DescriptionUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
`
export const NameUser = styled.div`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;

  display: flex;
  align-items: center;

  color: #222222;
  word-break: normal;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`
export const EmailUser = styled.div`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #9c9c9c;
  margin-top: 5px;
  word-break: normal;

  max-width: 100%;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`

export const UserAdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`
export const Area = styled.div`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 110%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* neutrals/grey_1 */

  color: #222222;
  max-width: 100%;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`
export const Position = styled.div`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* or 18px */

  display: flex;
  align-items: center;

  /* neutrals/grey_1 */

  color: #222222;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`

export const FooterButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-around;
  align-items: center;
`

export const ButtonSend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  padding: 4px 16px;
  gap: 8px;

  width: 149px;
  height: 32px;

  /* primary_1 */

  background: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.shadeWhite};
  cursor: pointer;
  margin-left: -13px;
`

export const ButtonRemove = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #0645ad;
  cursor: pointer;
`

export const ButtonSuccess = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 8px;

  width: 159px;
  height: 32px;

  /* message/success_2 */

  background: #d1f6d1;
  /* message/success_1 */

  border: 1px solid #1ba853;
  border-radius: 8px;

  width: 163px;
  height: 32px;
  cursor: default;
  white-space: nowrap;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* neutrals/grey_1 */

  color: #222222;
`
