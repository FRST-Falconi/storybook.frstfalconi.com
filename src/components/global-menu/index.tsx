import React, { useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as S from './globalMenuStyles'
import { IGlobalMenu } from './globalMenu'

import {
    BackArrow,
    ExitArrow,
    FRSTLogo,
    HandWave,
    HasNotificationIcon,
    HelpIcon,
    IconHamburgerMenu,
    IconNotification,
    InstagramIcon,
    LinkedinIcon,
    PodCastIcon,
    SiteIcon,
    SpotifyIcon,
    YoutubeIcon
} from '@shared/icons'

import FieldSearch from '@components/field-search-dropdown'
import ItemGlobalMenu from '@components/item-menu-global'
import DropdownProfileMenu from '@components/dropdown-profile-menu'
import NotificationPopOver from '@components/FI/notificationPopOver'

export default function GlobalMenu({
    variant,
    menu,
    customMenu,
    user,
    search,
    notification,
    languages,
    languageSelected,
    onChangeLanguage,
    style,
    textNotification,
    onClickSite,
    onClickLinkedin,
    onClickInstagram,
    onClickYoutube,
    onClickSpotify,
    onClickPodCast,
    onClickProfileMenuText,
    onClickExit,
    profileMenuText,
    showSearchField,
    marginTopSubMenu,
    hiddenProfileMenu,
    onClickLogo,
    onClickMenuHamburger,
    showHelp,
    onClickHelp,
    onClickNavigation,
    showProfile = true,
    InputField,
    hideNotification,
    showNavigation,
    FrstIconFormatted
}: IGlobalMenu) {
    const [valueSearch, setValueSearch] = useState(search.value)
    const [valueListSearch, setValueListSearch] = useState(search.listEntry)
    const [loadingSearch, setLoadingSearch] = useState(search.loading)

    const [isCompact, setIsCompact] = useState(false)
    const [isVisibleMenuMobile, setIsVisibleMenuMobile] = useState(false)
    const [openNotification, setOpenNotification] = useState(false)
    const [openNotificationMobile, setOpenNotificationMobile] = useState(false)
    const [anchorNotification, setAnchorNotification] = useState(null)
    const [onAreaPopOver, setOnAreaPopOver] = useState(false)
    const [SubMenu, setSubMenu] = useState([])
    const [SelectedItem, setSelectedItem] = useState()
    const [hasNewNotification, setHasNewNotification] = useState(false)
    const [updatedNotificationList, setUpdatedNotificationList] = useState([])
    const [showTooltipHelp, setShowTooltipHelp] = useState(false)

    useEffect(() => {
        setHasNewNotification(!!notification?.hasNewNotification)
    }, [notification, notification?.hasNewNotification])

    useEffect(() => {
        setUpdatedNotificationList(notification?.notificationList)
    }, [notification, notification?.notificationList])

    useEffect(() => {
        setValueListSearch(search.listEntry)
    }, [search.listEntry])

    useEffect(() => {
        setLoadingSearch(search.isloading)
    }, [search.loading])

    useEffect(() => {
        function updateSize() {
            setIsCompact(window.innerWidth < 1000)
            setIsVisibleMenuMobile(false)
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    useEffect(() => {
        setValueSearch(search.value)
        setValueListSearch(search.listEntry)
        setLoadingSearch(search.loading)
    }, [search])

    const handleChangeValueSearch = (value) => {
        setValueSearch(value)
        search.onChange(value)
    }

    const handleCloseNotification = () => {
        setOpenNotification(!openNotification)
        setOpenNotificationMobile(!openNotificationMobile)
    }

    const handleOpenNotification = (event) => {
        setOpenNotification(!openNotification)
        setOpenNotificationMobile(!openNotificationMobile)
        setAnchorNotification(event.currentTarget)
        notification?.handleClickOpenPopOverNotification()
    }

    const onClickNotification = (event) => {
        if (!onAreaPopOver) {
            setOpenNotification(!openNotification)
            setOpenNotificationMobile(!openNotificationMobile)
            setAnchorNotification(event.currentTarget)
        }
    }

    const handleClickItem = (item) => {
        item.onClick()
        setSelectedItem(item.id)
        if (item.subMenu) setSubMenu(item.subMenu)
        else setSubMenu([])
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <>
                <MenuMobile
                    onClickExit={onClickExit}
                    languageSelected={languageSelected}
                    variant={variant || 'default'}
                    items={menu}
                    isVisible={isVisibleMenuMobile}
                    setVisible={(e) => setIsVisibleMenuMobile(e)}
                    onClickSite={onClickSite}
                    onClickLinkedin={onClickLinkedin}
                    onClickInstagram={onClickInstagram}
                    onClickYoutube={onClickYoutube}
                    onClickSpotify={onClickSpotify}
                    onClickPodCast={onClickPodCast}
                    customMenu={customMenu}
                />
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <S.MenuContainer
                        $variant="default"
                        style={style}
                    >
                        <S.MenuInner>
                        {isCompact ? (
                            <S.HamburgerButton style={{ marginLeft: 120 }} onClick={() => onClickMenuHamburger()}>
                                <IconHamburgerMenu />
                            </S.HamburgerButton>
                        ) : (
                            <S.WrapperLogo onClick={() => onClickLogo()}>
                                {FrstIconFormatted ? FrstIconFormatted : <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />}
                            </S.WrapperLogo>
                        )}

                        <S.WrapperMenu
                            style={{
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: InputField ? 'center' : undefined
                            }}
                        >
                            {showSearchField && (
                                InputField ? (
                                    <InputField />
                                ) : (
                                    <FieldSearch
                                        variant="LXP"
                                        value={valueSearch}
                                        onFilter={search.onFilter}
                                        onChange={(e) => handleChangeValueSearch(e.target.value)}
                                        placeholder={search.label}
                                        loading={loadingSearch}
                                        textLoading={search.textLoading}
                                        fieldSearchIsOpen={true}
                                        setFieldSearchIsOpen={() => {}}
                                        isLabeledResult={search.isLabeledResult}
                                        listResults={search.isLabeledResult ? null : valueListSearch}
                                        labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                        historicResults={search.historicResults}
                                        isMobileVersion={isCompact}
                                        hasOptionSeeAll={search.hasOptionSeeAll}
                                        seeAll={search.seeAll}
                                        style={{ width: isCompact ? '180px' : '332px' }}
                                    />
                                )
                            )}
                        </S.WrapperMenu>

                        <S.WrapperRightInfo>
                            {!isCompact && notification && !hideNotification && (
                                <>
                                    {customMenu?.map((item, index) => (
                                        <ItemGlobalMenu
                                            label={item.label}
                                            key={item.id ? item.id : index}
                                            variant="LXP"
                                            type="menu"
                                            pressed={item.id === SelectedItem || item.active}
                                            icon={item.iconBegin}
                                            handleOnClick={() => handleClickItem(item)}
                                            customMenu={customMenu}
                                            style={{
                                                paddingRight: '10px',
                                                paddingLeft: '10px',
                                                height: '100%',
                                                flexDirection: 'inherit'
                                            }}
                                        />
                                    ))}
                                    <S.WrapperIconNotification onClick={onClickNotification}>
                                        <span
                                            style={{ display: 'flex', alignItems: 'center' }}
                                            onClick={handleOpenNotification}
                                        >
                                            <IconNotification fill={FRSTTheme['colors'].shadeWhite} />
                                            {hasNewNotification ? (
                                                <div style={{ position: 'relative', bottom: '5px', right: '10px' }}>
                                                    <HasNotificationIcon />
                                                </div>
                                            ) : null}
                                            <S.WrapperIconNotificationText>
                                                {textNotification}
                                            </S.WrapperIconNotificationText>
                                        </span>
                                        <NotificationPopOver
                                            handleClickMarkRead={notification.handleClickMarkRead}
                                            isOpen={openNotification}
                                            anchor={anchorNotification}
                                            textEmptyState={notification.textEmptyState}
                                            notificationList={updatedNotificationList}
                                            textMarkAllAsRead={notification.textMarkAllAsRead}
                                            textNotification={notification.textNotification}
                                            isMobile={false}
                                            setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                                            textBack={notification.textBack}
                                            handleClickBack={() => handleCloseNotification()}
                                            textDeleteAll={notification.textDeleteAll}
                                            handleClickDeleteAll={notification.handleClickDeleteAll}
                                            isLoading={notification?.isLoading}
                                        />
                                    </S.WrapperIconNotification>
                                </>
                            )}
                            {isCompact && notification && !hideNotification && (
                                <S.WrapperIconNotificationMobile onClick={onClickNotification}>
                                    <span
                                        style={{
                                            display: 'inline-flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <IconNotification fill={FRSTTheme['colors'].shadeWhite} />
                                        {hasNewNotification ? (
                                            <div style={{ marginLeft: '-12px' }}>
                                                <HasNotificationIcon />
                                            </div>
                                        ) : null}
                                    </span>
                                </S.WrapperIconNotificationMobile>
                            )}
                            <DropdownProfileMenu
                                variant="LXP"
                                user={user}
                                profileMenuText={profileMenuText}
                                handleProfileMenuClick={onClickProfileMenuText}
                                menuItems={user && user.menuItems}
                                isMobileVersion={isCompact}
                                hiddenProfileMenu={hiddenProfileMenu}
                                showProfile={showProfile}
                                style={{
                                    marginLeft: isCompact ? '0px' : '5px',
                                    marginRight: isCompact ? '0px' : '5px'
                                }}
                            />
                            {showNavigation && (
                                <S.Navigation onClick={onClickNavigation}>
                                    <HandWave />
                                    <S.TextNotification>Ajuda</S.TextNotification>
                                </S.Navigation>
                            )}
                            {showHelp && (
                                <S.Help
                                    onClick={onClickHelp}
                                    onMouseEnter={() => setShowTooltipHelp(true)}
                                    onMouseLeave={() => setShowTooltipHelp(false)}
                                >
                                    <HelpIcon />
                                    {!isCompact && <S.TextNotification>Suporte</S.TextNotification>}
                                </S.Help>
                            )}
                            {showTooltipHelp && (
                                <div id="cardAjuda" style={{ position: 'relative' }}>
                                    <S.TolltipTopbar>
                                        Clique aqui para tirar suas dúvidas com o nosso suporte.
                                    </S.TolltipTopbar>
                                </div>
                            )}
                        </S.WrapperRightInfo>
                        </S.MenuInner>
                    </S.MenuContainer>

                    {SubMenu && SubMenu.length > 0 && (
                        <S.SubMenuContainer
                            $variant="default"
                            $marginTop={marginTopSubMenu}
                            style={style}
                        >
                            <S.MenuInner>
                            {SubMenu.map((item, index) => (
                                <ItemGlobalMenu
                                    label={item.label}
                                    key={item.id ? item.id : index}
                                    variant="LXP"
                                    type="submenu"
                                    handleOnClick={() => item.onClick('tes')}
                                    style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                />
                            ))}
                            </S.MenuInner>
                        </S.SubMenuContainer>
                    )}
                </div>
                {isCompact && openNotificationMobile && notification && (
                    <NotificationPopOver
                        handleClickMarkRead={notification.handleClickMarkRead}
                        isOpen={openNotificationMobile}
                        anchor={anchorNotification}
                        textEmptyState={notification.textEmptyState}
                        notificationList={updatedNotificationList}
                        textMarkAllAsRead={notification.textMarkAllAsRead}
                        textNotification={notification.textNotification}
                        isMobile={true}
                        setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                        textBack={notification.textBack}
                        handleClickBack={() => handleCloseNotification()}
                        textDeleteAll={notification.textDeleteAll}
                        handleClickDeleteAll={notification.handleClickDeleteAll}
                        isLoading={notification?.isLoading}
                    />
                )}
            </>
        </ThemeProvider>
    )
}

export function MenuMobile({
    items,
    isVisible,
    setVisible,
    variant,
    languageSelected,
    onClickExit,
    onClickSite,
    onClickLinkedin,
    onClickInstagram,
    onClickYoutube,
    onClickSpotify,
    onClickPodCast,
    customMenu
}) {
    const [optionsSubMenu, setOptionsSubmenu] = useState({})
    const [subMenuIsVisible, setSubMenuIsVisible] = useState(false)

    const newOptionsSubMenu = (items) => {
        setOptionsSubmenu(items)
        setTimeout(() => setSubMenuIsVisible(true), 200)
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
                customMenu={customMenu}
            />
            <S.MenuMobile $isVisible={isVisible}>
                {variant === 'LXP' || variant === 'custom' ? (
                    <>
                        <div>
                            <S.ItemMenuMobile onClick={() => setVisible(false)}>
                                <span>
                                    {' '}
                                    <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                                </span>
                            </S.ItemMenuMobile>
                            {items &&
                                items.length > 0 &&
                                items.map((item, index) => {
                                    if (item.label == 'Criar conteúdo') return

                                    if (item.onClick == null)
                                        return (
                                            <S.ItemMenuMobile
                                                onClick={() => newOptionsSubMenu(item.subItens)}
                                                key={index}
                                            >
                                                &nbsp;
                                                {item.label}
                                            </S.ItemMenuMobile>
                                        )

                                    return (
                                        <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                            &nbsp;
                                            {item.label}
                                        </S.ItemMenuMobile>
                                    )
                                })}
                            <S.ItemMenuMobile style={{ borderBottom: 'none' }} onClick={() => onClickExit()}>
                                <span>
                                    {' '}
                                    <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                                </span>
                            </S.ItemMenuMobile>
                        </div>
                        <S.footerMenuMobile>
                            <span style={{ marginTop: 24 }}>
                                {languageSelected === 'en-US'
                                    ? 'Visit our channel and social networks'
                                    : 'Visite nossos canais e redes sociais'}
                            </span>
                            <S.frstSocials>
                                <S.itemFrstSocials onClick={onClickSite}>
                                    {' '}
                                    <SiteIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickLinkedin}>
                                    {' '}
                                    <LinkedinIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickInstagram}>
                                    {' '}
                                    <InstagramIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickYoutube}>
                                    {' '}
                                    <YoutubeIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickSpotify}>
                                    {' '}
                                    <SpotifyIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickPodCast}>
                                    {' '}
                                    <PodCastIcon />{' '}
                                </S.itemFrstSocials>
                            </S.frstSocials>
                        </S.footerMenuMobile>
                    </>
                ) : (
                    <>
                        <div>
                            <S.ItemMenuMobile style={{ paddingBottom: 32 }} onClick={() => setVisible(false)}>
                                <span>
                                    {' '}
                                    <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                                </span>
                            </S.ItemMenuMobile>
                            {items &&
                                items.length > 0 &&
                                items.map((item, index) => {
                                    if (item.label == 'Criar conteúdo') return

                                    if (item.onClick == null)
                                        return (
                                            <S.ItemMenuMobile
                                                onClick={() => newOptionsSubMenu(item.subItens)}
                                                key={index}
                                            >
                                                {item.iconBegin}
                                                &nbsp;
                                                {item.label}
                                            </S.ItemMenuMobile>
                                        )

                                    return (
                                        <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                            {item.iconBegin}
                                            &nbsp;
                                            {item.label}
                                        </S.ItemMenuMobile>
                                    )
                                })}
                            {customMenu?.map((item, index) => (
                                <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                    <span style={{ marginRight: customMenu ? 2 : 0 }}>{item.iconBegin}</span>
                                    &nbsp;
                                    {item.label}
                                </S.ItemMenuMobile>
                            ))}
                        </div>
                        <S.footerMenuMobile>
                            <S.ItemMenuMobile style={{}} onClick={() => onClickExit()}>
                                <span>
                                    {' '}
                                    <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                                </span>
                            </S.ItemMenuMobile>
                            <span style={{ marginTop: 24 }}>
                                {languageSelected === 'en-US'
                                    ? 'Visit our channel and social networks'
                                    : 'Visite nossos canais e redes sociais'}
                            </span>
                            <S.frstSocials>
                                <S.itemFrstSocials onClick={onClickSite}>
                                    {' '}
                                    <SiteIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickLinkedin}>
                                    {' '}
                                    <LinkedinIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickInstagram}>
                                    {' '}
                                    <InstagramIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickYoutube}>
                                    {' '}
                                    <YoutubeIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickSpotify}>
                                    {' '}
                                    <SpotifyIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickPodCast}>
                                    {' '}
                                    <PodCastIcon />{' '}
                                </S.itemFrstSocials>
                            </S.frstSocials>
                        </S.footerMenuMobile>
                    </>
                )}
            </S.MenuMobile>
        </>
    )
}

