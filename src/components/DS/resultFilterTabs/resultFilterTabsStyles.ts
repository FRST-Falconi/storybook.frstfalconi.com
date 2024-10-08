import styled from 'styled-components'

interface TabProps {
    isActive: boolean
}

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column; /* Para alinhar as tabs e o conteúdo na vertical */
`

export const Tabs = styled.div`
    display: flex;
`

export const Tab = styled.div<TabProps>`
    font-family: 'PT Sans';
    color: #222222;
    font-weight: ${(props) => (props.isActive ? 700 : 400)};
    background-color: ${(props) => (props.isActive ? '#ACC8E4' : '')};
    cursor: pointer;
    padding: 12px 16px;


    &:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

`

export const Content = styled.div`
    background-color: #CBDEF1;
    padding: 19px 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
`

export const Info = styled.div`
    display: flex;
    font-family: 'PT Sans';
    font-size: 14px;
    color: #222222;
    gap: 32px;
    p{
        font-weight: 700;
        span{
            font-weight: 400;
        }
    }
`

export const Menu = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`
