import styled from 'styled-components'

interface Colorpicker{
    size?: string,
    src?: any,
    disabled?: boolean,
}
export const Container = styled.div`
    width: 147px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid white;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 11px;
`
export const ImputBox = styled.input`
    width: 52px;
    height: 18px;
`
export const ImputColor = styled.input`
    width: 23px;
    height: 23px;

`
