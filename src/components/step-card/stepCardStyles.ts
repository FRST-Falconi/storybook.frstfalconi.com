import styled from 'styled-components'

interface ICardWrapper {
    active?: boolean,
    width?: string
}


interface IAvatarInternal {
    size?: string,
    zIndex?: string,
    margin?: string,
    padding?: string,
    backgroundColor?: string
}

export const CardWrapper = styled.div<ICardWrapper>`
    min-width: ${({width}) => width ? width : '343px'};
    min-height: 136px;
    max-width: ${({width}) => width ? width : '343px'};;
    max-height: 136px;
    border-radius: 8px;


    background-color: ${({ theme }) => theme.colors.neutralsGrey8};
    border: 1px solid #E8E8E8;

    ${({ active }) => active === true && `
        background-color: #FDBC91;
        border: 1px solid #FF4D0D;
    `}
    padding: 24px;
    margin: 15px;   
    cursor: pointer;
`

export const WrapperHeader = styled.div`
    display: flex;
    flex-diretion: row;
    padding-left: 3.2px;
`

export const TitleCard = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #222222;
    margin-left: 11.2px;
`

export const WrapperFooter = styled.div`
    margin-top: 27px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export const WrapperAvatar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
`

export const AvatarInternal = styled.div<IAvatarInternal>`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: ${({ size }) => size };
    min-height: ${({ size }) => size };
    max-width: ${({ size }) => size };
    max-height: ${({ size }) => size };
    
    border: 2px solid #FAFAFA;
    border-radius: 50%;
    margin: ${({ margin }) => margin };
    padding: ${({ padding }) => padding };
    z-index: ${({ zIndex }) => zIndex };
    background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#FAFAFA' };

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

`

export const ButtonMore = styled.div`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #0645AD;
    cursor: pointer;
    margin-right: 4px;
`