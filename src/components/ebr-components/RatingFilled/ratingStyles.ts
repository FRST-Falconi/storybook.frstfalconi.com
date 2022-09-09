import styled from 'styled-components'


export const WrapperStars = styled.div<({orientation: string})>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: ${({orientation}) => orientation == 'vertical' ? 'column' : 'row'};
    width: auto;
`

export const Raiting  = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Work Sans;
    font-size: 24px;
    line-height: 100%;
    font-weight: 500;
    line-height: 28px;
    color: #222;
    padding-top: 3px;
    margin-left: 16.5px;
`