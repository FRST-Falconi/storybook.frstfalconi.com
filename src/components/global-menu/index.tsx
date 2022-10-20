import React, { useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './globalMenuStyles'
import { IGlobalMenu } from './globalMenu'

import { BackArrow, ExitArrow, FRSTLogo, IconNotification, InstagramIcon, LinkedinIcon, PodCastIcon, SiteIcon, SpotifyIcon, YoutubeIcon } from '@shared/icons'

import FieldSearch from '@components/field-search-dropdown'
import ItemGlobalMenu from '@components/item-menu-global'
import LanguagesDropdown from '@components/languages-dropdown'
import DropdownProfileMenu from '@components/dropdown-profile-menu'
import { PropaneSharp } from '@mui/icons-material'


export default function GlobalMenu({ variant, menu, subMenu, user, search, notification, haveNotification, handleNotification, languages, languageSelected, onChangeLanguage, style, textNotification, onClickHome, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast, onClickProfileMenuText, onClickExit, profileMenuText }: IGlobalMenu) {
    const [valueSearch, setValueSearch] = useState(search.value)
    const [valueListSearch, setValueListSearch] = useState(search.listEntry)
    const [loadingSearch, setLoadingSearch] = useState(search.loading)

    const [controlExpandedSearchMobile, setControlExpandedSearchMobile] = useState(true)
    const [showLogo, setShowLogo] = useState(false)
    const [isVisibleMenuMobile, setIsVisibleMenuMobile] = useState(false)

    const [windowSize, setWindowSize] = useState([0, 0])
    const [isMobileVersion, setIsMobileVersion] = useState(false)
    useEffect(() => {
        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
            setIsMobileVersion(window.innerWidth < 1200)
            setShowLogo(false)
            setIsVisibleMenuMobile(false)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        setValueSearch(search.value)
        setValueListSearch(search.listEntry)
        setLoadingSearch(search.loading)
    }, [search])

    useEffect(() => {
        setShowLogo(isMobileVersion)
    }, [])

    useEffect(() => {
        if (!controlExpandedSearchMobile)
            setTimeout(() => {
                setShowLogo(!controlExpandedSearchMobile && isMobileVersion)
            }, 1500)
        else
            setShowLogo(!controlExpandedSearchMobile && isMobileVersion)

    }, [controlExpandedSearchMobile])

    const handleChangeValueSearch = (value) => {
        setValueSearch(value)
        search.onChange(value)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            {variant == 'LXP' ?
                <>
                    <MenuMobile onClickExit={onClickExit} languageSelected={languageSelected} variant={'LXP'} items={menu} isVisible={isVisibleMenuMobile} setVisible={(e) => setIsVisibleMenuMobile(e)} onClickSite={onClickSite} onClickLinkedin={onClickLinkedin} onClickInstagram={onClickInstagram} onClickYoutube={onClickYoutube} onClickSpotify={onClickSpotify} onClickPodCast={onClickPodCast} />
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Styles.MenuContainer
                            variant={variant}
                            style={{
                                paddingRight: windowSize[0] > 1400 ? '124px' : '35px',
                                paddingLeft: windowSize[0] > 1400 ? '124px' : '35px',
                                ...style
                            }
                            }
                        >
                            {isMobileVersion &&
                                <Styles.HamburgerButton onClick={() => setIsVisibleMenuMobile(true)}>
                                    <IconHamburgerMenu />
                                </Styles.HamburgerButton>
                            }
                            {!isMobileVersion &&
                                <Styles.WrapperLogo>
                                    <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1} />
                                </Styles.WrapperLogo>
                            }
                            {showLogo &&
                                <Styles.WrapperLogo style={{ marginRight: '0px' }}>
                                    <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1} />
                                </Styles.WrapperLogo>
                            }
                            <Styles.WrapperMenu style={{ height: '100%' }}>
                                {!isMobileVersion && <FieldSearch
                                    variant='LXP'
                                    value={valueSearch}
                                    onChange={(e) => handleChangeValueSearch(e.target.value)}
                                    placeholder={search.label}
                                    setLoading={(e) => setLoadingSearch(e)}
                                    loading={loadingSearch}

                                    setFieldSearchIsOpen={setControlExpandedSearchMobile}

                                    listResults={valueListSearch}
                                    isMobileVersion={isMobileVersion}
                                    hasOptionSeeAll
                                    seeAll={search.seeAll}

                                    style={{
                                        width: isMobileVersion ? '190px' : '332px',
                                    }}
                                />}
                                <Styles.MenuContainer
                                    variant={variant}
                                    style={{
                                        height: '100%',
                                        paddingLeft: (windowSize[0] * 0.03) + 'px',
                                        paddingRight: (windowSize[0] * 0.03) + 'px',
                                        justifyContent: 'center'
                                    }}>
                                    {!isMobileVersion && menu && menu.length > 0 && menu.map((item, index) => {
                                        return <ItemGlobalMenu
                                            label={item.label}
                                            key={item.id ? item.id : index}
                                            variant='LXP'
                                            type='menu'
                                            pressed={item.active}
                                            onClick={() => item.onClick('tes')}
                                            style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                        />
                                    })}
                                </Styles.MenuContainer>
                            </Styles.WrapperMenu>
                            {isMobileVersion &&
                                <FieldSearch
                                    variant='LXP'
                                    value={valueSearch}
                                    onChange={(e) => handleChangeValueSearch(e.target.value)}
                                    placeholder={search.label}
                                    setLoading={(e) => setLoadingSearch(e)}
                                    loading={loadingSearch}

                                    fieldSearchIsOpen={controlExpandedSearchMobile}
                                    setFieldSearchIsOpen={setControlExpandedSearchMobile}

                                    listResults={valueListSearch}
                                    isMobileVersion={isMobileVersion}
                                    hasOptionSeeAll
                                    seeAll={search.seeAll}

                                    style={{
                                        width: isMobileVersion ? '180px' : '332px',
                                        marginLeft: controlExpandedSearchMobile ? '-25px' : '-50px'
                                    }}
                                />}
                            <Styles.WrapperRightInfo style={{ width: '150px' }}>
                                {!isMobileVersion && notification &&
                                    <Styles.WrapperIconNotification>
                                        <IconNotification />
                                    </Styles.WrapperIconNotification>
                                }
                                <DropdownProfileMenu
                                    variant='LXP'
                                    user={user}
                                    profileMenuText={profileMenuText}
                                    handleProfileMenuClick={onClickProfileMenuText}
                                    menuItems={user && user.menuItems}
                                    isMobileVersion={isMobileVersion}
                                    style={{
                                        marginLeft: isMobileVersion ? '0px' : '5px',
                                        marginRight: isMobileVersion ? '0px' : '5px'
                                    }}
                                />
                                {!isMobileVersion && languages && languages.length > 0 &&
                                    <LanguagesDropdown
                                        variant='LXP'
                                        languages={[...languages]}
                                        selected={languageSelected}
                                        onSelect={(e) => onChangeLanguage(e)}
                                        distanceBtnDrop={'57px'}
                                    />
                                }
                            </Styles.WrapperRightInfo>
                        </Styles.MenuContainer>
                        {subMenu && subMenu.length > 0 &&
                            <Styles.SubMenuContainer
                                variant={variant}
                                style={{
                                    paddingRight: windowSize[0] > 1400 ? '124px' : '35px',
                                    paddingLeft: windowSize[0] > 1400 ? '124px' : '35px',
                                    ...style
                                }
                                }>
                                {subMenu.map((item, index) => {
                                    return <ItemGlobalMenu
                                        label={item.label}
                                        key={item.id ? item.id : index}
                                        variant='LXP'
                                        type='submenu'
                                        onClick={() => item.onClick('tes')}
                                        style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                    />
                                })}
                            </Styles.SubMenuContainer>}
                    </div>
                </>
                : variant === 'default' ?
                    <>
                        <MenuMobile onClickExit={onClickExit} languageSelected={languageSelected} variant={'default'} items={menu} isVisible={isVisibleMenuMobile} setVisible={(e) => setIsVisibleMenuMobile(e)} onClickSite={onClickSite} onClickLinkedin={onClickLinkedin} onClickInstagram={onClickInstagram} onClickYoutube={onClickYoutube} onClickSpotify={onClickSpotify} onClickPodCast={onClickPodCast} />
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Styles.MenuContainer
                                variant={variant}
                                style={{
                                    paddingRight: windowSize[0] > 1400 ? '124px' : '35px',
                                    paddingLeft: windowSize[0] > 1400 ? '124px' : '35px',
                                    ...style
                                }
                                }
                            >
                                {isMobileVersion &&
                                    <Styles.HamburgerButton onClick={() => setIsVisibleMenuMobile(true)}>
                                        <IconHamburgerMenu />
                                    </Styles.HamburgerButton>
                                }
                                {!isMobileVersion &&
                                    <Styles.WrapperLogo style={{cursor: 'pointer'}} onClick={onClickHome}>
                                        <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1} />
                                    </Styles.WrapperLogo>
                                }
                                {isMobileVersion &&
                                    <Styles.WrapperLogo >
                                        <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1} />
                                    </Styles.WrapperLogo>
                                }
                                
                                <Styles.WrapperRightInfo style={{width: 'fit-content', justifyContent:'flex-end'}} >
                                    {!isMobileVersion && notification &&
                                        <Styles.WrapperIconNotification onClick={handleNotification}>
                                            <span style={{display: 'inline-flex', color: '#FFF' }}><IconNotification fill={FRSTTheme['colors'].shadeWhite} /> {haveNotification && <div style={{marginLeft:'-12px'}}> <HasNotificationIcon/> </div>} &nbsp; {textNotification} </span>
                                        </Styles.WrapperIconNotification>
                                    }
                                    <DropdownProfileMenu
                                        variant='LXP'
                                        user={user}
                                        profileMenuText={profileMenuText}
                                        handleProfileMenuClick={onClickProfileMenuText}
                                        menuItems={user && user.menuItems}
                                        isMobileVersion={isMobileVersion}
                                        style={{
                                            marginLeft: isMobileVersion ? '0px' : '5px',
                                            marginRight: isMobileVersion ? '0px' : '5px'
                                        }}
                                    />
                                    {!isMobileVersion && languages && languages.length > 0 &&
                                        <LanguagesDropdown
                                            variant='LXP'
                                            languages={[...languages]}
                                            selected={languageSelected}
                                            onSelect={(e) => onChangeLanguage(e)}
                                            distanceBtnDrop={'57px'}
                                        />
                                    }
                                </Styles.WrapperRightInfo>
                            </Styles.MenuContainer>
                            {subMenu && subMenu.length > 0 &&
                                <Styles.SubMenuContainer
                                    variant={variant}
                                    style={{
                                        paddingRight: windowSize[0] > 1400 ? '124px' : '35px',
                                        paddingLeft: windowSize[0] > 1400 ? '124px' : '35px',
                                        ...style
                                    }
                                    }>
                                    {subMenu.map((item, index) => {
                                        return <ItemGlobalMenu
                                            label={item.label}
                                            key={item.id ? item.id : index}
                                            variant='LXP'
                                            type='submenu'
                                            onClick={() => item.onClick('tes')}
                                            style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                        />
                                    })}
                                </Styles.SubMenuContainer>}
                        </div>
                    </>
                    :
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', ...style }}>
                        <Styles.MenuContainer variant={variant} style={{ ...style, display: 'none' }}>
                            <Styles.WrapperLogo>
                                <FRSTLogo height='28' />
                            </Styles.WrapperLogo>
                            <Styles.WrapperMenu>
                                {menu && menu.length > 0 && menu.map((item, index) => {
                                    return <ItemGlobalMenu
                                        label={item.label}
                                        key={item.id ? item.id : index}
                                        variant='default'
                                        type='menu'
                                        onClick={() => item.onClick('tes')}
                                        style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                    />
                                })}
                            </Styles.WrapperMenu>
                            <Styles.WrapperRightInfo>
                                <DropdownProfileMenu
                                    variant='default'
                                    user={user}
                                    menuItems={user && user.menuItems}
                                    isMobileVersion={isMobileVersion}
                                    profileMenuText={profileMenuText}
                                    handleProfileMenuClick={onClickProfileMenuText}
                                />
                            </Styles.WrapperRightInfo>
                            {languages && languages.length > 0 &&
                                <LanguagesDropdown
                                    variant='default'
                                    languages={[...languages]}
                                    selected={languageSelected}
                                    onSelect={(e) => onChangeLanguage(e)}
                                    distanceBtnDrop={'45px'}
                                />
                            }
                        </Styles.MenuContainer>
                    </div>
            }
        </ThemeProvider>
    )
}


