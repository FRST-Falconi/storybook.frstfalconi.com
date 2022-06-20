import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}


export const WrapperHeaderTabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
`

export const TitleAccordion = styled.div`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: ${({ theme }) => theme.colors.shadeBlack};
    margin-bottom: 10px;
`

export const ContainerTitleTabs = styled.div`
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const ContainerCleanAction = styled.div`
    margin-left: 10px;
    display: flex;
    height: fit-content;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
`

export const TextClean = styled.span`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    padding-left: 8px;

    color: ${({ theme }) => theme.colors.linkOnfocus};
`

export const TitleTabWrapper = styled.div<({typeButton: string, status: boolean})>`
    display: flex;
    flex-direction: row;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    color: ${({ theme }) => theme.colors.linkOnfocus};
    padding-right: 16px;
    padding-bottom: 16px;
    cursor: pointer;

    

    ${({ typeButton, status }) => 
    (typeButton == 'filled') ? (status == true ? 'background-color: #fff; margin-bottom: -1px;' : 'background-color: #bdbdbd') : null};
`

export const TextTotalTab  = styled.div`
    margin-left: 2px;
    margin-right: 2px;
    color: #FF4D0D;
`

export const TextTitleTab  = styled.div`
    white-space: nowrap;
`




export const WrapperContent  = styled.div<({status: boolean})>`

    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.linkDisabled};
    padding-top: 30px;
    padding-bottom: 25px;
    
    transition: transform 1s;

    ${({status}) => status ? 'height: auto; padding-top: 30px; padding-bottom: 25px;': 'max-height: 0px; padding-top: 0px; padding-bottom: 0px;'};
    overflow: hidden;
`

export const DropIcon = styled.div<({status: boolean})>`
    margin-left: 2px;
    transform: rotate(${({status}) => status ? '180deg': '0deg'});
    transition: transform 0.3s;
    transition: all 0.2s ease-in-out;
`



export const AvatarImg = styled.img<AvatarI>`
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
    border-radius: 50%;
    object-fit: cover;

    ${({ disabled }) => disabled === true && `
        filter: grayscale(100%);
    `}
`

export const AvatarWrapper = styled.div<AvatarI>`
    width: ${props => props.size || '120px'};
    height: ${props => props.size || '120px'};
`

export const TitleCurrentTabOpened = styled.p`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    margin-bottom: 10px;
`