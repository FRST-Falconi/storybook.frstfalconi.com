import { style } from '@mui/system'
import styled from 'styled-components'

interface ICommentaryBox {
    size?: string,
    src?: any,
    disabled?: boolean,
    isVisible?: boolean,
    isLastItem?: boolean,
    isMe?: boolean,
}

export const HeaderWrapper = styled.div`
    display: flex;
    margin-top: 14px;
    margin-left: 14px;
    margin-right: 14px;

    min-height: 40px;
    flex-direction: row;
    max-width: 100%;
`

export const IdentificationWrapper = styled.div`
    flex: 4;
`

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center
`

export const Name = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.primary1};
`

export const DividerDot = styled.div`
    display: flex; 
    margin-left: 8px;
    margin-right: 8px;
`

export const EyeOffIcon = styled.div`
display: flex; 
min-width: 14.67px;
`

export const IsMe = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
`

export const CommentPrivate = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    margin-left: 8px;
`

export const Position = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
`

export const Date = styled.div`
    display: flex;
    justify-content: flex-end;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin-right: 11px;
    color: ${({ theme }) => theme.colors.neutralsGrey2};
`

export const ButtonMore = styled.div`
    display: flex;
    cursor: pointer;
    height: 14px;
    align-items: center;
    z-index: 10;
`

export const Dropdown = styled.div`
    width: auto;
    height: auto;
`

export const DropdownWrapper = styled.div<ICommentaryBox>`
    display: flex;
    flex-direction: column;
    visibility: ${(props:any)  => props.isVisible ? 'visible' : 'hidden'};
    opacity:${(props:any)  => props.isVisible ? '1' : '0'};
    position: absolute;
    width: 210px;
    background-color: gray;   
    margin-top: 5px;
    margin-left: -185px;
    transition:visibility 0.3s ease-in-out,opacity 0.3s ease-in-out;

    background: ${({ theme }) => theme.colors.shadeWhite};

    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};

    box-shadow: 0px 18px 40px -15px #D3D3D3;
    border-radius: 8px 0px 8px 8px;
    overflow: hidden;
    z-index: 9;
`

export const ItemDrop = styled.div<ICommentaryBox>`
    display: flex;
    padding: 11px;
    padding-left: 16px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    border-bottom: ${(props:any)  => props.isLastItem ? 'transparent' : '1px solid #EBEBEB'};
    
    &:hover { 
        background-color: ${({ theme }) => theme.colors.neutralsGrey5};
    }
    &:active { 
        background-color: ${({ theme }) => theme.colors.primary1 +'19'};
    }
    cursor: pointer;
`

export const CommentaryContent = styled.div`
    font-family: 'Work Sans';
    margin-top: 12px;
    margin-left: 14px;
    margin-right: 14px;
    margin-top: 12px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: -0.02em;
    
    white-space: pre-wrap
`

export const CommentaryEditingContent = styled.div`
    font-family: 'Work Sans';
    margin-top: 12px;
    margin-left: 14px;
    margin-right: 14px;
    margin-top: 12px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: -0.02em;

    white-space: pre-wrap
`

export const IterationsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 14px;
`

export const IterationsButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
`

export const LikesStatistics = styled.div`
    display:flex;
    flex-direction: row;
`

export const TextTotalLikes = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    margin-left: 6px;
`

export const FooterEditingWrapper = styled.div`
    display: flex;
    align-self: flex-end;
    margin: 14px;
    width: 296px;
    justify-content: space-between;
`

export const LinkButton = styled.a`
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodBold};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.linkDefaultOnfocus};
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    margin-left: 12px;
    margin-right: 12px;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.02em;

    &:hover { 
        color: ${({ theme }) => theme.colors.linkHover};
    }

    &:active { 
        color: ${({ theme }) => theme.colors.black};
    }

    &:focus { 
        color: ${({ theme }) => theme.colors.linkDefaultOnfocus};
    }
`

export const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

/*border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};*/