export function SubMenuMobile({
    items,
    isVisible,
    setVisible,
    variant,
    languageSelected,
    onClickExit,
    onClickSite,
    onClickLinkedin,
    onClickInstagram,
    onClickYoutube,
    onClickSpotify,
    onClickPodCast,
    customMenu
}) {
    const [options, setOptions] = useState(items)
    useEffect(() => {
        setOptions(items)
    }, [items])

    return (
        <S.MenuMobile $isVisible={isVisible} style={{ zIndex: '10002' }}>
            {variant === 'LXP' ? (
                <>
                    <div>
                        {options &&
                            options.length > 0 &&
                            options.map((item, index) => {
                                if (item.label == 'Criar conteúdo') return
                                return (
                                    <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                        {item.label}
                                    </S.ItemMenuMobile>
                                )
                            })}
                    </div>
                    <S.ItemMenuMobile onClick={() => setVisible(false)} style={{ borderTop: '1px solid #444' }}>
                        {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                    </S.ItemMenuMobile>
                </>
            ) : (
                <>
                    <div>
                        <S.ItemMenuMobile style={{ paddingBottom: 32 }} onClick={() => setVisible(false)}>
                            <span>
                                {' '}
                                <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                            </span>
                        </S.ItemMenuMobile>
                        {options &&
                            options.length > 0 &&
                            options.map((item, index) => {
                                if (item.label == 'Criar conteúdo') return

                                if (item.onClick == null)
                                    return (
                                        <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                            {item.iconBegin}
                                            &nbsp;
                                            {item.label}
                                        </S.ItemMenuMobile>
                                    )

                                return (
                                    <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                        {item.iconBegin}
                                        &nbsp;
                                        {item.label}
                                    </S.ItemMenuMobile>
                                )
                            })}
                        {customMenu?.map((item, index) => (
                            <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                {item.iconBegin}
                                &nbsp;
                                {item.label}
                            </S.ItemMenuMobile>
                        ))}
                    </div>
                    <S.footerMenuMobile>
                        <S.ItemMenuMobile style={{}} onClick={() => onClickExit()}>
                            <span>
                                {' '}
                                <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                            </span>
                        </S.ItemMenuMobile>
                        <span style={{ marginTop: 24 }}>
                            {languageSelected === 'en-US'
                                ? 'Visit our channel and social networks'
                                : 'Visite nossos canais e redes sociais'}
                        </span>
                        <S.frstSocials>
                            <S.itemFrstSocials onClick={onClickSite}>
                                {' '}
                                <SiteIcon />{' '}
                            </S.itemFrstSocials>
                            <S.itemFrstSocials onClick={onClickLinkedin}>
                                {' '}
                                <LinkedinIcon />{' '}
                            </S.itemFrstSocials>
                            <S.itemFrstSocials onClick={onClickInstagram}>
                                {' '}
                                <InstagramIcon />{' '}
                            </S.itemFrstSocials>
                            <S.itemFrstSocials onClick={onClickYoutube}>
                                {' '}
                                <YoutubeIcon />{' '}
                            </S.itemFrstSocials>
                            <S.itemFrstSocials onClick={onClickSpotify}>
                                {' '}
                                <SpotifyIcon />{' '}
                            </S.itemFrstSocials>
                            <S.itemFrstSocials onClick={onClickPodCast}>
                                {' '}
                                <PodCastIcon />{' '}
                            </S.itemFrstSocials>
                        </S.frstSocials>
                    </S.footerMenuMobile>
                </>
            )}
        </S.MenuMobile>
    )
}

export function SideMenu({
    items,
    isVisible,
    setVisible,
    variant,
    languageSelected,
    onClickExit,
    onClickSite,
    onClickLinkedin,
    onClickInstagram,
    onClickYoutube,
    onClickSpotify,
    onClickPodCast,
    customMenu
}) {
    const [optionsSubMenu, setOptionsSubmenu] = useState({})
    const [subMenuIsVisible, setSubMenuIsVisible] = useState(false)

    const newOptionsSubMenu = (items) => {
        setOptionsSubmenu(items)
        setTimeout(() => setSubMenuIsVisible(true), 200)
    }

    return (
        <>
            <S.SideMenu $isVisible={isVisible}>
                {variant === 'LXP' ? (
                    <>
                        <div>
                            <S.ItemSideMenu onClick={() => setVisible(false)}>
                                <span>
                                    {' '}
                                    <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                                </span>
                            </S.ItemSideMenu>
                            {items &&
                                items.length > 0 &&
                                items.map((item, index) => {
                                    if (item.label == 'Criar conteúdo') return

                                    if (item.onClick == null)
                                        return (
                                            <S.ItemSideMenu
                                                onClick={() => newOptionsSubMenu(item.subItens)}
                                                key={index}
                                            >
                                                &nbsp;
                                                {item.label}
                                            </S.ItemSideMenu>
                                        )

                                    return (
                                        <S.ItemSideMenu onClick={(e) => item.onClick(e)} key={index}>
                                            &nbsp;
                                            {item.label}
                                        </S.ItemSideMenu>
                                    )
                                })}
                            <S.ItemSideMenu style={{ borderBottom: 'none' }} onClick={() => onClickExit()}>
                                <span>
                                    {' '}
                                    <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                                </span>
                            </S.ItemSideMenu>
                        </div>
                        <S.footerMenuMobile>
                            <span style={{ marginTop: 24 }}>
                                {languageSelected === 'en-US'
                                    ? 'Visit our channel and social networks'
                                    : 'Visite nossos canais e redes sociais'}
                            </span>
                            <S.frstSocials>
                                <S.itemFrstSocials onClick={onClickSite}>
                                    {' '}
                                    <SiteIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickLinkedin}>
                                    {' '}
                                    <LinkedinIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickInstagram}>
                                    {' '}
                                    <InstagramIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickYoutube}>
                                    {' '}
                                    <YoutubeIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickSpotify}>
                                    {' '}
                                    <SpotifyIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickPodCast}>
                                    {' '}
                                    <PodCastIcon />{' '}
                                </S.itemFrstSocials>
                            </S.frstSocials>
                        </S.footerMenuMobile>
                    </>
                ) : (
                    <>
                        <div>
                            <S.ItemMenuMobile style={{ paddingBottom: 32 }} onClick={() => setVisible(false)}>
                                <span>
                                    {' '}
                                    <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                                </span>
                            </S.ItemMenuMobile>
                            {items &&
                                items.length > 0 &&
                                items.map((item, index) => {
                                    if (item.label == 'Criar conteúdo') return

                                    if (item.onClick == null)
                                        return (
                                            <S.ItemMenuMobile
                                                onClick={() => newOptionsSubMenu(item.subItens)}
                                                key={index}
                                            >
                                                {item.iconBegin}
                                                &nbsp;
                                                {item.label}
                                            </S.ItemMenuMobile>
                                        )

                                    return (
                                        <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                            {item.iconBegin}
                                            &nbsp;
                                            {item.label}
                                        </S.ItemMenuMobile>
                                    )
                                })}
                            {customMenu?.map((item, index) => (
                                <S.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                    {item.iconBegin}
                                    &nbsp;
                                    {item.label}
                                </S.ItemMenuMobile>
                            ))}
                        </div>
                        <S.footerMenuMobile>
                            <S.ItemMenuMobile style={{}} onClick={() => onClickExit()}>
                                <span>
                                    {' '}
                                    <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                                </span>
                            </S.ItemMenuMobile>
                            <span style={{ marginTop: 24 }}>
                                {languageSelected === 'en-US'
                                    ? 'Visit our channel and social networks'
                                    : 'Visite nossos canais e redes sociais'}
                            </span>
                            <S.frstSocials>
                                <S.itemFrstSocials onClick={onClickSite}>
                                    {' '}
                                    <SiteIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickLinkedin}>
                                    {' '}
                                    <LinkedinIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickInstagram}>
                                    {' '}
                                    <InstagramIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickYoutube}>
                                    {' '}
                                    <YoutubeIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickSpotify}>
                                    {' '}
                                    <SpotifyIcon />{' '}
                                </S.itemFrstSocials>
                                <S.itemFrstSocials onClick={onClickPodCast}>
                                    {' '}
                                    <PodCastIcon />{' '}
                                </S.itemFrstSocials>
                            </S.frstSocials>
                        </S.footerMenuMobile>
                    </>
                )}
            </S.SideMenu>
        </>
    )
}
