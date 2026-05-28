import styled, { css } from 'styled-components'

const mentionLinkStyles = css<{ $primaryColor?: string }>`
    a[data-mention-id] {
        font-weight: bold !important;
        color: ${({ $primaryColor, theme }) => $primaryColor || theme.colors.primary1} !important;
        text-decoration: none;
    }
`

export const Container = styled.div<{ width?: string; height?: string; $versionFeed?: boolean }>`
    display: flex;
    gap: ${({ $versionFeed }) => ($versionFeed ? '12px' : '0')};
    width: ${({ width }) => width ? width : "100%"};
    height: ${({ height }) => height ? height : "auto"};
`;

export const Box = styled.div<{ width?: string; height?: string; darkMode?: boolean }>`
    width: ${({ width }) => width ? width : "100%"};
    height: ${({ height }) => height ? height : "auto"};
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 0px 16px 16px 16px;
    background-color: ${({darkMode}) => darkMode ? '#272727' : '#f2f2f2'} ;
`;

export const UserDataContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 34px;
    margin-bottom: 8px;
`
export const Username = styled.h2<{darkMode?: boolean}>`
    color: ${({theme, darkMode}) => darkMode ? theme.colors.shadeWhite : theme.colors.neutralsGrey1 };
    font-family: Poppins, sans-serif;
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

export const UserDataLastChild = styled.div<{darkMode?: boolean}>`
    display: flex;
    color: ${({ theme, darkMode }) => darkMode ? theme.colors.neutralsGrey4 : theme.colors.neutralsGrey3};
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const MenuMoreContainer = styled.div<{darkMode?: boolean}>`
  border-radius: 50%;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  
  &:hover {
    background-color: ${({ darkMode }) => darkMode ? '#323232' : '#f2f2f2'};
  }

`;

export const LikesContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #444;
    font-family: Poppins, sans-serif;
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
    }
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
    font-family: Poppins, sans-serif;
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
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    & > *:last-child {
        /* height:24px; */
        transform: rotate(90deg);
      }
`

export const FlexButtonContainer = styled.div<IButton>`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 100px;
   
    &:hover {
        background-color: ${({ theme, darkMode }) => darkMode ? '#272727' : theme.colors.neutralsGrey9};
    }
    svg {
        :hover {
            /* fill:${({ theme }) => theme.colors.neutralsGrey9}; */
            /* background-color: ${({ theme, darkMode }) => darkMode ? 'red' : theme.colors.neutralsGrey9}; */
        }
        :active {
            /* stroke:${({ theme }) => theme.colors.neutralsGrey1};
            background-color:  ${({ theme }) => theme.colors.neutralsGrey9}; */
        }
    }
`

export const Text = styled.div<{ darkMode?: boolean; $primaryColor?: string }>`
    color: ${({theme, darkMode}) => darkMode ? theme.colors.neutralsGrey5 : theme.colors.neutralsGrey2};
    font-family: Poppins, sans-serif;
    font-weight: 400;
    word-break: break-word;
    line-height: 140%;
    font-size: 16px;
    font-style: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    margin: 0;

    ${mentionLinkStyles}
`

export const TextContainer = styled.div`
`
export const ShowMore = styled.span<{ isVisible: boolean; darkMode?: boolean }>`
    color: ${({ theme, darkMode }) => darkMode ? theme.colors.neutralsGrey5 : theme.colors.neutralsGrey2};
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    cursor: pointer;
    display: ${({ isVisible }) => (isVisible ? 'inline' : 'none')};
`;

interface IButton {
    disabled?: boolean
    darkMode?: boolean
}

export const FeedBody = styled.div`
    flex: 1;
`

export const FeedBubble = styled.div`
    background: ${({ theme }) => theme.colors.neutralsGrey6};
    border-radius: 16px;
    border-top-left-radius: 4px;
    padding: 14px;
    transition: background-color 0.2s ease;
    width: 100%;

    &:hover {
        background: #f5f5f5;
    }
`

export const FeedHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 6px;
    gap: 8px;
`

export const FeedAuthor = styled.p`
    margin: 0;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
`

export const FeedTime = styled.p`
    margin: 2px 0 0;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.neutralsGrey3};
`

export const FeedRelationText = styled.span`
    margin: 0 0 6px;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #FFFFFF;
    background-color: #9CA3AF;
    border-radius: 4px;
    padding: 2px 8px;
`

export const LikeBadge = styled.div<{ $primaryColor: string }>`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 8px;
    flex-shrink: 0;
    background: ${({ $primaryColor }) => `${$primaryColor}1a`};
    color: ${({ $primaryColor }) => $primaryColor};
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 12px;
`

export const FeedText = styled.div<{ $primaryColor?: string }>`
    color: ${({ theme }) => theme.colors.neutralsGrey2};
    font-family: Poppins, sans-serif;
    font-weight: 400;
    word-break: break-word;
    line-height: 1.5;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    margin: 0;

    ${mentionLinkStyles}
`

export const FeedActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 8px;
    margin-left: 12px;
    align-items: center;

    & > *:last-child {
        transform: rotate(90deg);
    }
`

export const FeedAction = styled.button<{ $primaryColor: string; $highlight?: boolean }>`
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: ${({ theme, $primaryColor, $highlight }) =>
        $highlight ? $primaryColor : theme.colors.neutralsGrey3};
    transition: color 0.2s ease;

    &:hover {
        color: ${({ $primaryColor }) => $primaryColor};
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`