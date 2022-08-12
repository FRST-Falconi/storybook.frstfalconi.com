import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

export const WrapperCard = styled.div`
    width: 343px;
    min-height: 136px;
    background-color: ${({ theme }) => theme.colors.neutralsGrey4};
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 8px;

    &:hover { 
        background-color: ${({ theme }) => theme.colors.shadeWhite};
    }
`

export const WrapperTitle = styled.div`
    margin-top: 26px;
    margin-left: 26px;
    display: flex;
    align-items: center;
`

export const TitleCard = styled.p`
    ${({theme}) => theme.fonts.textMessageComponentsBodyBold};
`

export const WrapperButton = styled.div`
    margin-top: 26px;
    margin-left: 26px;
    display: flex;
    align-items: center;
    ${({theme}) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({theme}) => theme.colors.linkOnfocus} !important;
`