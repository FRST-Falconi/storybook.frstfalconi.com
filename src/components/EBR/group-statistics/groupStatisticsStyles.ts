import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

export const AvatarImg = styled.img<AvatarI>`
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
    border-radius: 50%;
    object-fit: cover;

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`

export const CardWrapper = styled.div<{hasShadow}>`
    width: 100%;
    min-height: 154px;
    padding: 24px;

    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #BDBDBD;
    border-radius: 8px;
    padding: 20px;
    ${({hasShadow}) => hasShadow && 'box-shadow: 0px 18px 40px -15px #D3D3D3'};
`

export const FeaturedNumber = styled.p`
    font-family: 'Work Sans' ;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    color: #222222;
`

export const DescriptionStatistics = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FF4D0D;
`
export const ItemStatistics = styled.div<({hasDivider, index, isNamedGrid, twoRows})>`

    grid-area: ${({index, isNamedGrid}) => isNamedGrid && index} !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-itens: flex-start;
    min-height: 106px;
    max-width: 272px;
    padding: 0px 24px 0px 24px;
    margin-top: ${({twoRows}) => twoRows ? '24px' : '0px'};
    ${({hasDivider, theme}) => hasDivider ? 
    'border-left: 1px solid ' + theme.colors.borderPrimary :
    'border-left: 1px solid ' + theme.colors.shadeWhite }
`