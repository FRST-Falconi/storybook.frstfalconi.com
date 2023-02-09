import React,{ useState, useEffect, useLayoutEffect} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import { Container, ContainerIcon, LabelField, InputSearchWrapper, InputText, WrapperResults, ItemResult, TextItem, ItemSeeAll } from './fieldSearchStyle'
import { IFieldSearch } from './fieldSearch'
import { SearchIcon } from '@shared/icons'

export default function FieldSearch({ variant, placeholder, onChange, listResults, 
    hasOptionSeeAll, value, seeAll, style, loading, textLoading, enableAnimationField,
    isMobileVersion, setFieldSearchIsOpen, fieldSearchIsOpen, onFilter }: IFieldSearch) {
    const [actionAreaInput, setActionAreaInput ] = useState(false)
    const [inputOnFocus, setInputOnFocus ] = useState(false)
    const [isMobile, setIsMobile ] = useState(isMobileVersion)
    const [openSearchFieldMobile, setOpenSearchFieldMobile ] = useState(isMobileVersion)
    const [isOpenDrop, setIsOpenDrop ] = useState(false)
    const [ValueSearch, setValueSearch] = useState('');    
    const [Loading, setLoading] = useState(loading);

    useEffect(() => {
        setFieldSearchIsOpen(isMobileVersion)
    },[])    

    useEffect(() => {
        setIsOpenDrop(false)
        setFieldSearchIsOpen(!openSearchFieldMobile)
    },[openSearchFieldMobile])

    // Handle Open list results

    const handleFocusUp = () => {
        
        setInputOnFocus(true)
        setIsOpenDrop(true)
        setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && listResults && listResults.length > 0)
    }
    const handleFocusDown = () => {
        
        setInputOnFocus(false)
        setIsOpenDrop(actionAreaInput)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          onFilter(ValueSearch)
          setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && listResults && listResults.length > 0)
        }, 500)
    
        return () => clearTimeout(delayDebounceFn)
      }, [ValueSearch])    

    return (
        <ThemeProvider theme={FRSTTheme}>
            <div style={{position: 'relative'}}>
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
                        <InputText 
                            placeholder={placeholder} 
                            onChange={(e) => {
                                setIsOpenDrop(false)
                                setValueSearch(e.target.value)
                            }}
                            disabled={loading}
                            value={ValueSearch} 
                        />
                    </InputSearchWrapper>
                    { Loading ? 
                        <WrapperResults style={{...style, marginTop: 8}}  isVisibleResults={true}>
                            <ItemResult>                                
                                <TextItem isLastItem={true} style={{color: '#999'}}>{textLoading ? textLoading : 'Carregando...'}</TextItem>
                            </ItemResult>
                        </WrapperResults>
                    :
                        <WrapperResults style={{...style, marginTop: 8}} isVisibleResults={isOpenDrop}
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
            </div>
        </ThemeProvider>
    )
}
