import styled from 'styled-components'

export const Container = styled.div<{ width?: string; height?: string }>`
    display:flex;
    width: ${({ width }) => width ? width : "100%"};
    height: ${({ height }) => height ? height : "auto"};
`;

export const Box = styled.div<{ width?: string; height?: string }>`
    width: ${({ width }) => width ? width : "100%"};
    height: ${({ height }) => height ? height : "auto"};
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 0px 16px 16px 16px;
    background-color: #f2f2f2 ;
`;

export const UserDataContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    heigth: 34px;
    margin-bottom: 8px;
`
export const Username = styled.h2`
    color: var(--neutrals-neutral-1, #222);
    font-family: PT Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    margin-bottom: 2px;
`

export const FirstChildUserData = styled.div`
    display:flex;
    justify-content: space-between;
 `

export const UserDataLastChild = styled.div`
    display:flex;
    color: ${({ theme }) => theme.colors.neutralsGrey3};
    font-family: PT Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const MenuMoreContainer = styled.div`
  border-radius: 8px;
  height: 32px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  padding: 4px;
  
  &:hover {
    background-color: #f2f2f2;
  }

`;

export const LikesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #444;
    font-family: PT Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
`

export const IconLikeContainer = styled.div`
    & > *:last-child {
    border-radius: 50%;
    background-color: #757575;
    border: 3px solid #757575;
    width: 14px;
    height: 14px;
`
export const RelationContainer = styled.div`
    display: flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 8px 0px;
    border-radius: 4px;
    background: #9CA3AF;
    color: #FFFFFF;
    font-family: PT Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`


export const InteractiveButtonsContainer = styled.div`
    display:flex;
    flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha */
    gap:4px;
    margin-top: 4px;
    margin-left: 40px;
    align-items: center;
    color: #444;
    font-family: PT Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    & > *:last-child {
        height:24px;
        transform: rotate(90deg);
      }
`

export const FlexButtonContainer = styled.div<IButton>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:4px;
    gap:4px;
    border-radius: 8px;
   
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutralsGrey9};
    }
        svg {
            :hover {
                fill:${({ theme }) => theme.colors.neutralsGrey9};
                background-color: ${({ theme }) => theme.colors.neutralsGrey9};
            }
            :active {
                stroke:${({ theme }) => theme.colors.neutralsGrey1};
                background-color:  ${({ theme }) => theme.colors.neutralsGrey9};
            }
        }
`

export const Text = styled.div`
    color: #444;
    font-family: Work Sans;
    font-weight: 400;
    line-height: 140%;
    font-size: 16px;
    font-style: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    margin: 0;
`

export const TextContainer = styled.div`
`
export const ShowMore = styled.span<{ isVisible: boolean }>`
    color: ${({ theme }) => theme.colors.neutralsGrey2};
    font-family: Work Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    cursor: pointer;
    display: ${({ isVisible }) => (isVisible ? 'inline' : 'none')};
`;

interface IButton {
    disabled?: boolean
}