import styled, { css } from 'styled-components'
import { Popover } from 'react-tiny-popover'

type PopoverPosition = 'left' | 'right' | 'top' | 'bottom';
type PopoverAlign = 'start' | 'center' | 'end';


export const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-content: center;
    justify-content: center;
`

export const MyBasicPopOver = styled(Popover)`
    & .react-tiny-popover-container{
    background: #000 !important;
    transition: all 2s ease-in-out;
    }
`

const getAPositionTab = (position?: string, align?: string) => {
    switch(position) {
        case 'left':
            switch(align) {
                case 'start':   return '4px -7px 0px 0px'
                case 'center':  return '8px -7px 0px 0px'
                case 'end':     return '5px -7px 4px 0px'
            }
            break;
        case 'right':

            switch(align) {
                case 'start':   return '4px 0px 0px -7px'
                case 'center':  return '8px 0px 0px 0px'
                case 'end':     return '5px -7px 4px -7px'
            }
            break;
            break;
        case 'top':
            switch(align) {
                case 'start':   return 'auto 0px -7px 18px'
                case 'center':  return 'auto 0px -7px calc(50% - 10px)'
                case 'end':     return 'auto 0px -7px calc(100% - 30px)'
            }
        case 'bottom':
            switch(align) {
                case 'start':   return '-7px 0 32px 27px'
                case 'center':  return '-7px 0 32px calc(50% - 10px)'
                case 'end':     return '-7px 0px 0px calc(100% - 30px)'
            }
        default:
            return  '-7px 0 32px 27px'
    }
}

const getBordersAndReferenceTab = (position?: string, align?: string) => {
    switch(position) {
        case 'left':
            return align == 'end' ?`
                    transform:matrix(0.81,0.60,-0.81,0.60,0,0);
                    border-top-right-radius: 2px;
                    border-bottom: none;
                    border-left: none;

                    right: 0;
                    bottom: 0;`
                :            
                align == 'center' ? 
                `
                    transform:matrix(0.81,0.60,-0.81,0.60,0,0);
                    border-top-right-radius: 2px;
                    border-bottom: none;
                    border-left: none;

                    right: 0;
                    bottom: 0;
                    top:0;
                `
                :
                `
                    transform:matrix(0.81,0.60,-0.81,0.60,0,0);
                    border-top-right-radius: 2px;
                    border-bottom: none;
                    border-left: none;
                    
                    right: 0;
                    top: 0;
                `
            
        case 'right':
            return align == 'end' ?`
                transform:matrix(0.81,0.60,-0.81,0.60,0,0);
                border-bottom-left-radius: 2px;
                border-top: none;
                border-right: none;
                left: 0;
                bottom: 0;`
            :            
            align == 'center' ?             `
                transform:matrix(0.81,0.60,-0.81,0.60,0,0);
                border-bottom-left-radius: 2px;
                border-top: none;
                border-right: none;

                left: 0;
                bottom: 0;
                top:0;
            `
            :
            `
                transform:matrix(0.81,0.60,-0.81,0.60,0,0);
                border-bottom-left-radius: 2px;
                border-top: none;
                border-right: none;                
                left: 0;
                top: 0;
            `
        case 'top':
            return `
                transform: matrix(0.60,0.81,-0.60,0.81,0,0);
                border-bottom-right-radius: 2px;
                border-left: none;
                border-top: none;
                left: 0;
                bottom: 0;
            `
        case 'bottom':
            return `
                transform: matrix(0.60,0.81,-0.60,0.81,0,0);
                border-top-left-radius: 2px;
                border-bottom: none;
                border-right: none;
                left: 0;
                top: 0;
            `
    }
}

export const Tab = styled.div<{position?: string, align?: string}>`
    width: 13px;
    height: 13px;
    position: absolute;
    margin: ${({position, align}) => getAPositionTab(position, align)};
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};

    ${({position, align}) => getBordersAndReferenceTab(position, align)};
`

export const PopOver = styled.div`
    width: 100%;
    min-height: 31px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    position: relative;
    margin: 0% 0% 0% 0%;
    padding: 8px;
`
export const PopOverLeftRight = styled.div`
    width: 100%;
    min-height: 67px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};
    background-color: ${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 18px 40px -15px #d3d3d3;
    position: relative;
    margin: 0% 0% 0% 0%;
    padding: 8px;    
`