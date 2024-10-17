import styled, { css } from 'styled-components';

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
    justify-content: space-between;
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
    padding: 10px 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    height: 60px;
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
export const inputIndicator = styled.input`
    width:82px;
    height: 40px;
    padding: 8px 8px 8px 12px;
    border-radius: 8px;
    border: 1.5px solid #BDBDBD;
    font-size: 14px;
    font-family: 'PT Sans';
`

export const InputWrapper = styled.div`
    & > div:nth-child(1) {
        border: 1.5px solid #BDBDBD;
        padding: 0px;
        height: 42px;
        width: 148px;
        border-radius: 8px;
        padding-left: 6px;

        & > div:nth-child(1) {
            display: flex;

            width: 100%;
            gap: 8px;
            flex-direction: row-reverse;

            & > span:nth-child(2) {
                svg {
                    width: 20px;
                    height: 20px;
                    fill: #222;
                    border-radius: 7px;
                }
            }

            & > span:nth-child(3) {    
                position: relative;
                margin-top: auto;
                margin-right: -8px;
                margin-bottom: -4px;
                width: 0;

                & > span:nth-child(1) {   
                    padding-left: 7px;
                }
            }
        }
    }
`

export const Menu = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const WrapperTabsResultSelect = styled('div')<{activeSelect: boolean}>`
    display: flex;
    align-items: center; 
    gap: 8px;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;

    p {
        font-family: 'PT Sans';
        font-size: 16px;
        line-height: 1.1;
        font-weight: ${({activeSelect}) => (activeSelect ? '700' : '400')};
        color: #444444;
    }

    :hover {
        background-color: #ebeded;
    }
`;

export const WrapperSelectIcon = styled('div')<{isOpenSelect: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpenSelect }) => (isOpenSelect ? 'rotate(180deg)' : 'rotate(0deg)')};

    svg {
        width: 16px;
        height: 16px;

        path {
            stroke: #444444;
        }
    }
`;