import styled from 'styled-components'

interface AvatarI {
    size?: string,
    src?: any,
    disabled?: boolean,
}


export const WrapperCard = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    background-color: #FFF;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    overflow: hidden;
`

export const WrapperTopic = styled.div`
    min-width: 49px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #FF4D0D;
    color: #FFF;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    border-right: 1px solid #BDBDBD;

`
export const WrapperDescription = styled.div`
    padding: 16px;
    color: #222222;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`