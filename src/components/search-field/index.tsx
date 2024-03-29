import React,{useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { Container, ContainerIcon, LabelField, InputSearchWrapper, InputText, ButtonAction } from './searchFieldStyles'
import { ISearchField } from './searchField'
import { SearchIcon } from '@shared/icons'

export default function SearchField({ label, hasSearchIcon, placeholder, value, onChange, textButton, className, handleClickButton }: ISearchField) {
    const [ actionAreaInput, setActionAreaInput ] = useState(false);
    const [ inputOnFocus, setInputOnFocus ] = useState(false);

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Container
                className={className}
                onMouseOver={() => setActionAreaInput(true)}
                onMouseOut={() => setActionAreaInput(false)}
                onFocus={() => setInputOnFocus(true)}
                onBlur={() => setInputOnFocus(false)}
            >
                { label &&
                    <LabelField isHover={actionAreaInput} isOnFocus={inputOnFocus}> {label} </LabelField> 
                }
                <InputSearchWrapper isHover={actionAreaInput} isOnFocus={inputOnFocus}>
                    { hasSearchIcon &&
                        <ContainerIcon> <SearchIcon/> </ContainerIcon>}
                    <InputText placeholder={placeholder} onChange={onChange} value={value}/>
                    <ButtonAction onClick={ () => handleClickButton() }> { textButton } </ButtonAction>
                </InputSearchWrapper>
            </Container>
        </ThemeProvider>
    )

}