export function MenuMobile({ items, isVisible, setVisible, variant, languageSelected, onClickExit, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }) {
    const [ optionsSubMenu, setOptionsSubmenu ] =useState({});
    const [ subMenuIsVisible, setSubMenuIsVisible ] =useState(false);

    const newOptionsSubMenu = (items) => {
        setOptionsSubmenu(items);
        console.log(items)
        setTimeout(() => setSubMenuIsVisible(true)
        , 200)
    }

    return (
    <>
        <SubMenuMobile 
            onClickExit={onClickExit}
            items={optionsSubMenu}
            isVisible={subMenuIsVisible}
            setVisible={setSubMenuIsVisible}
            variant={variant}
            languageSelected={languageSelected}
            onClickSite={onClickSite}
            onClickLinkedin={onClickLinkedin}
            onClickInstagram={onClickInstagram}
            onClickYoutube={onClickYoutube}
            onClickSpotify={onClickSpotify}
            onClickPodCast={onClickPodCast}
        />
        <Styles.MenuMobile isVisible={isVisible}>
            {variant === 'LXP' ?
                <>
                    <div>
                        {items && items.length > 0 && items.map((item, index) => {
                            if (item.label == 'Criar conteúdo') return;
                            return <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                {item.label}
                            </Styles.ItemMenuMobile>
                        })}
                    </div>
                    <Styles.ItemMenuMobile onClick={() => setVisible(false)} style={{ borderTop: '1px solid #444' }}>
                        {languageSelected === 'en' ? 'Back' : 'Voltar'}
                    </Styles.ItemMenuMobile>
                </>
                : 
                <>
                    <div>
                        <Styles.ItemMenuMobile style={{paddingBottom: 32}} onClick={() => setVisible(false)} >
                            <span> <BackArrow fill='white' /> &nbsp; {languageSelected === 'en' ? 'Back' : 'Voltar'}</span>
                        </Styles.ItemMenuMobile>
                        {items && items.length > 0 && items.map((item, index) => {
                            if (item.label == 'Criar conteúdo') return;

                            if(item.onClick == null)
                            return <Styles.ItemMenuMobile onClick={() => newOptionsSubMenu(item.subItens)} key={index}>
                                        {item.iconBegin}
                                        &nbsp;
                                        {item.label}
                                    </Styles.ItemMenuMobile>

                            return <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                {item.iconBegin}
                                &nbsp;
                                {item.label}
                            </Styles.ItemMenuMobile>
                        })}
                    </div>
                    <Styles.footerMenuMobile>
                        <Styles.ItemMenuMobile style={{}} onClick={() => onClickExit()} >
                            <span> <ExitArrow fill='white' /> &nbsp; {languageSelected === 'en' ? 'Leave' : 'Sair'}</span>
                        </Styles.ItemMenuMobile>
                        <span style={{marginTop: 24}}>{languageSelected === 'en' ? 'Visit our channel and social networks' : 'Visite nossos canais e redes sociais'}</span>
                        <Styles.frstSocials>
                            <Styles.itemFrstSocials onClick={onClickSite} > <SiteIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickLinkedin} > <LinkedinIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickInstagram} > <InstagramIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickYoutube} > <YoutubeIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickSpotify} > <SpotifyIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickPodCast} > <PodCastIcon /> </Styles.itemFrstSocials>
                        </Styles.frstSocials>
                    </Styles.footerMenuMobile>
                </>
            }
        </Styles.MenuMobile>
    </>
    )
}


