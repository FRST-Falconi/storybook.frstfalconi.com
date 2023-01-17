import styled from "styled-components";

interface content{
    showText: boolean
}

export const containerThumbContent = styled.div`
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    position: relative;
    min-width: 250px;
    height: auto;
    cursor: pointer;

    border: 1px solid ${({theme}) => theme.colors.borderPrimary};
    
    background-color: ${({theme}) => theme.colors.shadeWhite};
`

export const loadingImageThumb = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #D9D9D9;
    -webkit-animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;
`

export const iconsThumb = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${({theme}) => theme.colors.primary1};
`

export const imageThumbContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    background-repeat: no-repeat ;
    background-size: cover;
`

export const loadingThumbContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 16px 16px 16px 16px;
    gap: 4px;
`

export const loadingContent = styled.div`
    background: linear-gradient(90deg, rgba(123, 129, 136, 0) 6.43%, rgba(123, 129, 136, 0.2) 22.38%), #D9D9D9;
    color: transparent;
    border-radius: 16px;
    
    -webkit-animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;
`

export const infoThumbContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 16px 16px 32px 16px;
    gap: 4px;
    font-family: 'PT Sans';
    word-break: break-word;
`

export const descriptionThumbContent = styled.div<content>`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.shadeBlack};

    overflow: hidden;
    text-overflow: ${ props => props.showText ? 'none' : 'ellipsis'};
    display: ${ props => props.showText ? 'flex' : '-webkit-box'};
    -webkit-line-clamp: ${ props => props.showText ? 'none' : 3};
    -webkit-box-orient: ${ props => props.showText ? 'none' : 'vertical'};
`

export const viewMoreContent = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0px 16px 12px 0px;
    user-select: none;
`