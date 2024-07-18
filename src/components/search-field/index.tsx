import React, { useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { Container, ContainerIcon, LabelField, InputSearchWrapper, InputText, ButtonAction } from './searchFieldStyles'
import { ISearchField } from './searchField'
import { SearchIcon } from '@shared/icons'

export default function SearchField({
  label,
  hasSearchIcon,
  placeholder,
  value,
  onChange,
  textButton,
  className,
  handleClickButton,
  isButton,
  id,
  style,
  inputSearchNewStyle
}: ISearchField) {
  const [actionAreaInput, setActionAreaInput] = useState(false)
  const [inputOnFocus, setInputOnFocus] = useState(false)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Container
        style={style}
        id="container-search-field"
        className={className}
        onMouseOver={() => setActionAreaInput(true)}
        onMouseOut={() => setActionAreaInput(false)}
        onFocus={() => setInputOnFocus(true)}
        onBlur={() => setInputOnFocus(false)}
      >
        {label && (
          <LabelField isHover={actionAreaInput} isOnFocus={inputOnFocus}>
            {' '}
            {label}{' '}
          </LabelField>
        )}
        <InputSearchWrapper
          isHover={actionAreaInput}
          isOnFocus={inputOnFocus}
          inputSearchNewStyle={inputSearchNewStyle}
        >
          {hasSearchIcon && (
            <ContainerIcon>
              {' '}
              <SearchIcon fill="#222222" />{' '}
            </ContainerIcon>
          )}
          <InputText
            inputSearchNewStyle={inputSearchNewStyle}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleClickButton(event)
              }
            }}
          />
          {!isButton && <ButtonAction onClick={(event) => handleClickButton(event)}>{textButton}</ButtonAction>}
        </InputSearchWrapper>
      </Container>
    </ThemeProvider>
  )
}
