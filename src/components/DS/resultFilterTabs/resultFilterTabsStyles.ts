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
    border-top-left-radius: ${(props) => (props.isActive ? '8px' : '8px')};
    border-top-right-radius: ${(props) => (props.isActive ? '8px' : '8px')};

    &:hover {
        background-color: ${(props) => (props.isActive ? '' : '#f0f0f0')}; /* Cinza clarinho no hover se não for ativo */
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
        display: flex;
        align-items: center;
        gap: 8px;
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

export const InputWrapper = styled.div`
    position: relative;
    width: auto;
    display: inline-flex;
    align-items: center;

    input {
        width: 148px;
        height: 18px;
        border: 1.5px solid #BDBDBD;
        border-radius: 8px;
        padding-left: 40px; /* Espaço suficiente para o ícone */
        padding-top: 18px;
        padding-bottom: 18px;
        font-size: 14px;
        font-family: 'PT Sans';
    }

    svg {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
    }
`