import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}

export const WrapperCard = styled.div<{active}>`
    display: flex;
    flex-direction: column;
    width: 282px;
    height: 445px;
    background: ${({theme, active}) => active ? theme.colors.neutralsGrey9 : theme.colors.shadeWhite};
    border-radius: 8px;

    overflow: hidden;

    &:hover{
        // background: ${({theme}) => theme.colors.neutralsGrey9};
        // border: 1px solid ${({theme}) => theme.colors.neutralsGrey5};

        box-shadow: 0px 10px 20px 7px rgb(255 255 255 / 20%);
        cursor: pointer;
    }
`

export const TagText = styled.span`
    border-radius: 0px 8px;
    /* margin-bottom: -24px; */

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    color: #FFFFFF;
`

export const WrapperBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 200px;
    max-height: 200px;
`   

    export const TagStep = styled.div<{variant}>`
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        padding: 4px 15px;
        border-radius: 0px 8px;
        
        height: 24px;
        z-index: 2 ;
        ${({variant, theme}) => getVariantTagStyle(variant, theme)};
    `
    export const BannerCard = styled.img`
        margin-top: -24px;

        margin-bottom: 0px;
        height: fit-content;
    `
    export const StepName = styled.div<{variant}>`
        font-family: 'VT323', monospace;
        font-size: 40px;
        color: white;
        -webkit-text-stroke: 0.5px black;
        text-shadow: 2px 0 0 black, 0 2px 0 black,-2px 0 0 black,0 -2px 0 black;
        
        display: flex;
        justify-content: center;
        border: 2px dashed #FFF;

        z-index: 2;
        ${({variant}) => variant != 'completed' && variant != 'srg' &&
            `margin-top: -60px;
            margin-bottom: 16px;`
        }
        padding: 0px 12px 0px 12px;
    `

export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 282px;
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.colors.neutralsGrey5};
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top: 0px;
`

export const WrapperHeader = styled.div`
    width: 100%;   
    display: flex;
    flex-direction: row;
    padding-right: 24px;
`

export const TitleProject = styled.p`
    flex: 1;
    padding: 24px;
    padding-bottom: 0px;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
`

export const Dots = styled.div`
    margin-top: 24px;

    height: fit-content;
`

export const DescriptionProject = styled.span`
    flex: 1;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    
    color: ${({theme}) => theme.colors.primary1};
    padding: 24px;
    padding-top: 16px;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
`

export const DescriptionSRG = styled.span`
    flex: 1;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    
    /* neutrals/grey_1 */
    
    color: #222222;
    
    color: ${({theme}) => theme.colors.neutralsGrey1};
    padding: 24px;
    padding-right: 25px;
    padding-top: 16px;
`

export const ButtonActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const ButtonAction = styled.div<{ variant: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 47px;
    padding: 12px;
    width: 100%;

    border-top: 1px solid ${({theme}) => theme.colors.neutralsGrey5};

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;

    color: ${({theme}) => theme.colors.linkOnfocus};

    &:nth-child(1) {
        ${({variant, theme}) => variant != 'completed' && variant != 'srg' && `
            border-right: 1px solid ${theme.colors.neutralsGrey5};
        `}
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.neutralsGrey8};
        color: ${({theme}) => theme.colors.linkHover};
    }
`

export const MyPopOver = styled.div`
    position: absolute;
    width: 130px;
    background: ${({theme}) => theme.colors.shadeWhite};

    border: 1px solid ${({theme}) => theme.colors.neutralsGrey5};
    border-radius: 4px;

    margin-left: -100px;

`



function getVariantTagStyle(variant, theme) {
    switch(variant) {
        case 'incompleteMars':
            return `
                background: rgb(117, 117, 117);
                & > span {
                    color: #FFF !important;
                }
            `
        case 'mars':
            return `
                background: ${theme.colors.linkHover};
                & > span {
                    color: #FFF !important;
                }
            `
        case 'jupiter': 
            return `
                background: #F8B911;
                & > span {
                    color: #222222!important;
                }
            `
        case 'saturn': 
        return `
            background: #663366;
            & > span {
                color: #FFF !important;
            }
        `
        case 'uranus': 
        return `
            background: #AD005C;
            & > span {
                color: #FFF !important;
            }
        `
        case 'neptune':
            return `
                background: #222222;
                & > span {
                    color: #FFF !important;
                }
            `
        case 'completed': 
            return `
                background: #158214;
                & > span {
                    color: #FFF !important;
                }
            `
    }
}