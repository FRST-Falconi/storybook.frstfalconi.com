import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 127px;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    border-radius: 8px;
`
export const Typography = styled.div`
    font-family: Work Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.primary1};
    margin-top: 16px;
    margin-left: 16px;
`
export const ContainerSearch = styled.div`
    margin: 24px 16px 16px 16px;
`