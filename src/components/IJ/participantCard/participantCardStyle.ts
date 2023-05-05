import styled from 'styled-components'

interface ParticipantCardI {
  size?: string
  src?: any
  disabled?: boolean
}

interface ITag {
  status: string
  isPressed: boolean
}
interface ICardParticipant {
  status: string
}

interface IClickArea {
  isPressed: boolean
  status: string
}
const activeStatus = 'Cadastrado'
const inactiveStatus = 'Inativado'

export const WrapperCard = styled.div<ICardParticipant>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  background: ${(props) => (props.status == activeStatus ? '#fff' : '#BDBDBD')};

  border-radius: 10px;
  padding-bottom: ${(props) => (props.status == inactiveStatus ? '30px' : '7px')};

  :hover {
    cursor: pointer;
  }
`

export const TagArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px 0px 5px;
`

export const ClickArea = styled.div<IClickArea>`
  background-color: ${(props) => props.status !== inactiveStatus && props.isPressed && '#FCE4CC'};
  border-radius: 10px 10px 0px 0px;
  padding-bottom: 10px;
  min-height: 150px;
`

export const TagStatus = styled.div<ITag>`
  background-color: ${(props) =>
    (props.isPressed && props.status === activeStatus && '#2CA92A') ||
    (props.status === activeStatus && '#398787') ||
    (props.status === inactiveStatus && '#222222')};
  color: ${(props) => (props.status !== inactiveStatus && '#fff') || '#D3D3D3'};
  font-weight: 300;
  border-radius: 4px;
  max-width: 120px !important;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AccordionList = styled.div`
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    box-shadow: none !important;
    border-top: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 0px !important;
    padding: 0px 10px;
  }

  #panel1bh-content {
    margin-top: -5px;
  }

  .Mui-expanded {
    margin: 0px !important;
    background-color: #f7f9fc !important;
  }
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
  padding: 0px 25px;
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
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #9c9c9c;
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
  padding: 0px 25px;
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
export const DataList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0 !important;
  line-height: 25px;
`

export const DataListItem = styled.li`
  list-style-type: none;
  margin: 0;
  font-weight: 400;
`
