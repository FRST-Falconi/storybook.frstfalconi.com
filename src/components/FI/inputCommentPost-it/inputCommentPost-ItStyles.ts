import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

interface Wrapper {
    disabled?: boolean,
    active?: boolean,
    isOnEditing?: boolean
    isError?: boolean
}

interface IEmojiWindow {
    visible?: boolean
    positionEmojiWindow?: any
}
interface TextArea {
    active?: boolean
    height?: string
    isError?: boolean
}

interface IPublish {
    disabled?: boolean
}

export const InputWrapper = styled.div<Wrapper>`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey9};
    border: 1px solid ${({ theme }) => '#BDBDBD'};
    border-radius: 24px;
    ${({ isError }) => isError &&  
        `
        background-color: #FFE0E0;
        border: 1px solid #C00F00;
        `
    }
    transition: all 0.2s ease-in-out;
    &:hover {
        border: 1px solid #F26818;
    }
    ${({ active, theme, isOnEditing, isError }) => active &&  
        `border: 1px solid ${theme.colors.primary1} !important;
         height: ${isOnEditing ? 'fit-content !important' : '88px'};
         border: 2px solid  ${isError ? '#C00F00': '#757575' } !important;
         border-radius: 16px;
         flex-direction: column;
         `
    }
`

export const InputText = styled.textarea<TextArea>`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.neutralsGrey9};
    width: calc(100% - 28px);
    height: ${({height}) => height || '20px' };
    outline: 0;
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    align-self: center;
    
    overflow: hidden;
    resize: none;
    padding: 0;
    margin: 8px;
    border: none;    
    align-self: baseline;
    ::placeholder {
        padding-top: 2px;
        color: ${({ theme }) => theme.colors.neutralsGrey4};
    }
    ${({ active, theme }) => active &&  
        `
            align-items: flex-end;
         `
    }
    ${({ isError }) => isError &&  
    `
        background-color: #FFE0E0;
    `
}
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
    top: -330px;
    right: 0px;
    background-color:  ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid  ${({ theme }) => theme.colors.neutralsGrey4};
    position: absolute;
    
    & > div:nth-child(1) > em-emoji-picker:nth-child(1) {
        padding: 10px;
        padding-top: 5px;
        height: 332px;
    }
`;


export const TextLimitTx = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    /* neutrals/neutral_3 */
    color: #757575;
    margin-left: 16px
`
export const WrapperBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 90%;
    color: #FFF;
    margin-top: 22px;
`

export const CancelBtn = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    /* identical to box height, or 18px */
    text-align: right;
    /* neutrals/neutral_2 */
    color: #444444;
    cursor: pointer;
`

export const PublishBtn = styled.div<IPublish>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 16px;
    gap: 8px;
    width: 98px;
    height: 32px;
    background: ${({disabled}) => disabled ? '#BDBDBD' : '#F26818'};
    border-radius: 8px;
    cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    display: flex;
    align-items: center;
    /* shade/white */
    color: #FFFFFF;
`

export const AlertManyChars = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 16px;
    color: #923534;
    gap: 8px;
    
`

export const Or = styled.div`
    margin-left: 8px;
    margin-right: 8px;
    color: #000;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`