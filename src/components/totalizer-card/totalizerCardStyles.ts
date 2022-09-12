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
    width: auto;
    min-height: auto;

    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    padding: 20px;
    ${({hasShadow}) => hasShadow && 'box-shadow: 0px 18px 40px -15px #D3D3D3'};
`

export const TitleCard = styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    color: #F55E0E;
    margin-top: 3px;
    margin-left: 5px;
`

export const TitleCardLoading = styled.div`
    height: 22px;
    width: 100px;
    border-radius: 8px;

    margin-top: 3px;
    margin-left: 5px;
`


export const AreaCounter  = styled.div`
    margin-top: 36px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
`

export const TotalText = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    color: #222222;
`

export const TotalLoading = styled.div`
    margin-top: 36px;
    margin-left: 5px;
    height: 50px;
    width: 100px;
    border-radius: 10px;
`

export const TotalNumber = styled.p`
    font-family: 'Work Sans' ;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;

    color: #222222;
    margin-top: -13px;
`

export const PartialNumber = styled.p`
    font-family: 'Work Sans' ;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 56px;

    color: #222222;
`