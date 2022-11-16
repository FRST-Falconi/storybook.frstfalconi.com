import styled, { css } from 'styled-components'

interface IFilterButton {
    active: boolean
}

export const ButtonSessionFilters = styled.button<IFilterButton>`
    max-width: 180px;
    height: 72px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 19px;
    background-color: ${( props ) => props.active ? props.theme.colors.primary1 : props.theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 8px;
    font-family: PT Sans;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    cursor: pointer;
    color: ${( props ) => props.active ? props.theme.colors.shadeWhite : props.theme.colors.neutralsGrey1};

`

export const ContainerFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: fit-content;

    color: ${({ theme }) => theme.colors.neutralsGrey1};
    ${({ theme }) => theme.fonts.textMessageComponentsBodyRegular};
    
`

export const ButtonList = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    margin-top: 8px;
    margin-bottom: 24px;
`

export const SelectedItens = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    width: 100%;


    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};

    margin-top: 8px;
    margin-bottom: 24px;

    & :nth-child(1) {
      z-index: 1;
    }

    & :nth-child(3) {
        z-index: 1;
      }

    & :nth-child(4) {
        background: #FFF;
    }
`

export const LabelSelect = styled.div<{isVisible: Boolean}>`
    padding-left: 20px;
    margin-right: -115px;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #9C9C9C;

`