import React, { useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { SelectContext } from "./SelectContext"

const DropDownContainer = styled("div")`
    width: 100%;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    position: relative;
`
const EventOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    cursor: pointer;
    z-index: 2;
`
const DropDownHeader = styled("div")`
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-radius: 4px;

  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #A6A6A6;
  }
`
const DropDownListContainer = styled("div")``

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  width: 100%;
  z-index: 5;

  &:first-child {
    padding-top: 0.8em;
  }

`
const DropDownHeaderIcon = styled('div')<{ open: boolean }>`
  position: absolute;
  right: 16.48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-in-out;

  ${({ open }) => open === true && css`
    transform: rotate(180deg);
  `}
`
const SelectedOption = styled('p')`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #222222 !important;
`

export function ArrowIcon() {
  return (
    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.1736 6.64904L13.521 0.992188H0.826172L7.1736 6.64904Z" fill="#222222"/>
    </svg>
  )
}

interface SelectProps {
    placeholder?: string
    children?: any
    onChange?: any
    defaultValue?: any
    loading?: boolean
}

export default function Select({ placeholder, defaultValue, children, onChange, loading }: SelectProps) {
  const wrapperRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption]= useState(null)
  const [selectedOptionValue, setSelectedOptionValue] = useState<boolean>()

  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if(wrapperRef.current && !wrapperRef.current.contains(event.target) && isOpen)
        setIsOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [wrapperRef, isOpen])


  useEffect(() => {
    let param = false;
    children && children.length && children.forEach((child: any) => {
      if (child.props.value == defaultValue) {
        param = true;
        setSelectedOption(child.props.label)
        setSelectedOptionValue(child.props.value)
      }
    })
    if(!param) {
      setSelectedOption(null)
      setSelectedOptionValue(false)
    }
  }, [children, defaultValue])

  const toggle = () => setIsOpen(!isOpen)

  const handleChange = (e: any) => {
    onChange(e)
    toggle()
  }

  return (
    <div>
      <DropDownContainer ref={wrapperRef}>
        <EventOverlay onClick={toggle}></EventOverlay>
        <DropDownHeader>
          {loading ?
            <p>Carregando dados...</p>
            :
            selectedOption ? <SelectedOption>{selectedOption}</SelectedOption> : <p>{placeholder}</p>
          }
          <DropDownHeaderIcon open={isOpen}>
            <ArrowIcon />
          </DropDownHeaderIcon>
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <div onClick={handleChange}>
                <SelectContext.Provider value={{ selected: selectedOptionValue }}>
                  {children}
                </SelectContext.Provider>
              </div>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </div>
  );
}
