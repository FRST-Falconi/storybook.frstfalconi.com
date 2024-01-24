import styled, { css } from 'styled-components'


interface IButton {
    disabled?: boolean
    variant: string
    active?: boolean
    isTooltipActive?: boolean
}

export const Button = styled.div<IButton>`
    ${({variant, disabled,active, theme, isTooltipActive}) => {
        
        let styleVariant = {
            'primary': css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 4px 16px;
                    gap: 8px;
                    width: fit-content;
                    height: 32px;
                    background: ${disabled ? '#BDBDBD' : '#F26818'};
                    border-radius: 8px;
                    cursor: ${disabled ? 'default' : 'pointer'};
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 19px;
                    display: flex;
                    align-items: center;
                    color: ${({theme}) => theme.colors.shadeWhite};
                    user-select:none;
                    &:hover {
                        background: ${disabled ? '#BDBDBD' : '#D14211'};
                    }
                `,
            'secondary': css`
                    font-family: 'PT Sans';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    width: fit-content;
                    color: ${({theme}) => disabled ? theme.colors.borderPrimary : theme.colors.neutralsGrey2};
                    cursor: pointer;
                    user-select:none;
                    &:hover {
                        color: ${({theme}) => disabled ? theme.colors.borderPrimary : theme.colors.messageError1};
                    }
                    &:active {
                        color: ${({theme}) => disabled ? theme.colors.borderPrimary : theme.colors.secondary5};
                        text-decoration: underline;
                    }
                    ${active && `color : ${theme.colors.primary1}` }
                `,
                'terciary': css`
                font-family: 'PT Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                width: fit-content;
                display: inline-flex;
                padding: 4px;
                align-items: center;
                border-radius: 8px;


                color: ${({theme}) => disabled ? theme.colors.borderPrimary : theme.colors.neutralsGrey2};
                cursor: pointer;
                user-select:none;
                &:hover {
                    background-color:  ${({theme}) => disabled ? theme.colors.borderPrimary : theme.colors.neutralsGrey9};
                }
                &:active {
                    color: ${({theme}) => disabled ? theme.colors.borderPrimary : theme.colors.neutralsGrey1};
                    background-color:  ${({theme}) => disabled ? theme.colors.borderPrimary : theme.colors.neutralsGrey9};
                }
                ${active && `color : ${theme.colors.primary1}` }
            `,
            'active-primary': css`
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 4px 16px;
            gap: 8px;
            width: fit-content;
            height: 37px;
            background: ${({theme}) => disabled? theme.colors.borderPrimary : theme.colors.shadeWhite};
            border-radius: 8px;
            border: solid 2px ${({theme}) => disabled? theme.colors.borderPrimary: theme.colors.primary1};
            cursor: ${disabled ? 'default' : 'pointer'};
            font-family: PT Sans;
            font-size: 16px;
            font-weight: 700;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;            
            color: ${({theme}) => disabled? theme.colors.shadeWhite : theme.colors.primary1};
            &:hover {
                background: ${({theme}) => disabled ? theme.colors.borderPrimary  : theme.colors.primary1};
                color:  ${({theme}) => theme.colors.shadeWhite};
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
            }

            ${(isTooltipActive || active) && `color : ${theme.colors.shadeWhite};` }
            ${(active) && `box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);` }
            ${(isTooltipActive || active) && `background : ${theme.colors.primary1};` }
            ${disabled && `background : ${theme.colors.borderPrimary};` }
            ${disabled && `color : ${theme.colors.shadeWhite};` }
        `    
        }

        return styleVariant[variant]
    }}
`