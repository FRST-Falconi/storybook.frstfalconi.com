import styled, { css } from 'styled-components'


interface IButton {
    disabled?: boolean
    variant: string
    active?: boolean
}

export const Button = styled.div<IButton>`
    ${({variant, disabled,active, theme}) => {
        
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
            `    
        }

        return styleVariant[variant]
    }}
`