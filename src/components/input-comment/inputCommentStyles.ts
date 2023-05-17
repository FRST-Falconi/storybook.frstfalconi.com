import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

interface Wrapper {
    disabled?: boolean,
    focus?: boolean
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
    align-items:flex-end;
    width: 100%;
    min-height: 48px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};

    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    border-radius: 24px;

    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.shadeBlack};
    }

    ${({ focus, theme }) => focus &&  
        `border: 1px solid` + theme.colors.primary1 + " !important;"
    }
`

export const InputText = styled.textarea<TextArea>`
    display: flex;
    align-items: center;

    width: 100%;
    height: ${({height}) => height || '20px' };
    outline: 0;
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.02em;
    
    overflow: hidden;
    resize: none;

    padding: 0;
    margin: 14px;
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

export const HelperText = styled.span`
    display: flex;
    position: absolute;
    align-items: center;

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    letter-spacing: -0.02em;

    color: ${({ theme }) => theme.colors.neutralsGrey2};

    margin-top: 8px;
    margin-left: 13px;
`

export const EmojiWindow = styled.div<IEmojiWindow>`
    width: 375px;
    height: 332px;
    overflow: hidden;
    display:${({ visible }) => visible ? 'flex' : 'none'};
    justify-content: center;
    top: ${({ positionEmojiWindow }) => positionEmojiWindow};
    right: -16px;
    background-color:  ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid  ${({ theme }) => theme.colors.neutralsGrey4};
    position: absolute;

    
    & > div:nth-child(1) > em-emoji-picker:nth-child(1) {
        padding: 10px;
        padding-top: 5px;
        height: 332px;
    }
`;
// transform: scale(0.845);