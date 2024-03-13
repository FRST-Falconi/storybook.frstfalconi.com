import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

interface Wrapper {
    disabled?: boolean,
    focus?: boolean,
    isPlaceholder?: boolean
    isInputLimit?: boolean
}

interface IEmojiWindow {
    visible?: boolean
    positionEmojiWindow?: any
}
interface TextArea {
    height?: string
        
}

export const InputWrapper = styled.div<Wrapper>`
    display: flex;
    align-items:center;
    width: 100%;
    min-height: 48px;
    position: 'relative';
    background-color: ${({ theme, isInputLimit }) => !isInputLimit ? theme.colors.neutralsGrey9: theme.colors.inputError};
    
    border-radius: 24px;

    transition: all 0.2s ease-in-out;

  

    border: ${({ theme, isPlaceholder, isInputLimit }) => isInputLimit ? `2px solid ${theme.colors.messageError3} !important` : !isPlaceholder ? `1px solid ${theme.colors.neutralsGrey5} !important`: `1px solid ${theme.colors.neutralsGrey5} !important`};
    
    &:hover {
        border: 2px solid ${({ theme, isInputLimit }) => isInputLimit ? theme.colors.messageError3 : theme.colors.neutralsGrey5} !important;
    }
    
`

export const InputText = styled.div<TextArea>`
    width: 100%;
    height: ${({height}) => height || '20px' };
    outline: 0;
    color: ${({ theme }) => theme.colors.neutralsGrey1};
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: -0.02em;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey3};
    overflow: hidden;
    background-color: inherit;
    word-break: break-word;
    
        
    padding: 0;
    margin: 10px 4px 40px 15px;
    border: none;    
`
export const InputPlaceholder = styled.div<TextArea>`
    width: 100%;
    height: ${({height}) => height || '20px' };
    outline: 0;
    color: ${({ theme}) =>  theme.colors.neutralsGrey4};
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: -0.02em;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey3};
    overflow: hidden;
    background-color: inherit;
    
        
    padding: 0;
    margin: 10px 4px 10px 15px;
    border: none;    
`
export const SmileIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    
    min-width: 40px;
    border-radius: 50%;
    background-color: transparent;
    margin: 4px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutralsGrey6};
    }
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`
export const HelperContainer = styled.div`
    position:relative;
    padding: 5px;
`
export const HelperText = styled.span<{isInputLimit?:boolean}>`
    display: flex;
    position: absolute;
    align-items: center;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    
    letter-spacing: -0.02em;

    color: ${({ theme,isInputLimit }) => isInputLimit===true ? theme.colors.messageError3 : theme.colors.neutralsGrey2};

    
    top:-30px;
    margin-left: 13px;
`

export const EmojiWindow = styled.div<IEmojiWindow>`
    width: 310px;
    height: 432px;
    overflow: hidden;
    display:${({ visible }) => visible ? 'flex' : 'none'};
    justify-content: center;
    top: ${({ positionEmojiWindow }) => positionEmojiWindow};
    right: 25px;
    background-color:  ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid  ${({ theme }) => theme.colors.neutralsGrey4};
    position: absolute;
`;
export const LimitCharsContainer = styled.div`
 display:flex;
 justify-content: flex-start;
 align-items: center;
 margin-left: 10px;
`


export const LimitCharsExceededMessage = styled.span`
    color: ${({ theme }) => theme.colors.linkError };
    font-size: 12px;
    margin-left: 5px;
`
// transform: scale(0.845);
