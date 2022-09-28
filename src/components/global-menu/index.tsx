import React,{ useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './globalMenuStyles'
import { IGlobalMenu } from './globalMenu'

import { FRSTLogo } from '@shared/icons'

import FieldSearch from '@components/field-search-dropdown'
import ItemGlobalMenu from '@components/item-menu-global'
import LanguagesDropdown from '@components/languages-dropdown'
import DropdownProfileMenu from '@components/dropdown-profile-menu'


export default function GlobalMenu({ variant, menu, subMenu, user, search, notification, handleNotification, languages, languageSelected, onChangeLanguage, style}: IGlobalMenu) {
    const [ valueSearch, setValueSearch ] = useState(search.value)
    const [ valueListSearch, setValueListSearch] = useState(search.listEntry)
    const [ loadingSearch, setLoadingSearch ] = useState(search.loading)

    useEffect(() => {
        setValueSearch(search.value)
        setValueListSearch(search.listEntry)
        setLoadingSearch(search.loading)
    }, [search])

    const handleChangeValueSearch = (value) => {
        setValueSearch(value)        
        search.onChange(value)
    }
    
   return (
        <ThemeProvider theme={FRSTTheme}>
            { variant == 'LXP' ?
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Styles.MenuContainer variant={variant} style={{...style}}>
                        <Styles.WrapperLogo>
                            <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1}/>
                        </Styles.WrapperLogo>
                        <Styles.WrapperMenu>
                            <FieldSearch 
                                variant='LXP'
                                value={valueSearch}
                                onChange={(e) => handleChangeValueSearch(e.target.value)}
                                placeholder={search.label}
                                setLoading={(e) => setLoadingSearch(e)}
                                loading={loadingSearch}

                                listResults={valueListSearch}
                                hasOptionSeeAll
                                seeAll={search.seeAll}

                                style={ {width: '332px', marginRight: '96px'} }
                            />
                            { menu && menu.length > 0 && menu.map((item, index) => {
                                return <ItemGlobalMenu 
                                        label={item.label}
                                        key={item.id ? item.id : index} 
                                        variant='LXP' 
                                        type='menu'
                                        onClick={() => item.onClick('tes')}
                                        style={{paddingRight: '10px', paddingLeft: '10px'}}
                                    />
                            })}
                            { notification && 
                                <Styles.WrapperIconNotification>
                                    <IconNotification/>
                                </Styles.WrapperIconNotification>
                            }
                        </Styles.WrapperMenu>
                        <Styles.WrapperRightInfo>
                            <DropdownProfileMenu 
                                variant='LXP'
                                user={user}
                                menuItems={user && user.menuItems}
                            />
                        </Styles.WrapperRightInfo>
                        { languages && languages.length > 0 &&
                                <LanguagesDropdown
                                    variant='LXP'
                                    languages={[...languages]}
                                    selected={languageSelected}
                                    onSelect={(e) => onChangeLanguage(e)}
                                    distanceBtnDrop={'57px'}
                                />
                        }
                    </Styles.MenuContainer>
                    <Styles.SubMenuContainer variant={variant} style={{...style}}>
                        { subMenu && subMenu.length > 0 && subMenu.map((item, index) => {
                                return <ItemGlobalMenu 
                                        label={item.label}
                                        key={item.id ? item.id : index} 
                                        variant='LXP' 
                                        type='submenu'
                                        onClick={() => item.onClick('tes')}
                                        style={{paddingRight: '10px', paddingLeft: '10px'}}
                                    />
                        })}
                    </Styles.SubMenuContainer>
                </div>
                :
                <Styles.MenuContainer variant={variant} style={{...style}}>
                    <Styles.WrapperLogo>
                        <FRSTLogo height='28'/>
                    </Styles.WrapperLogo>
                    <Styles.WrapperMenu>
                        { menu && menu.length > 0 && menu.map((item, index) => {
                            return <ItemGlobalMenu 
                                    label={item.label}
                                    key={item.id ? item.id : index} 
                                    variant='default' 
                                    type='menu'
                                    onClick={() => item.onClick('tes')}
                                    style={{paddingRight: '10px', paddingLeft: '10px'}}
                                />
                        })}
                    </Styles.WrapperMenu>
                    <Styles.WrapperRightInfo>
                        <DropdownProfileMenu 
                            variant='default'
                            user={user}
                            menuItems={user && user.menuItems}
                        />
                    </Styles.WrapperRightInfo>
                    { languages && languages.length > 0 &&
                            <LanguagesDropdown
                                variant='default'
                                languages={[...languages]}
                                selected={languageSelected}
                                onSelect={(e) => onChangeLanguage(e)}
                                distanceBtnDrop={'45px'}
                            />
                    }
                </Styles.MenuContainer>
            }
        </ThemeProvider>
    )
}

export function IconNotification() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2843 18.389H5.71573C5.09953 18.389 4.6 17.8895 4.6 17.2733C4.6 17.0869 4.6467 16.9034 4.73583 16.7397L4.20888 16.4528L4.73583 16.7397L5.28347 15.7339C5.49118 15.3524 5.6 14.925 5.6 14.4906V10.9998C5.6 7.4652 8.46538 4.59982 12 4.59982C15.5346 4.59982 18.4 7.4652 18.4 10.9998V14.4906C18.4 14.925 18.5088 15.3524 18.7165 15.7339L19.2642 16.7397C19.3533 16.9034 19.4 17.0869 19.4 17.2733C19.4 17.8895 18.9005 18.389 18.2843 18.389Z" stroke="#FFD600" strokeWidth="1.2"/>
            <path d="M10 4.99982L10 3.99982C10 2.89526 10.8954 1.99982 12 1.99982V1.99982C13.1046 1.99982 14 2.89526 14 3.99982V4.99982" stroke="#FFD600" strokeWidth="1.2"/>
            <path d="M9 18.9998V18.9998C9 20.6567 10.3431 21.9998 12 21.9998V21.9998C13.6569 21.9998 15 20.6567 15 18.9998V18.9998" stroke="#FFD600" strokeWidth="1.2"/>
        </svg>
    )
}