import styled from 'styled-components'

interface ISearchField {
    isHover?: boolean,
    isOnFocus?: boolean,
    isMobile?: boolean,
}


export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LabelField = styled.label<ISearchField>`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    margin-bottom: 16px;

    color: ${({ theme }) => theme.colors.shadeBlack};

    color: ${({ theme, isHover }) => isHover && theme.colors.linkOnfocus};
    
    color: ${({ isOnFocus }) => isOnFocus &&  '#663366' }    
`

export const ContainerIcon = styled.div`
    z-index: 10;
    cursor: pointer;
    min-height: 20px;
    min-width: 40px;
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 3px;
`

export const InputSearchWrapper = styled.div<ISearchField>`
    height: 48px;
    background-color: ${({isOnFocus}) => isOnFocus ? '#757575' : '#444'};

    border-radius: 8px;
    
    cursor: pointer;
    display: flex;
    align-items: center;
    width: ${({isMobile}) => isMobile ? '0px !important' : 'auto'};
    border: ${({isMobile}) => !isMobile ? '1px' : '0px'} solid ${({isHover, theme}) => isHover ? theme.colors.shadeBlack : '#000'};  
    transition: width 1s ease-in-out;
`

export const InputText = styled.input`
    margin-left:10px;
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
    border: none;
    background: transparent;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.shadeWhite};

    &::placeholder {
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        backgorund-color: #FFF;
        color: ${({ theme }) => theme.colors.shadeWhite};
    }

    &[disabled] {
        cursor: not-allowed;
    }
`

export const WrapperResults = styled.div<{isVisibleResults}>`
    position: absolute;
    top: 48px;
    display: ${({isVisibleResults}) => isVisibleResults ? 'flex': 'none'};
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.shadeWhite};
    border: 1px solid #BDBDBD;
    box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
    z-index: 10000;
    overflow: hidden;
`
    export const ItemResult = styled.div`
        width: 100%;
        cursor: pointer;
        &:hover {
            background: ${({theme}) => theme.colors.neutralsGrey9};
        }
    `
    export const TextItem = styled.span<{isLastItem}>`
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        display: flex;
        align-items: center;
        
        color: #000000;    

        height: 42px;

        padding-left: 16px;
        margin-left: 5px;
        margin-right: 5px;
        border-bottom: 1px solid ${({isLastItem, theme}) => isLastItem ? 'transparent' : theme.colors.neutralsGrey7};

    `

    export const ItemSeeAll = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;   
        align-item: center;
        text-align: center;

        cursor: pointer;

        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;

        padding: 16px;
        color: ${({theme}) => theme.colors.linkOnfocus};
        &:hover {
            background: ${({theme}) => theme.colors.neutralsGrey9};
        }
    `