export function SubMenuMobile({ items, isVisible, setVisible, variant, languageSelected, onClickExit, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }) {
    const [options, setOptions] = useState(items)
    useEffect(() => {
        setOptions(items)
    }, [items])

    return (
        <Styles.MenuMobile isVisible={isVisible} style={{zIndex: '10002'}}>
            {variant === 'LXP' ?
                <>
                    <div>
                        {options && options.length > 0 && options.map((item, index) => {
                            if (item.label == 'Criar conteúdo') return;
                            return <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                {item.label}
                            </Styles.ItemMenuMobile>
                        })}
                    </div>
                    <Styles.ItemMenuMobile onClick={() => setVisible(false)} style={{ borderTop: '1px solid #444' }}>
                        {languageSelected === 'en' ? 'Back' : 'Voltar'}
                    </Styles.ItemMenuMobile>
                </>
                : 
                <>
                    <div>
                        <Styles.ItemMenuMobile style={{paddingBottom: 32}} onClick={() => setVisible(false)} >
                            <span> <BackArrow fill='white' /> &nbsp; {languageSelected === 'en' ? 'Back' : 'Voltar'}</span>
                        </Styles.ItemMenuMobile>
                        {options && options.length > 0 && options.map((item, index) => {
                            if (item.label == 'Criar conteúdo') return;

                            if(item.onClick == null)
                            return <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                        {item.iconBegin}
                                        &nbsp;
                                        {item.label}
                                    </Styles.ItemMenuMobile>

                            return <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                {item.iconBegin}
                                &nbsp;
                                {item.label}
                            </Styles.ItemMenuMobile>
                        })}
                    </div>
                    <Styles.footerMenuMobile>
                        <Styles.ItemMenuMobile style={{}} onClick={() => onClickExit()} >
                            <span> <ExitArrow fill='white' /> &nbsp; {languageSelected === 'en' ? 'Leave' : 'Sair'}</span>
                        </Styles.ItemMenuMobile>
                        <span style={{marginTop: 24}}>{languageSelected === 'en' ? 'Visit our channel and social networks' : 'Visite nossos canais e redes sociais'}</span>
                        <Styles.frstSocials>
                            <Styles.itemFrstSocials onClick={onClickSite} > <SiteIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickLinkedin} > <LinkedinIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickInstagram} > <InstagramIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickYoutube} > <YoutubeIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickSpotify} > <SpotifyIcon /> </Styles.itemFrstSocials>
                            <Styles.itemFrstSocials onClick={onClickPodCast} > <PodCastIcon /> </Styles.itemFrstSocials>
                        </Styles.frstSocials>
                    </Styles.footerMenuMobile>
                </>
            }
        </Styles.MenuMobile>
    )
}


