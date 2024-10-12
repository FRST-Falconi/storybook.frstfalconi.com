import styled from "styled-components";

export const ContainerDropdown = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 4px 8px;
    border-radius: 8px;
    box-shadow: 0px 5px 15px 0px #00000040;
    background-color: #FFFFFF;
    width: 300px;
`

export const DropdownRow = styled('div')`
    padding: 10px 4px;
    border-top: 1px solid #E0E0E0;
    cursor: pointer;

    p {
        font-family: 'PT Sans';
        font-size: 16px;
        line-height: 1.1;
        font-weight: 400;
        color: #222222;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden
    }

    :first-child {
        border: none;
    }

    :hover {
        background-color: #ebeded;
    }
    
`