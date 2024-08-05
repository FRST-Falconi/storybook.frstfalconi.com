import React from 'react'
import styled, { keyframes, css } from 'styled-components'

interface ModalProps {
  open: boolean
}

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  50% {
    transform: scale(1.1);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

export const Dropdown = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
`

export const WrapperDropdownButton = styled.div<{isPulsing}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;

  ${props => props.isPulsing && css`
    animation: ${pulseAnimation} 0.7s ease-in-out;
  `}
`

export const OrnamentInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  background-color: #2d7781;
  margin-right: -8px;
  z-index: 2;
`

export const OrnamentInfoIntern = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E78123;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 3;
`

export const DropdownButton = styled.div`
  height: 28px;
  white-space: nowrap;
  padding: 4px 12px 4px 16px;
  border-radius: 0px 16px 16px 0px;
  background-color: #318894;

  font-family: PT Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.7px;
  text-align: left;
  color: #fff;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  gap: 12px;

`

interface WrapperExpandButtonProps {
  isExpanded: boolean
}

export const WrapperExpandButton = styled.div<WrapperExpandButtonProps>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')} ;
`;

export const WrapperContent = styled.div<{isOpen}>`
  position: absolute;

  width: 266px;
  border-radius: 8px;
  height: fit-content;
  background-color: #FFF;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 4px;

  background-color: #FFFFFF;
  box-shadow: 0px 5px 15px 0px #00000040;


  max-height: ${props => props.isOpen ? '1000px' : '0'};
  opacity: ${props => props.isOpen ? 1 : 0};
  overflow: hidden;
  transition: max-height 0.8s ease, opacity 0.2s ease;
`

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;

  background-color: #FFF;
  transition: background-color 0.3s ease;
  padding: 2px 8px 0px 8px;

  &:hover {
    background-color: #f0f0f0;
  }
`
export const ItemContentLabel = styled.div<{isLastItem}>`
  align-items: center;
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px 4px 10px 4px;
  gap: 10px;

  font-family: PT Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.12px;
  text-align: left;

  user-select: none;
  cursor: pointer;

  border-bottom: 1px solid ${({isLastItem}) => isLastItem ? `transparent` : `#E0E0E0` };

`