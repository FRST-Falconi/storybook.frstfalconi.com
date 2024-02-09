import React, { useState } from "react"
import styled, { css } from "styled-components"
import { SelectContext } from "./SelectContext"

interface props {
    selected: boolean
    value: any
    disabled?: boolean
}

const ListItem = styled("li")<props>`
    list-style: none;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000;
    height: 38px;
    margin: 0;
    padding-left: 16px;
    margin-top: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;

    ${props => props.disabled === true && css`
        cursor: not-allowed;
        background-color: #e5e5e5;
        opacity: 0.3;
    `}

    ${props => props.selected === true && css`
        background-color: #e5e5e5;
        cursor: pointer;
        opacity: 1;
    `}

    &:hover {
        background-color: #e5e5e5;
    }
`;

type valueEnum = string | number | boolean | null | React.ReactNode ;

interface SelectProps {
    value?: valueEnum
    label?: string | React.ReactNode
    selected?: boolean
    handleSelect?: (value: any) => void
    disabled?: boolean
}

export default function SelectItem({ value, label, selected, handleSelect, disabled }: SelectProps) {
    return (
        <SelectContext.Consumer>
            {({ selected }) => (
                <ListItem disabled={disabled} selected={selected === value} value={value} onClick={handleSelect}>
                    {label}
                </ListItem>
            )}
        </SelectContext.Consumer>
    );
}
