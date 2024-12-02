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
import LanguagesDropdown from '@components/languages-dropdown'
import DropdownProfileMenu from '@components/dropdown-profile-menu'
import NotificationPopOver from '@components/FI/notificationPopOver'
import { styled } from '@mui/material/styles'
import Tooltip from '@components/DS/tooltip'

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
    showNavigation
}: IGlobalMenu) {
    const [valueSearch, setValueSearch] = useState(search.value)
    const [valueListSearch, setValueListSearch] = useState(search.listEntry)
    const [loadingSearch, setLoadingSearch] = useState(search.loading)

    const [isMobileVersion, setIsMobileVersion] = useState(false)
    const [controlExpandedSearchMobile, setControlExpandedSearchMobile] = useState(false)
    const [showLogo, setShowLogo] = useState(false)
    const [isVisibleMenuMobile, setIsVisibleMenuMobile] = useState(false)
    const [isVisibleSideMenu, setIsVisibleSideMenu] = useState(false)

    const [windowSize, setWindowSize] = useState([0, 0])
    const [openNotification, setOpenNotification] = useState(false)
    const [openNotificationMobile, setOpenNotificationMobile] = useState(false)
    const [anchorNotification, setAnchorNotification] = useState(null)
    const [onAreaPopOver, setOnAreaPopOver] = useState(false)
    const [SubMenu, setSubMenu] = useState([])
    const [SelectedItem, setSelectedItem] = useState()
    const [isTabletVersion, setIsTabletVersion] = useState(false)
    const [HideHambMenu, setHideHambMenu] = useState(false)

    const [hasNewNotification, setHasNewNotification] = useState(false)
    const [updatedNotificationList, setUpdatedNotificationList] = useState([])

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
            setWindowSize([window.innerWidth, window.innerHeight])
            setIsMobileVersion(window.innerWidth < 700)
            setIsTabletVersion(window.innerWidth < 1200 && window.innerWidth >= 700)
            setShowLogo(false)
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

    useEffect(() => {
        setShowLogo(isMobileVersion)
        if (isMobileVersion) setControlExpandedSearchMobile(false)
        else {
            setControlExpandedSearchMobile(true)
        }
    }, [isMobileVersion])

    useEffect(() => {
        if (!controlExpandedSearchMobile)
            setTimeout(() => {
                setShowLogo(!controlExpandedSearchMobile && isMobileVersion)
                setHideHambMenu(window.innerWidth < 420 ? controlExpandedSearchMobile : false)
            }, 1500)
        else {
            setShowLogo(!controlExpandedSearchMobile && isMobileVersion)
            setHideHambMenu(window.innerWidth < 420 ? controlExpandedSearchMobile : false)
        }
    }, [controlExpandedSearchMobile])

    const handleChangeValueSearch = (value) => {
        setValueSearch(value)
        search.onChange(value)
    }

    const handleCloseNotification = () => {
        setOpenNotification(!openNotification)
        setOpenNotificationMobile(!openNotificationMobile)
    }

    const handleOpenNotification = (event) => {
        // OPPA
        setOpenNotification(!openNotification)
        setOpenNotificationMobile(!openNotificationMobile)
        setAnchorNotification(event.currentTarget)
        notification?.handleClickOpenPopOverNotification()
    }

    const onClickNotification = (event) => {
        if (!!onAreaPopOver == false) {
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

    // const newNotification = notification.notificationList
    //   ? notification.notificationList.filter((notification) => notification.isNewNotification)
    //   : []

    return (
        <ThemeProvider theme={FRSTTheme}>
            {variant == 'LXP' ? (
                <>
                    <MenuMobile
                        onClickExit={onClickExit}
                        languageSelected={languageSelected}
                        variant={'LXP'}
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
                    <SideMenu
                        onClickExit={onClickExit}
                        languageSelected={languageSelected}
                        variant={'LXP'}
                        items={menu}
                        isVisible={isVisibleSideMenu}
                        setVisible={(e) => setIsVisibleSideMenu(e)}
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
                            variant={variant}
                            style={{
                                paddingRight: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                                paddingLeft: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                                ...style
                            }}
                        >
                            {isMobileVersion && !HideHambMenu && (
                                <S.HamburgerButton onClick={() => onClickMenuHamburger()}>
                                    <IconHamburgerMenu />
                                </S.HamburgerButton>
                            )}
                            {isMobileVersion && HideHambMenu && (
                                <S.ArrowButton onClick={() => setControlExpandedSearchMobile(false)}>
                                    <BackArrow fill={FRSTTheme['colors'].selectItens} />
                                </S.ArrowButton>
                            )}
                            {isTabletVersion && (
                                <S.HamburgerButton onClick={() => onClickMenuHamburger()}>
                                    <IconHamburgerMenu />
                                </S.HamburgerButton>
                            )}
                            {!isMobileVersion && (
                                <S.WrapperLogo
                                    onClick={() => onClickLogo()}
                                    style={{ marginRight: isTabletVersion && 32 }}
                                >
                                    <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                                </S.WrapperLogo>
                            )}
                            {showLogo && (
                                <S.WrapperLogo onClick={() => onClickLogo()} style={{ marginRight: '0px' }}>
                                    <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                                </S.WrapperLogo>
                            )}
                            <S.WrapperMenu
                                style={{
                                    height: '100%',
                                    justifyContent: InputField ? 'center' : 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                {!isMobileVersion &&
                                    showSearchField &&
                                    (InputField ? (
                                        <InputField />
                                    ) : (
                                        <FieldSearch
                                            variant="LXP"
                                            value={valueSearch}
                                            placeholder={search.label}
                                            onFilter={search.onFilter}
                                            loading={loadingSearch}
                                            textLoading={search.textLoading}
                                            setFieldSearchIsOpen={setControlExpandedSearchMobile}
                                            fieldSearchIsOpen={controlExpandedSearchMobile}
                                            isLabeledResult={search.isLabeledResult}
                                            listResults={search.isLabeledResult ? null : valueListSearch}
                                            labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                            historicResults={search.historicResults}
                                            isMobileVersion={isMobileVersion}
                                            hasOptionSeeAll={search.hasOptionSeeAll}
                                            seeAll={search.seeAll}
                                            style={{
                                                width:
                                                    windowSize[0] < 830
                                                        ? '230px'
                                                        : windowSize[0] > 1500
                                                        ? '428px'
                                                        : '332px'
                                            }}
                                        />
                                    ))}

                                <S.MenuContainer
                                    variant={variant}
                                    style={{
                                        height: '100%',
                                        paddingLeft: isMobileVersion ? '0' : windowSize[0] * 0.03 + 'px',
                                        paddingRight: isMobileVersion ? '0' : windowSize[0] * 0.03 + 'px',
                                        justifyContent: isMobileVersion ? 'space-between' : 'flex-end'
                                    }}
                                >
                                    {isMobileVersion &&
                                        (InputField ? (
                                            <InputField />
                                        ) : (
                                            <FieldSearch
                                                variant="LXP"
                                                value={valueSearch}
                                                onChange={(e) => handleChangeValueSearch(e.target.value)}
                                                placeholder={search.label}
                                                onFilter={search.onFilter}
                                                loading={loadingSearch}
                                                textLoading={search.textLoading}
                                                fieldSearchIsOpen={controlExpandedSearchMobile}
                                                setFieldSearchIsOpen={setControlExpandedSearchMobile}
                                                isLabeledResult={search.isLabeledResult}
                                                listResults={search.isLabeledResult ? null : valueListSearch}
                                                labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                                historicResults={search.historicResults}
                                                isMobileVersion={isMobileVersion}
                                                hasOptionSeeAll={search.hasOptionSeeAll}
                                                seeAll={search.seeAll}
                                                style={{
                                                    width: isMobileVersion ? '180px' : '332px'
                                                    // marginLeft: controlExpandedSearchMobile ? '-25px' : '-50px'
                                                }}
                                            />
                                        ))}
                                    {!isMobileVersion &&
                                        !isTabletVersion &&
                                        menu &&
                                        menu.length > 0 &&
                                        menu.map((item, index) => {
                                            return (
                                                <ItemGlobalMenu
                                                    label={item.label}
                                                    key={item.id ? item.id : index}
                                                    variant="LXP"
                                                    type="menu"
                                                    pressed={item.id === SelectedItem || item.active}
                                                    icon={item.iconBegin}
                                                    handleOnClick={() => handleClickItem(item)}
                                                    style={{
                                                        paddingRight: '10px',
                                                        paddingLeft: '10px',
                                                        height: '100%'
                                                    }}
                                                />
                                            )
                                        })}

                                    {!isMobileVersion && !isTabletVersion && notification && (
                                        <div style={{ position: 'relative' }}>
                                            <ItemGlobalMenu
                                                label={textNotification}
                                                variant="LXP"
                                                type="menu"
                                                pressed={false}
                                                handleOnClick={() => onClickNotification}
                                                icon={<IconNotification fill={FRSTTheme['colors'].shadeWhite} />}
                                                style={{ paddingRight: '10px', paddingLeft: '10px', height: '100%' }}
                                                customMenu={customMenu}
                                            />

                                            {hasNewNotification ? (
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        marginLeft: '50%',
                                                        marginTop: '-54px'
                                                    }}
                                                >
                                                    <HasNotificationIcon />
                                                </div>
                                            ) : null}
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
                                            />
                                        </div>
                                    )}
                                    {isMobileVersion && notification && (
                                        <S.WrapperIconNotificationMobile
                                            onClick={onClickNotification}
                                            style={{
                                                borderBottom:
                                                    openNotificationMobile && windowSize[0] <= 650
                                                        ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                        : '',
                                                height: windowSize[0] <= 650 ? '100%' : 'auto'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <IconNotification fill={FRSTTheme['colors'].shadeWhite} />{' '}
                                                {hasNewNotification ? (
                                                    <div style={{ marginLeft: '-12px' }}>
                                                        {' '}
                                                        <HasNotificationIcon />{' '}
                                                    </div>
                                                ) : null}
                                            </span>
                                        </S.WrapperIconNotificationMobile>
                                    )}
                                    {isTabletVersion && notification && (
                                        <S.WrapperIconNotificationMobile
                                            onClick={onClickNotification}
                                            style={{
                                                borderBottom:
                                                    openNotificationMobile && windowSize[0] <= 650
                                                        ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                        : '',
                                                height: windowSize[0] <= 650 ? '100%' : 'auto'
                                            }}
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-flex',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <IconNotification fill={FRSTTheme['colors'].shadeWhite} />{' '}
                                                {hasNewNotification ? (
                                                    <div style={{ marginLeft: '-12px' }}>
                                                        {' '}
                                                        <HasNotificationIcon />{' '}
                                                    </div>
                                                ) : null}
                                            </span>
                                            {windowSize[0] >= 700 ? (
                                                <NotificationPopOver
                                                    handleClickMarkRead={notification.handleClickMarkRead}
                                                    isOpen={openNotificationMobile}
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
                                                />
                                            ) : null}
                                        </S.WrapperIconNotificationMobile>
                                    )}
                                </S.MenuContainer>
                            </S.WrapperMenu>

                            <S.WrapperRightInfo>
                                <DropdownProfileMenu
                                    variant="LXP"
                                    user={user}
                                    profileMenuText={profileMenuText}
                                    handleProfileMenuClick={onClickProfileMenuText}
                                    menuItems={user && user.menuItems}
                                    isMobileVersion={isMobileVersion}
                                    hiddenProfileMenu={hiddenProfileMenu}
                                    showProfile={showProfile}
                                    style={{
                                        marginLeft: isMobileVersion ? '0px' : '5px',
                                        marginRight: isMobileVersion ? '0px' : '5px'
                                    }}
                                />
                                {customMenu?.map((item, index) => (
                                    <ItemGlobalMenu
                                        label={isMobileVersion ? '' : item.label}
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
                                {/* {!isMobileVersion && !isTabletVersion && languages && languages.length > 0 && (
                  <LanguagesDropdown
                    variant="LXP"
                    languages={[...languages]}
                    selected={languageSelected}
                    onSelect={(e) => onChangeLanguage(e)}
                    distanceBtnDrop={'57px'}
                  />
                )} */}
                            </S.WrapperRightInfo>
                        </S.MenuContainer>
                        {SubMenu && SubMenu.length > 0 && (
                            <S.SubMenuContainer
                                variant={variant}
                                marginTop={marginTopSubMenu}
                                style={{
                                    paddingRight: windowSize[0] > 1400 ? '124px' : '35px',
                                    paddingLeft: windowSize[0] > 1400 ? '124px' : '35px',
                                    ...style
                                }}
                            >
                                {SubMenu.map((item, index) => {
                                    return (
                                        <ItemGlobalMenu
                                            label={item.label}
                                            key={item.id ? item.id : index}
                                            variant="LXP"
                                            type="submenu"
                                            handleOnClick={() => item.onClick('tes')}
                                            style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                        />
                                    )
                                })}
                            </S.SubMenuContainer>
                        )}
                    </div>
                    {openNotificationMobile && windowSize[0] < 700 ? (
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
                        />
                    ) : null}
                </>
            ) : variant === 'default' ? (
                <>
                    <MenuMobile
                        onClickExit={onClickExit}
                        languageSelected={languageSelected}
                        variant={'default'}
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
                            variant={variant}
                            style={{
                                paddingRight:
                                    windowSize[0] > 1400
                                        ? '70px'
                                        : windowSize[0] > 1199
                                        ? '50px'
                                        : windowSize[0] < 500
                                        ? '10px'
                                        : '35px',
                                paddingLeft:
                                    windowSize[0] > 1400
                                        ? '170px'
                                        : windowSize[0] > 1199
                                        ? '145px'
                                        : windowSize[0] < 500
                                        ? '10px'
                                        : '35px',
                                ...style
                            }}
                        >
                            {isMobileVersion && (
                                <S.HamburgerButton style={{ marginLeft: 0 }} onClick={() => onClickMenuHamburger()}>
                                    <IconHamburgerMenu />
                                </S.HamburgerButton>
                            )}
                            {isTabletVersion && (
                                <S.HamburgerButton onClick={() => onClickMenuHamburger()}>
                                    <IconHamburgerMenu />
                                </S.HamburgerButton>
                            )}
                            {!isMobileVersion && !isTabletVersion && (
                                <S.WrapperLogo onClick={() => onClickLogo()}>
                                    <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                                </S.WrapperLogo>
                            )}
                            {showLogo && (
                                <S.WrapperLogo onClick={() => onClickLogo()} style={{ marginRight: '0px' }}>
                                    <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                                </S.WrapperLogo>
                            )}
                            <S.WrapperMenu
                                style={{
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: InputField ? 'center' : undefined
                                }}
                            >
                                {!isMobileVersion &&
                                    !isTabletVersion &&
                                    showSearchField &&
                                    (InputField ? (
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
                                            fieldSearchIsOpen={controlExpandedSearchMobile}
                                            setFieldSearchIsOpen={setControlExpandedSearchMobile}
                                            isLabeledResult={search.isLabeledResult}
                                            listResults={search.isLabeledResult ? null : valueListSearch}
                                            labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                            historicResults={search.historicResults}
                                            isMobileVersion={isMobileVersion}
                                            hasOptionSeeAll={search.hasOptionSeeAll}
                                            seeAll={search.seeAll}
                                            style={{
                                                width: isMobileVersion ? '190px' : '332px'
                                            }}
                                        />
                                    ))}
                            </S.WrapperMenu>

                            <S.WrapperRightInfo>
                                {isMobileVersion &&
                                    (InputField ? (
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
                                            fieldSearchIsOpen={controlExpandedSearchMobile}
                                            setFieldSearchIsOpen={setControlExpandedSearchMobile}
                                            isLabeledResult={search.isLabeledResult}
                                            listResults={search.isLabeledResult ? null : valueListSearch}
                                            labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                            historicResults={search.historicResults}
                                            isMobileVersion={isMobileVersion}
                                            hasOptionSeeAll={search.hasOptionSeeAll}
                                            seeAll={search.seeAll}
                                            style={{
                                                width: isMobileVersion ? '180px' : '332px',
                                                marginLeft: controlExpandedSearchMobile ? '-15px' : '-30px'
                                            }}
                                        />
                                    ))}
                                {isTabletVersion &&
                                    (InputField ? (
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
                                            fieldSearchIsOpen={controlExpandedSearchMobile}
                                            setFieldSearchIsOpen={setControlExpandedSearchMobile}
                                            isLabeledResult={search.isLabeledResult}
                                            listResults={search.isLabeledResult ? null : valueListSearch}
                                            labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                            historicResults={search.historicResults}
                                            isMobileVersion={isMobileVersion}
                                            hasOptionSeeAll={search.hasOptionSeeAll}
                                            seeAll={search.seeAll}
                                            style={{
                                                width: isMobileVersion ? '180px' : '332px',
                                                marginLeft: controlExpandedSearchMobile ? '-25px' : '-50px'
                                            }}
                                        />
                                    ))}
                                {!isMobileVersion && !isTabletVersion && notification && !hideNotification && (
                                    <>
                                        {customMenu?.map((item, index) => (
                                            <ItemGlobalMenu
                                                label={isMobileVersion ? '' : item.label}
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
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                                onClick={handleOpenNotification}
                                            >
                                                <IconNotification fill={FRSTTheme['colors'].shadeWhite} />
                                                {hasNewNotification ? (
                                                    <div style={{ position: 'relative', bottom: '5px', right: "10px"}}>
                                                        <HasNotificationIcon />
                                                    </div>
                                                ) : null}{' '}
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
                                            />
                                        </S.WrapperIconNotification>
                                    </>
                                )}
                                {isMobileVersion && notification && !hideNotification && (
                                    <S.WrapperIconNotificationMobile
                                        onClick={onClickNotification}
                                        style={{
                                            borderBottom:
                                                openNotificationMobile && windowSize[0] <= 650
                                                    ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                    : '',
                                            height: windowSize[0] <= 650 ? '100%' : 'auto'
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: 'inline-flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <IconNotification fill={FRSTTheme['colors'].shadeWhite} />{' '}
                                            {hasNewNotification ? (
                                                <div style={{ marginLeft: '-12px' }}>
                                                    {' '}
                                                    <HasNotificationIcon />{' '}
                                                </div>
                                            ) : null}
                                        </span>
                                        {windowSize[0] > 700 ? (
                                            <NotificationPopOver
                                                handleClickMarkRead={notification.handleClickMarkRead}
                                                isOpen={openNotificationMobile}
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
                                            />
                                        ) : null}
                                    </S.WrapperIconNotificationMobile>
                                )}
                                {isTabletVersion && notification && !hideNotification && (
                                    <S.WrapperIconNotificationMobile
                                        onClick={onClickNotification}
                                        style={{
                                            borderBottom:
                                                openNotificationMobile && windowSize[0] <= 650
                                                    ? `4px solid ${FRSTTheme['colors'].primary1}`
                                                    : '',
                                            height: windowSize[0] <= 650 ? '100%' : 'auto'
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: 'inline-flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <IconNotification fill={FRSTTheme['colors'].shadeWhite} />{' '}
                                            {hasNewNotification ? (
                                                <div style={{ marginLeft: '-12px' }}>
                                                    {' '}
                                                    <HasNotificationIcon />{' '}
                                                </div>
                                            ) : null}
                                        </span>
                                        {windowSize[0] > 700 ? (
                                            <NotificationPopOver
                                                handleClickMarkRead={notification.handleClickMarkRead}
                                                isOpen={openNotificationMobile}
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
                                            />
                                        ) : null}
                                    </S.WrapperIconNotificationMobile>
                                )}
                                <DropdownProfileMenu
                                    variant="LXP"
                                    user={user}
                                    profileMenuText={profileMenuText}
                                    handleProfileMenuClick={onClickProfileMenuText}
                                    menuItems={user && user.menuItems}
                                    isMobileVersion={isMobileVersion}
                                    hiddenProfileMenu={hiddenProfileMenu}
                                    showProfile={showProfile}
                                    style={{
                                        marginLeft: isMobileVersion ? '0px' : '5px',
                                        marginRight: isMobileVersion ? '0px' : '5px'
                                    }}
                                />
                                {showNavigation && (
                                    <S.Navigation onClick={onClickNavigation}>
                                        {<HandWave />}
                                        <S.TextNotification>Ajuda</S.TextNotification>
                                    </S.Navigation>
                                )}
                                {showHelp && (
                                    <S.Help onClick={onClickHelp}>
                                        {<HelpIcon />}
                                        <S.TextNotification>Suporte</S.TextNotification>
                                    </S.Help>
                                )}

                                {/* {!isMobileVersion && !isTabletVersion && languages && languages.length > 0 && (
                  <LanguagesDropdown
                    variant="LXP"
                    languages={[...languages]}
                    selected={languageSelected}
                    onSelect={(e) => onChangeLanguage(e)}
                    distanceBtnDrop={'57px'}
                  />
                )} */}
                            </S.WrapperRightInfo>
                        </S.MenuContainer>
                    </div>
                    {openNotificationMobile && windowSize[0] <= 700 ? (
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
                        />
                    ) : null}
                </>
            ) : (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', ...style }}>
                    <S.MenuContainer variant={variant} style={{ ...style, display: 'none' }}>
                        <S.WrapperLogo onClick={() => onClickLogo()}>
                            <FRSTLogo height="28" />
                        </S.WrapperLogo>
                        <S.WrapperMenu>
                            {menu &&
                                menu.length > 0 &&
                                menu.map((item, index) => {
                                    return (
                                        <ItemGlobalMenu
                                            label={item.label}
                                            key={item.id ? item.id : index}
                                            variant="default"
                                            type="menu"
                                            handleOnClick={() => item.onClick('tes')}
                                            style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                        />
                                    )
                                })}
                        </S.WrapperMenu>
                        <S.WrapperRightInfo>
                            <DropdownProfileMenu
                                variant="default"
                                user={user}
                                menuItems={user && user.menuItems}
                                isMobileVersion={isMobileVersion}
                                hiddenProfileMenu={hiddenProfileMenu}
                                profileMenuText={profileMenuText}
                                handleProfileMenuClick={onClickProfileMenuText}
                                showProfile={showProfile}
                            />
                        </S.WrapperRightInfo>
                        {/* {languages && languages.length > 0 && (
              <LanguagesDropdown
                variant="default"
                languages={[...languages]}
                selected={languageSelected}
                onSelect={(e) => onChangeLanguage(e)}
                distanceBtnDrop={'45px'}
              />
            )} */}
                    </S.MenuContainer>
                </div>
            )}
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
            <S.MenuMobile isVisible={isVisible}>
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
        <S.MenuMobile isVisible={isVisible} style={{ zIndex: '10002' }}>
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
            <S.SideMenu isVisible={isVisible}>
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
