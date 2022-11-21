import React, { useState, useEffect, useRef } from 'react'
import { SelectContext } from './SelectContext'
import { FRSTTheme } from '../../../theme'
import * as StylesSelect from './styles/StylesSelect'

export function ArrowIcon() {
  return (
    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.1736 6.64904L13.521 0.992188H0.826172L7.1736 6.64904Z" fill="#222222" />
    </svg>
  )
}

interface SelectProps {
  placeholder?: string
  children?: any
  onChange?: any
  defaultValue?: any
  loading?: boolean
  isError?: boolean
}

export default function Select({ placeholder, defaultValue, children, onChange, loading, isError }: SelectProps) {
  const wrapperRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOptionValue, setSelectedOptionValue] = useState<boolean>()

  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && isOpen) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef, isOpen])

  useEffect(() => {
    let param = false
    children &&
      children.length &&
      children.forEach((child: any) => {
        if (child.props.value == defaultValue) {
          param = true
          setSelectedOption(child.props.label)
          setSelectedOptionValue(child.props.value)
        }
      })
    if (!param) {
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
      <StylesSelect.DropDownContainer ref={wrapperRef} error={isError} theme={FRSTTheme}>
        <StylesSelect.EventOverlay onClick={toggle}></StylesSelect.EventOverlay>
        <StylesSelect.DropDownHeader error={isError} theme={FRSTTheme}>
          {loading ? (
            <p>Carregando dados...</p>
          ) : selectedOption ? (
            <StylesSelect.SelectedOption>{selectedOption}</StylesSelect.SelectedOption>
          ) : (
            <p>{placeholder}</p>
          )}
          <StylesSelect.DropDownHeaderIcon open={isOpen}>
            <ArrowIcon />
          </StylesSelect.DropDownHeaderIcon>
        </StylesSelect.DropDownHeader>
        {isOpen && (
          <StylesSelect.DropDownListContainer>
            <StylesSelect.DropDownList>
              <div onClick={handleChange}>
                <SelectContext.Provider value={{ selected: selectedOptionValue }}>{children}</SelectContext.Provider>
              </div>
            </StylesSelect.DropDownList>
          </StylesSelect.DropDownListContainer>
        )}
      </StylesSelect.DropDownContainer>
    </div>
  )
}