export function IconHamburgerMenu() {
    return (
        <div>
            <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.46 2.4H6.23L4.79 6.42L4.28 8.06H4.26L3.76 6.41L2.31 2.4H1.08V9H1.84V4.85L1.75 3.11H1.76L3.93 9H4.61L6.78 3.11H6.79L6.7 4.85V9H7.46V2.4ZM13.6673 6.24C13.6673 4.95 12.8773 3.9 11.4273 3.9C9.91727 3.9 9.06727 4.88 9.06727 6.5C9.06727 8.12 9.97727 9.1 11.4873 9.1C12.5673 9.1 13.1873 8.69 13.5673 8.01L12.8973 7.66C12.7173 8.14 12.2173 8.4 11.4873 8.4C10.5673 8.4 9.95727 7.81 9.85727 6.8H13.6273C13.6473 6.66 13.6673 6.47 13.6673 6.24ZM11.4273 4.6C12.2773 4.6 12.7873 5.17 12.8973 6.09H9.86727C9.98727 5.15 10.5373 4.6 11.4273 4.6ZM17.6178 3.9C16.9278 3.9 16.2878 4.15 15.9378 4.78L15.8878 4H15.1878V9H15.9878V6.34C15.9878 5.06 16.8078 4.6 17.5378 4.6C18.2278 4.6 18.7678 4.97 18.7678 6.08V9H19.5678V5.8C19.5678 4.51 18.6878 3.9 17.6178 3.9ZM24.9092 4V6.72C24.9092 7.9 24.1592 8.4 23.3092 8.4C22.5892 8.4 22.1292 8.09 22.1292 7.06V4H21.3292V7.27C21.3292 8.59 22.1792 9.1 23.1692 9.1C23.9692 9.1 24.6092 8.84 24.9592 8.24L25.0092 9H25.7092V4H24.9092Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 15.5854C0 15.0332 0.447715 14.5854 1 14.5854H24.7843C25.3366 14.5854 25.7843 15.0332 25.7843 15.5854C25.7843 16.1377 25.3366 16.5854 24.7843 16.5854H1C0.447715 16.5854 0 16.1377 0 15.5854ZM0 23.6736C0 23.1213 0.447715 22.6736 1 22.6736H24.7843C25.3366 22.6736 25.7843 23.1213 25.7843 23.6736C25.7843 24.2259 25.3366 24.6736 24.7843 24.6736H1C0.447715 24.6736 0 24.2259 0 23.6736ZM1 30.7617C0.447715 30.7617 0 31.2094 0 31.7617C0 32.314 0.447715 32.7617 1 32.7617H24.7843C25.3366 32.7617 25.7843 32.314 25.7843 31.7617C25.7843 31.2094 25.3366 30.7617 24.7843 30.7617H1Z" fill="white" />
            </svg>
        </div>
    )
}

export function HasNotificationIcon() {
    return (
        <div>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10" rx="5" fill="#FF4D0D"/>
            </svg>
        </div>
    )
}