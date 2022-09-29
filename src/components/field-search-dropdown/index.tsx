import React,{ useState, useEffect, useLayoutEffect} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import { Container, ContainerIcon, LabelField, InputSearchWrapper, InputText, WrapperResults, ItemResult, TextItem, ItemSeeAll } from './fieldSearchStyle'
import { IFieldSearch } from './fieldSearch'
import { SearchIcon } from '@shared/icons'

export default function FieldSearch({ variant, value, placeholder, onChange, listResults, 
    hasOptionSeeAll, seeAll, style, loading, setLoading, textLoading, enableAnimationField,
    isMobileVersion, setFieldSearchIsOpen, fieldSearchIsOpen }: IFieldSearch) {
    const [ actionAreaInput, setActionAreaInput ] = useState(false)
    const [ inputOnFocus, setInputOnFocus ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(isMobileVersion)
    const [ openSearchFieldMobile, setOpenSearchFieldMobile ] = useState(isMobileVersion)
    const [ isOpenDrop, setIsOpenDrop ] = useState(false);
        
    useEffect(() => {
        setFieldSearchIsOpen(isMobileVersion)
    },[])

    useEffect(() => {
        setIsOpenDrop(false)
        setFieldSearchIsOpen(!openSearchFieldMobile)
    },[openSearchFieldMobile])

    // Handle Open list results
    useEffect(() => {
        setIsOpenDrop(value && value.length > 0 && listResults && listResults.length > 0)
    }, [value, listResults])

    const handleFocusUp = () => {
        setInputOnFocus(true)
        setIsOpenDrop(value && value.length > 0 && listResults && listResults.length > 0)
    }
    const handleFocusDown = () => {
        setInputOnFocus(false)
        setIsOpenDrop(actionAreaInput)
        setLoading(false)
    }
    

    return (
        <ThemeProvider theme={FRSTTheme}>
            { variant == 'LXP' ?
                <Container
                    onMouseOver={() => setActionAreaInput(true)}
                    onMouseOut={() => setActionAreaInput(false)}
                    onFocus={() => handleFocusUp()}
                    onBlur={() => handleFocusDown()}
                >
                    <InputSearchWrapper 
                        isHover={actionAreaInput} 
                        isOnFocus={inputOnFocus} 
                        isMobile={openSearchFieldMobile}
                        style={{...style}}
                    >
                        <ContainerIcon onClick={() => setOpenSearchFieldMobile(!openSearchFieldMobile && isMobile)}>
                            <SearchIcon  fill={'#fff'}/>
                        </ContainerIcon>
                        <InputText placeholder={placeholder} onChange={(e) => onChange(e)} value={value}/>
                    </InputSearchWrapper>
                    { loading ? 
                        <WrapperResults style={{...style, marginTop: '95px'}}  isVisibleResults={true}>
                            <ItemResult >
                                <TextItem isLastItem={true} style={{color: '#999'}}>{textLoading ? textLoading : 'Carregando...'}</TextItem>
                            </ItemResult>
                        </WrapperResults>
                    :
                        <WrapperResults style={{...style}} isVisibleResults={isOpenDrop}
                            onMouseOver={() => setActionAreaInput(true)}
                            onMouseOut={() => setActionAreaInput(false)}
                        >
                            { listResults && listResults.map((item, index) => {
                                return <ItemResult 
                                    key={item.id} 
                                    onClick={() => {
                                        setIsOpenDrop(false)
                                        return item.onClick(item.id)
                                    }}
                                >
                                    <TextItem isLastItem={false && !hasOptionSeeAll}>{item.label}</TextItem>
                                </ItemResult>
                            })}
                            { hasOptionSeeAll && 
                                <ItemSeeAll
                                    onClick={(e) => { 
                                        setIsOpenDrop(false)
                                        return seeAll.onClick(e)
                                    }}
                                >
                                    {seeAll.label}
                                </ItemSeeAll>
                            }
                        </WrapperResults>
                    }
                </Container>
                :
                <Container
                    onMouseOver={() => setActionAreaInput(true)}
                    onMouseOut={() => setActionAreaInput(false)}
                    onFocus={() => setInputOnFocus(true)}
                    onBlur={() => setInputOnFocus(false)}
                >
                    <InputSearchWrapper isHover={actionAreaInput} isOnFocus={inputOnFocus} style={{...style}}>
                        <ContainerIcon> <SearchIcon fill={'#fff'} /> </ContainerIcon>
                        <InputText placeholder={placeholder} onChange={onChange} value={value}/>
                    </InputSearchWrapper>
                </Container>
            }
        </ThemeProvider>
    )
}
