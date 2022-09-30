import React from "react"

type enumVariant = 'upLeft' | 'upRight' | 'lowRight' | 'lowLeft' | 'sideLeft' | 'sideRight'

type PopoverPosition = 'left' | 'right' | 'top' | 'bottom';
type PopoverAlign = 'start' | 'end';

export interface IPopOver {
    isOpen: boolean,
    
    children: JSX.Element,
    anchorElement: JSX.Element,
    content: ContentRenderer | JSX.Element,
    
    position?: PopoverPosition[],
    align?: PopoverAlign,

    padding?: number,

    onClickOutside?: (e: MouseEvent) => void;
    style?: React.CSSProperties
}