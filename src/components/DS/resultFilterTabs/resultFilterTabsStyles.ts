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
    padding: 8px 16px;
    background-color: ${(props) => (props.isActive ? '#ACC8E4' : '')};
    color: #222222;
    cursor: pointer;

    &:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:hover {
        background-color: #7ca4db;
    }
`

export const Content = styled.div`
    background-color: #CBDEF1; /* Fundo semelhante ao da imagem */
    padding: 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: space-between; /* Para distribuir o espaço entre os textos e o menu */
    align-items: center;
`

export const Info = styled.div`
    font-size: 14px;
    color: #333;
`

export const Menu = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`
