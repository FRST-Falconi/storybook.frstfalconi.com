import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TopBar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
`

export const LeftAction = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    color: #444;
`

export const RightInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 14px;
    color: #444;
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #e0e0e0;
`

export const BottomInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #f58634;
    cursor: pointer;

    span {
        color: #222;
        font-size: 14px;
    }
`
