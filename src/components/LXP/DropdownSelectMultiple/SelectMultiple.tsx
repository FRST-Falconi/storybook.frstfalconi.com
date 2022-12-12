import React, { useState, useEffect, useRef } from 'react'
import { SelectContext } from './SelectContext'
import { FRSTTheme } from '../../../theme/'
import * as StylesSelectMultiple from './styles/StylesSelectMultiple'
import { ArrowIcon } from '../../../shared/icons'

interface SelectMultipleProps {
  placeholder?: string
  children?: any
  onChange?: any
  defaultValue?: any
  loading?: boolean
  isError?: boolean
  style?: React.CSSProperties
  listItems?: Array<string>
  isIcon?: boolean
  iconSelect?: any
  isDisabled?: boolean
}

export default function SelectMultiple({
  placeholder,
  defaultValue,
  children,
  onChange,
  loading,
  isError,
  style,
  listItems,
  isIcon,
  iconSelect,
  isDisabled
}: SelectMultipleProps) {
  const wrapperRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedOptionValue, setSelectedOptionValue] = useState<boolean>()

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

  const handleChange = (e: any) => {
    onChange(e)
  }

  return (
    <StylesSelectMultiple.ContainerSelectMultiples theme={FRSTTheme} isOpen={isOpen} isDisabled={isDisabled}>
      <StylesSelectMultiple.LabelSelect theme={FRSTTheme} isOpen={isOpen} isDisabled={isDisabled}>
        Label
      </StylesSelectMultiple.LabelSelect>
      <div style={style}>
        <StylesSelectMultiple.DropDownContainer
          tabIndex={0}
          ref={wrapperRef}
          error={isError}
          theme={FRSTTheme}
          isOpen={isOpen}
          isDisabled={isDisabled}
        >
          <StylesSelectMultiple.DropDownHeader
            error={isError}
            theme={FRSTTheme}
            isDisabled={isDisabled}
            isOpen={isOpen}
          >
            {isIcon ? (
              <StylesSelectMultiple.IconOptional theme={FRSTTheme} isDisabled={isDisabled}>
                {iconSelect}
              </StylesSelectMultiple.IconOptional>
            ) : null}
            {loading ? (
              <p>Carregando dados...</p>
            ) : selectedOption ? (
              <StylesSelectMultiple.SelectedOption>{selectedOption}</StylesSelectMultiple.SelectedOption>
            ) : (
              <p>{placeholder}</p>
            )}
            <StylesSelectMultiple.DropDownHeaderIcon
              theme={FRSTTheme}
              isOpen={isOpen}
              isDisabled={isDisabled}
              onClick={() => {
                if (!isDisabled) {
                  !isOpen ? setIsOpen(true) : setIsOpen(false)
                } else {
                  setIsOpen(false)
                }
              }}
            >
              <ArrowIcon fill={isDisabled ? '#BDBDBD' : ' #000000'} />
            </StylesSelectMultiple.DropDownHeaderIcon>
          </StylesSelectMultiple.DropDownHeader>
          {isOpen && (
            <StylesSelectMultiple.DropDownListContainer theme={FRSTTheme}>
              <StylesSelectMultiple.DropDownList theme={FRSTTheme}>
                <StylesSelectMultiple.ContainerListItens onClick={handleChange} theme={FRSTTheme}>
                  <SelectContext.Provider value={{ selected: selectedOptionValue }}>{children}</SelectContext.Provider>
                </StylesSelectMultiple.ContainerListItens>
              </StylesSelectMultiple.DropDownList>
            </StylesSelectMultiple.DropDownListContainer>
          )}
        </StylesSelectMultiple.DropDownContainer>
      </div>
    </StylesSelectMultiple.ContainerSelectMultiples>
  )
}
