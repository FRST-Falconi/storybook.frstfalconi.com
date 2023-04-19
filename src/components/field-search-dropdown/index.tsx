import React,{ useState, useEffect, useLayoutEffect} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import { Container, ContainerIcon, LabelField, InputSearchWrapper, InputText, WrapperResults, ItemResult, TextItem, ItemSeeAll } from './fieldSearchStyle'
import { IFieldSearch } from './fieldSearch'
import { Clock, SearchIcon } from '@shared/icons'

export default function FieldSearch({ variant, placeholder, onChange, listResults, 
    hasOptionSeeAll, value, seeAll, style, loading, textLoading, enableAnimationField,
    isMobileVersion, setFieldSearchIsOpen, fieldSearchIsOpen, onFilter, historicResults, labeledResultList, isLabeledResult }: IFieldSearch) {
    const [actionAreaInput, setActionAreaInput ] = useState(false)
    const [inputOnFocus, setInputOnFocus ] = useState(false)
    const [isMobile, setIsMobile ] = useState(isMobileVersion)
    const [openSearchFieldMobile, setOpenSearchFieldMobile ] = useState(fieldSearchIsOpen)
    const [isOpenDrop, setIsOpenDrop ] = useState(false)
    const [ValueSearch, setValueSearch] = useState('');    
    const [Loading, setLoading] = useState(loading);
    const [resultList, setResultList] = useState([]);

    useEffect(() => {
        if(listResults && listResults.length > 0){
            setResultList(listResults)
            setIsOpenDrop(true)
        }
        if(labeledResultList && labeledResultList.length > 0){
            setResultList(labeledResultList)
            setIsOpenDrop(true)
        }
    }, [listResults, labeledResultList]);
    
    useEffect(() => {
        setFieldSearchIsOpen(openSearchFieldMobile)
    },[])

    useEffect(() => {
        if(fieldSearchIsOpen !== openSearchFieldMobile)
            setOpenSearchFieldMobile(fieldSearchIsOpen)
    }, [fieldSearchIsOpen]);

    useEffect(() => {
        setIsOpenDrop(false)
        setFieldSearchIsOpen(openSearchFieldMobile)
    },[openSearchFieldMobile])

    // Handle Open list results

    const handleFocusUp = () => {
        
        setInputOnFocus(true)
        setIsOpenDrop(true)
        if(historicResults){
            setIsOpenDrop(historicResults.length > 0)
        }
        else if(listResults){
            setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && listResults && listResults.length > 0)
        }
        else if(labeledResultList){
            setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && labeledResultList && labeledResultList.length > 0)
        }
    }
    const handleFocusDown = () => {
        
        setInputOnFocus(false)
        setIsOpenDrop(actionAreaInput)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onFilter(ValueSearch)
            setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && resultList && resultList.length > 0)
            // if(listResults){
            //     setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && listResults && listResults.length > 0)
            // }
            // else if(labeledResultList){
            //     setIsOpenDrop(ValueSearch && ValueSearch.length > 0 && labeledResultList && labeledResultList.length > 0)
            // }
          
        }, 500)
    
        return () => clearTimeout(delayDebounceFn)
      }, [ValueSearch])

    return (
        <ThemeProvider theme={FRSTTheme}>
            <div style={{position: 'relative'}} id='bar-search-global-menu'>
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
                        isMobile={!openSearchFieldMobile}
                        style={{...style}}
                    >
                        <ContainerIcon onClick={() => isMobile && setOpenSearchFieldMobile( !openSearchFieldMobile )}>
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
                    { Loading &&
                        <WrapperResults style={{...style, marginTop: 8}}  isVisibleResults={true}>
                            <ItemResult>                                
                                <TextItem isLastItem={true} style={{color: '#999'}}>{textLoading ? textLoading : 'Carregando...'}</TextItem>
                            </ItemResult>
                        </WrapperResults>
                    }
                    { labeledResultList && labeledResultList.length > 0 && inputOnFocus && isLabeledResult &&
                        <WrapperResults style={{...style, marginTop: 8}} isVisibleResults={isOpenDrop}
                            onMouseOver={() => setActionAreaInput(true)}
                            onMouseOut={() => setActionAreaInput(false)}
                        >
                            {ValueSearch.length === 0 && inputOnFocus && historicResults && historicResults.length > 0 &&
                                historicResults.map(item => {
                                    return <ItemResult 
                                        key={item.id} 
                                        onClick={() => {
                                            setIsOpenDrop(false)
                                            return item.onClick(item.id)
                                        }}
                                    >
                                        <TextItem isLastItem={false && !hasOptionSeeAll}>{<Clock />} {item.label}</TextItem>
                                    </ItemResult>
                                    
                                })

                            }
                            {ValueSearch.length > 0 &&
                                resultList.map((item, index) => (
                                    <div key={index} style={{width: '100%', marginTop: 16}}>
                                        <span style={{fontFamily: 'PT Sans', fontSize: 14, fontWeight: 400, color: '#757575', paddingLeft: 16, marginLeft: 5, marginRight: 5}}>
                                            {item.label}
                                        </span>
                                        {item.listResult.map(item => (
                                            <ItemResult 
                                                key={item.id} 
                                                onClick={() => {
                                                    setIsOpenDrop(false)
                                                    return item.onClick(item.id)
                                                }}
                                            >
                                                <TextItem isLastItem={false && !hasOptionSeeAll}>{item.label}</TextItem>
                                            </ItemResult>
                                        ))
                                        }
                                    </div>
                                
                                ))
                            }
                            { hasOptionSeeAll && labeledResultList.length > 0 && ValueSearch.length > 0 &&
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
                    { listResults && listResults.length > 0  && inputOnFocus && !isLabeledResult &&
                        <WrapperResults style={{...style, marginTop: 8}} isVisibleResults={isOpenDrop}
                            onMouseOver={() => setActionAreaInput(true)}
                            onMouseOut={() => setActionAreaInput(false)}
                        >
                            {ValueSearch.length === 0 && inputOnFocus && historicResults && historicResults.length > 0 &&
                                historicResults.map(item => {
                                    return <ItemResult 
                                        key={item.id} 
                                        onClick={() => {
                                            setIsOpenDrop(false)
                                            return item.onClick(item.id)
                                        }}
                                    >
                                        <TextItem isLastItem={false && !hasOptionSeeAll}>{<Clock />} {item.label}</TextItem>
                                    </ItemResult>
                                    
                                })

                            }
                            {ValueSearch.length > 0 &&
                                resultList.map(item => {
                                    return <ItemResult 
                                        key={item.id} 
                                        onClick={() => {
                                            setIsOpenDrop(false)
                                            return item.onClick(item.id)
                                        }}
                                    >
                                        <TextItem isLastItem={false && !hasOptionSeeAll}> {item.label}</TextItem>
                                    </ItemResult>
                                    
                                })
                            }
                            { hasOptionSeeAll && listResults.length > 0 && ValueSearch.length > 0 &&
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
