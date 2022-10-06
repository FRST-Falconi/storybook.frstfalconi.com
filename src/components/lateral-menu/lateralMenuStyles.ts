import styled from 'styled-components'

export const WrapperCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0px 12px;

    position: relative;
    width: 282px;
    height: auto;

    background: ${({theme}) => theme.colors.shadeWhite};

    border: 1px solid #BDBDBD;
    border-radius: 8px;
`

export const WrapperHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NameProfile = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: ${({theme}) => theme.colors.neutralsGrey1};

    margin-top: 16px;
`

export const Channel = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;

    color: ${({theme}) => theme.colors.neutralsGrey1};

    margin-top: 4px;
`
export const WrapperButton = styled.div`
margin-top: 10px;

`


export const HR = styled.hr`
    border-top: 1px solid #BDBDBD;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
`