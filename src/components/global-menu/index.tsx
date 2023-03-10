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
import NotificationPopOver from '@components/FI/notificationPopOver'


export default function GlobalMenu({
    variant, 
    menu, 
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
    onClickLogo }: IGlobalMenu) {
    
    const [valueSearch, setValueSearch] = useState(search.value)
    const [valueListSearch, setValueListSearch] = useState(search.listEntry)
    const [loadingSearch, setLoadingSearch] = useState(search.loading)

    const [isMobileVersion, setIsMobileVersion] = useState(false)
    const [controlExpandedSearchMobile, setControlExpandedSearchMobile] = useState(false)
    const [showLogo, setShowLogo] = useState(false)
    const [isVisibleMenuMobile, setIsVisibleMenuMobile] = useState(false)
    const [isVisibleSideMenu, setIsVisibleSideMenu] = useState(false)

    const [windowSize, setWindowSize] = useState([0, 0])
    const [openNotification, setOpenNotification] = useState(false);
    const [openNotificationMobile, setOpenNotificationMobile] = useState(false);
    const [anchorNotification, setAnchorNotification] = useState(null);
    const [onAreaPopOver, setOnAreaPopOver] = useState(false);
    const [SubMenu, setSubMenu] = useState([]);
    const [SelectedItem, setSelectedItem] = useState();
    const [isTabletVersion, setIsTabletVersion] = useState(false);
    const [HideHambMenu, setHideHambMenu] = useState(false);
    
    useEffect(() => {
        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
            setIsMobileVersion(window.innerWidth < 700 )
            setIsTabletVersion(window.innerWidth < 1200 && window.innerWidth >= 700 )
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
        console.log("MOBILE: ", isMobileVersion)
        console.log('Control: ', controlExpandedSearchMobile)
        setShowLogo(isMobileVersion)
        if(isMobileVersion)
            setControlExpandedSearchMobile(false)
        else{
            setControlExpandedSearchMobile(true)
        }
        
    }, [isMobileVersion])

    useEffect(() => {
        if (!controlExpandedSearchMobile)
            setTimeout(() => {
                setShowLogo(!controlExpandedSearchMobile && isMobileVersion)
                setHideHambMenu(window.innerWidth < 420 ? controlExpandedSearchMobile : false)
            }, 1500)
            else{
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
            setOpenNotification(!openNotification)
            setOpenNotificationMobile(!openNotificationMobile)
            setAnchorNotification(event.currentTarget)
    }

    const onClickNotification = (event) => {
        if(!!onAreaPopOver == false) {
            setOpenNotification(!openNotification)
            setOpenNotificationMobile(!openNotificationMobile)
            setAnchorNotification(event.currentTarget)
        }
    }

    const handleClickItem = (item) => {
        item.onClick()
        setSelectedItem(item.id)
        if(item.subMenu)
            setSubMenu(item.subMenu)
        else
            setSubMenu([])
    }

    const newNotification = notification.notificationList ? notification.notificationList.filter((notification) => notification.isNewNotification) : []
    
    return (
        <ThemeProvider theme={FRSTTheme}>
            {variant == 'LXP' ?
                <>
                    <MenuMobile onClickExit={onClickExit} languageSelected={languageSelected} variant={'LXP'} items={menu} isVisible={isVisibleMenuMobile} setVisible={(e) => setIsVisibleMenuMobile(e)} onClickSite={onClickSite} onClickLinkedin={onClickLinkedin} onClickInstagram={onClickInstagram} onClickYoutube={onClickYoutube} onClickSpotify={onClickSpotify} onClickPodCast={onClickPodCast} />
                    <SideMenu onClickExit={onClickExit} languageSelected={languageSelected} variant={'LXP'} items={menu} isVisible={isVisibleSideMenu} setVisible={(e) => setIsVisibleSideMenu(e)} onClickSite={onClickSite} onClickLinkedin={onClickLinkedin} onClickInstagram={onClickInstagram} onClickYoutube={onClickYoutube} onClickSpotify={onClickSpotify} onClickPodCast={onClickPodCast} />
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Styles.MenuContainer
                            variant={variant}
                            style={{
                                paddingRight: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                                paddingLeft: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                                ...style
                            }
                            }
                        >
                            {isMobileVersion && !HideHambMenu &&
                                <Styles.HamburgerButton onClick={() => setIsVisibleMenuMobile(true)}>
                                    <IconHamburgerMenu />
                                </Styles.HamburgerButton>
                            }
                            {isMobileVersion && HideHambMenu &&
                                <Styles.ArrowButton onClick={() => setControlExpandedSearchMobile(false)}>
                                    <BackArrow fill={FRSTTheme['colors'].selectItens} />
                                </Styles.ArrowButton>
                            }
                            {isTabletVersion &&
                                <Styles.HamburgerButton onClick={() => setIsVisibleSideMenu(true)}>
                                    <IconHamburgerMenu />
                                </Styles.HamburgerButton>
                            }
                            {!isMobileVersion &&
                                <Styles.WrapperLogo onClick={() => onClickLogo()} style={{marginRight: isTabletVersion && 32 }} >
                                    <FRSTLogo  height='28' fill={FRSTTheme['colors'].primary1} />
                                </Styles.WrapperLogo>
                            }
                            {showLogo &&
                                <Styles.WrapperLogo onClick={() => onClickLogo()} style={{ marginRight: '0px' }}>
                                    <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1} />
                                </Styles.WrapperLogo>
                            }
                            <Styles.WrapperMenu style={{ height: '100%',justifyContent: 'space-between'}}>
                                {!isMobileVersion && showSearchField && 
                                    <FieldSearch
                                        variant='LXP'
                                        value={valueSearch}
                                        
                                        placeholder={search.label}
                                        onFilter={search.onFilter}
                                        loading={loadingSearch}

                                        setFieldSearchIsOpen={setControlExpandedSearchMobile}
                                        fieldSearchIsOpen={controlExpandedSearchMobile}

                                        listResults={search.isLabeledResult ? null : valueListSearch}
                                        labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                        historicResults={search.historicResults}
                                        isMobileVersion={isMobileVersion}
                                        hasOptionSeeAll={search.hasOptionSeeAll}
                                        seeAll={search.seeAll}

                                        style={{
                                            width: windowSize[0] < 830  ? '230px' : windowSize[0] > 1500 ? '428px' : '332px',
                                        }}
                                    />
                                }
                                
                                <Styles.MenuContainer
                                    variant={variant}
                                    style={{
                                        height: '100%',
                                        paddingLeft: isMobileVersion ? '0' : (windowSize[0] * 0.03) + 'px',
                                        paddingRight: isMobileVersion ? '0' : (windowSize[0] * 0.03) + 'px',
                                        justifyContent: isMobileVersion ? 'space-between' : 'flex-end',
                                    }}>
                                    {isMobileVersion && 
                                        <FieldSearch
                                            variant='LXP'
                                            value={valueSearch}
                                            onChange={(e) => handleChangeValueSearch(e.target.value)}
                                            placeholder={search.label}
                                            onFilter={search.onFilter}
                                            loading={loadingSearch}

                                            fieldSearchIsOpen={controlExpandedSearchMobile}
                                            setFieldSearchIsOpen={setControlExpandedSearchMobile}

                                            listResults={search.isLabeledResult ? null : valueListSearch}
                                            labeledResultList={search.isLabeledResult ? valueListSearch : null}
                                            historicResults={search.historicResults}
                                            isMobileVersion={isMobileVersion}
                                            hasOptionSeeAll={search.hasOptionSeeAll}
                                            seeAll={search.seeAll}

                                            style={{
                                                width: isMobileVersion ? '180px' : '332px',
                                                // marginLeft: controlExpandedSearchMobile ? '-25px' : '-50px'
                                            }}
                                        />
                                    }
                                    {!isMobileVersion && !isTabletVersion && menu && menu.length > 0 && menu.map((item, index) => {
                                        return <ItemGlobalMenu
                                            label={item.label}
                                            key={item.id ? item.id : index}
                                            variant='LXP'
                                            type='menu'
                                            pressed={item.id === SelectedItem || item.active}
                                            icon={item.iconBegin}
                                            onClick={() => handleClickItem(item)}
                                            style={{ paddingRight: '10px', paddingLeft: '10px', height: '100%' }}
                                        />
                                    })}
                                    {!isMobileVersion && !isTabletVersion && notification &&
                                        <div style={{position: 'relative'}} onClick={onClickNotification}>
                                            <ItemGlobalMenu
                                                label={textNotification}
                                                variant='LXP'
                                                type='menu'
                                                pressed={false}
                                                icon={<IconNotification fill={FRSTTheme['colors'].shadeWhite} />}
                                                style={{ paddingRight: '10px', paddingLeft: '10px', height: '100%' }}
                                            />
                                            {newNotification.length ? 
                                                <div style={{position: 'absolute', marginLeft:'50%', marginTop: '-54px'}}> 
                                                    <HasNotificationIcon/> 
                                                </div> 
                                                : null
                                            }
                                            <NotificationPopOver 
                                                handleClickMarkRead={notification.handleClickMarkRead}
                                                isOpen={openNotification}
                                                anchor={anchorNotification}
                                                textEmptyState={notification.textEmptyState}
                                                notificationList={notification.notificationList}
                                                textMarkAllAsRead={notification.textMarkAllAsRead}
                                                textNotification={notification.textNotification}
                                                isMobile={false}
                                                setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                                                textBack={notification.textBack}
                                                handleClickBack={() => handleCloseNotification()}
                                            />
                                        </div>
                                        
                                    }
                                    {isMobileVersion && notification &&
                                        <Styles.WrapperIconNotificationMobile onClick={onClickNotification} style={{borderBottom: openNotificationMobile && windowSize[0] <= 650 ? `4px solid ${FRSTTheme['colors'].primary1}` : '', height: windowSize[0] <= 650 ? '100%' : 'auto' }}>
                                            <span style={{display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}><IconNotification fill={FRSTTheme['colors'].shadeWhite} /> {newNotification.length ? <div style={{marginLeft:'-12px'}}> <HasNotificationIcon/> </div> : null}</span>
                                            
                                        </Styles.WrapperIconNotificationMobile>
                                    }
                                    {isTabletVersion && notification &&
                                        <Styles.WrapperIconNotificationMobile onClick={onClickNotification} style={{borderBottom: openNotificationMobile && windowSize[0] <= 650 ? `4px solid ${FRSTTheme['colors'].primary1}` : '', height: windowSize[0] <= 650 ? '100%' : 'auto' }}>
                                            <span style={{display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}><IconNotification fill={FRSTTheme['colors'].shadeWhite} /> {newNotification.length ? <div style={{marginLeft:'-12px'}}> <HasNotificationIcon/> </div> : null}</span>
                                            {windowSize[0] >= 700 ?
                                                <NotificationPopOver 
                                                    handleClickMarkRead={notification.handleClickMarkRead}
                                                    isOpen={openNotificationMobile}
                                                    anchor={anchorNotification}
                                                    textEmptyState={notification.textEmptyState}
                                                    notificationList={notification.notificationList}
                                                    textMarkAllAsRead={notification.textMarkAllAsRead}
                                                    textNotification={notification.textNotification}
                                                    isMobile={false}
                                                    setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                                                    textBack={notification.textBack}
                                                    handleClickBack={() => handleCloseNotification()}
                                                />
                                                : null
                                            }
                                        </Styles.WrapperIconNotificationMobile>
                                    }
                                </Styles.MenuContainer>
                            </Styles.WrapperMenu>
                            
                            <Styles.WrapperRightInfo >
                            
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
                                {!isMobileVersion && !isTabletVersion && languages && languages.length > 0 &&
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
                        {SubMenu && SubMenu.length > 0 &&
                            <Styles.SubMenuContainer
                                variant={variant}
                                style={{
                                    paddingRight: windowSize[0] > 1400 ? '124px' : '35px',
                                    paddingLeft: windowSize[0] > 1400 ? '124px' : '35px',
                                    ...style
                                }
                                }>
                                {SubMenu.map((item, index) => {
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
                    {openNotificationMobile && windowSize[0] < 700 ? 
                        <NotificationPopOver 
                            handleClickMarkRead={notification.handleClickMarkRead}
                            isOpen={openNotificationMobile}
                            anchor={anchorNotification}
                            textEmptyState={notification.textEmptyState}
                            notificationList={notification.notificationList}
                            textMarkAllAsRead={notification.textMarkAllAsRead}
                            textNotification={notification.textNotification}
                            isMobile={true}
                            setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                            textBack={notification.textBack}
                            handleClickBack={() => handleCloseNotification()}
                        />
                        : null
                    }
                </>
                : variant === 'default' ?
                    <>
                        <MenuMobile onClickExit={onClickExit} languageSelected={languageSelected} variant={'default'} items={menu} isVisible={isVisibleMenuMobile} setVisible={(e) => setIsVisibleMenuMobile(e)} onClickSite={onClickSite} onClickLinkedin={onClickLinkedin} onClickInstagram={onClickInstagram} onClickYoutube={onClickYoutube} onClickSpotify={onClickSpotify} onClickPodCast={onClickPodCast} />
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Styles.MenuContainer
                                variant={variant}
                                style={{
                                    paddingRight: windowSize[0] > 1400 ? '124px' : windowSize[0] < 500 ? '10px' : '35px',
                                    paddingLeft: windowSize[0] > 1400 ? '124px' : windowSize[0] < 500 ? '10px' : '35px',
                                    ...style
                                }
                                }
                            >
                                {isMobileVersion &&
                                    <Styles.HamburgerButton style={{marginLeft: 0}} onClick={() => setIsVisibleMenuMobile(true)}>
                                        <IconHamburgerMenu />
                                    </Styles.HamburgerButton>
                                }
                                {isTabletVersion &&
                                    <Styles.HamburgerButton onClick={() => setIsVisibleMenuMobile(true)}>
                                        <IconHamburgerMenu />
                                    </Styles.HamburgerButton>
                                }
                                {!isMobileVersion && !isTabletVersion &&
                                    <Styles.WrapperLogo onClick={() => onClickLogo()}>
                                        <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1} />
                                    </Styles.WrapperLogo>
                                }
                                {showLogo &&
                                    <Styles.WrapperLogo onClick={() => onClickLogo()} style={{ marginRight: '0px' }}>
                                        <FRSTLogo height='28' fill={FRSTTheme['colors'].primary1} />
                                    </Styles.WrapperLogo>
                                }
                                <Styles.WrapperMenu style={{ height: '100%' }}>
                                    {!isMobileVersion && !isTabletVersion && showSearchField && 
                                        <FieldSearch
                                            variant='LXP'
                                            value={valueSearch}
                                            onFilter={search.onFilter}
                                            onChange={(e) => handleChangeValueSearch(e.target.value)}
                                            placeholder={search.label}
                                            
                                            loading={loadingSearch}

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
                                                width: isMobileVersion ? '190px' : '332px',
                                            }}
                                        />
                                    }
                                </Styles.WrapperMenu>
                                
                                <Styles.WrapperRightInfo  >
                                    {isMobileVersion && 
                                    <FieldSearch
                                        variant='LXP'
                                        value={valueSearch}
                                        onFilter={search.onFilter}
                                        onChange={(e) => handleChangeValueSearch(e.target.value)}
                                        placeholder={search.label}
                                        loading={loadingSearch}

                                        fieldSearchIsOpen={controlExpandedSearchMobile}
                                        setFieldSearchIsOpen={setControlExpandedSearchMobile}

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
                                    />}
                                    {isTabletVersion && 
                                    <FieldSearch
                                        variant='LXP'
                                        value={valueSearch}
                                        onFilter={search.onFilter}
                                        onChange={(e) => handleChangeValueSearch(e.target.value)}
                                        placeholder={search.label}
                                        loading={loadingSearch}

                                        fieldSearchIsOpen={controlExpandedSearchMobile}
                                        setFieldSearchIsOpen={setControlExpandedSearchMobile}

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
                                    />}
                                    {!isMobileVersion && !isTabletVersion && notification &&
                                        <Styles.WrapperIconNotification onClick={onClickNotification}>
                                            <span style={{display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}} onClick={handleOpenNotification}>
                                                <IconNotification fill={FRSTTheme['colors'].shadeWhite} />
                                                {newNotification.length ? 
                                                <div style={{marginLeft:'-12px'}}> 
                                                    <HasNotificationIcon/> 
                                                </div> : null} &nbsp; {textNotification} 
                                            </span>
                                            <NotificationPopOver 
                                                handleClickMarkRead={notification.handleClickMarkRead}
                                                isOpen={openNotification}
                                                anchor={anchorNotification}
                                                textEmptyState={notification.textEmptyState}
                                                notificationList={notification.notificationList}
                                                textMarkAllAsRead={notification.textMarkAllAsRead}
                                                textNotification={notification.textNotification}
                                                isMobile={false}
                                                setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                                                textBack={notification.textBack}
                                                handleClickBack={() => handleCloseNotification()}
                                            />
                                        </Styles.WrapperIconNotification>
                                        
                                    }
                                    {isMobileVersion && notification &&
                                        <Styles.WrapperIconNotificationMobile onClick={onClickNotification} style={{borderBottom: openNotificationMobile && windowSize[0] <= 650 ? `4px solid ${FRSTTheme['colors'].primary1}` : '', height: windowSize[0] <= 650 ? '100%' : 'auto' }}>
                                            <span style={{display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}><IconNotification fill={FRSTTheme['colors'].shadeWhite} /> {newNotification.length ? <div style={{marginLeft:'-12px'}}> <HasNotificationIcon/> </div> : null}</span>
                                            {windowSize[0] > 700 ?
                                                <NotificationPopOver 
                                                    handleClickMarkRead={notification.handleClickMarkRead}
                                                    isOpen={openNotificationMobile}
                                                    anchor={anchorNotification}
                                                    textEmptyState={notification.textEmptyState}
                                                    notificationList={notification.notificationList}
                                                    textMarkAllAsRead={notification.textMarkAllAsRead}
                                                    textNotification={notification.textNotification}
                                                    isMobile={false}
                                                    setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                                                    textBack={notification.textBack}
                                                    handleClickBack={() => handleCloseNotification()}
                                                />
                                                : null
                                            }
                                        </Styles.WrapperIconNotificationMobile>
                                    }
                                    {isTabletVersion && notification &&
                                        <Styles.WrapperIconNotificationMobile onClick={onClickNotification} style={{borderBottom: openNotificationMobile && windowSize[0] <= 650 ? `4px solid ${FRSTTheme['colors'].primary1}` : '', height: windowSize[0] <= 650 ? '100%' : 'auto' }}>
                                            <span style={{display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}><IconNotification fill={FRSTTheme['colors'].shadeWhite} /> {newNotification.length ? <div style={{marginLeft:'-12px'}}> <HasNotificationIcon/> </div> : null}</span>
                                            {windowSize[0] > 700 ?
                                                <NotificationPopOver 
                                                    handleClickMarkRead={notification.handleClickMarkRead}
                                                    isOpen={openNotificationMobile}
                                                    anchor={anchorNotification}
                                                    textEmptyState={notification.textEmptyState}
                                                    notificationList={notification.notificationList}
                                                    textMarkAllAsRead={notification.textMarkAllAsRead}
                                                    textNotification={notification.textNotification}
                                                    isMobile={false}
                                                    setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                                                    textBack={notification.textBack}
                                                    handleClickBack={() => handleCloseNotification()}
                                                />
                                                : null
                                            }
                                        </Styles.WrapperIconNotificationMobile>
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
                                    {!isMobileVersion && !isTabletVersion && languages && languages.length > 0 &&
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
                        </div>
                        {openNotificationMobile && windowSize[0] <= 700 ? 
                            <NotificationPopOver 
                                handleClickMarkRead={notification.handleClickMarkRead}
                                isOpen={openNotificationMobile}
                                anchor={anchorNotification}
                                textEmptyState={notification.textEmptyState}
                                notificationList={notification.notificationList}
                                textMarkAllAsRead={notification.textMarkAllAsRead}
                                textNotification={notification.textNotification}
                                isMobile={true}
                                setOnAreaPopOver={(e) => setOnAreaPopOver(e)}
                                textBack={notification.textBack}
                                handleClickBack={() => handleCloseNotification()}
                            />
                            : null
                        }
                    </>
                    :
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', ...style }}>
                        <Styles.MenuContainer variant={variant} style={{ ...style, display: 'none' }}>
                            <Styles.WrapperLogo onClick={() => onClickLogo()}>
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
                        <Styles.ItemMenuMobile onClick={() => setVisible(false)} >
                            <span> <BackArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}</span>
                        </Styles.ItemMenuMobile>
                        {items && items.length > 0 && items.map((item, index) => {
                            if (item.label == 'Criar conteúdo') return;

                            if(item.onClick == null)
                            return <Styles.ItemMenuMobile onClick={() => newOptionsSubMenu(item.subItens)} key={index}>
                                        &nbsp;
                                        {item.label}
                                    </Styles.ItemMenuMobile>

                            return <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                                &nbsp;
                                {item.label}
                            </Styles.ItemMenuMobile>
                        })}
                    </div>
                    <Styles.footerMenuMobile>
                        <Styles.ItemMenuMobile style={{}} onClick={() => onClickExit()} >
                            <span> <ExitArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}</span>
                        </Styles.ItemMenuMobile>
                        <span style={{marginTop: 24}}>{languageSelected === 'en-US' ? 'Visit our channel and social networks' : 'Visite nossos canais e redes sociais'}</span>
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
                : 
                <>
                    <div>
                        <Styles.ItemMenuMobile style={{paddingBottom: 32}} onClick={() => setVisible(false)} >
                            <span> <BackArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}</span>
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
                            <span> <ExitArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}</span>
                        </Styles.ItemMenuMobile>
                        <span style={{marginTop: 24}}>{languageSelected === 'en-US' ? 'Visit our channel and social networks' : 'Visite nossos canais e redes sociais'}</span>
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
                        {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                    </Styles.ItemMenuMobile>
                </>
                : 
                <>
                    <div>
                        <Styles.ItemMenuMobile style={{paddingBottom: 32}} onClick={() => setVisible(false)} >
                            <span> <BackArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}</span>
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
                            <span> <ExitArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}</span>
                        </Styles.ItemMenuMobile>
                        <span style={{marginTop: 24}}>{languageSelected === 'en-US' ? 'Visit our channel and social networks' : 'Visite nossos canais e redes sociais'}</span>
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

export function SideMenu({ items, isVisible, setVisible, variant, languageSelected, onClickExit, onClickSite, onClickLinkedin, onClickInstagram, onClickYoutube, onClickSpotify, onClickPodCast }) {
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
            <Styles.SideMenu isVisible={isVisible} >
                {variant === 'LXP' ?
                    <>
                        <div>
                            <Styles.ItemSideMenu onClick={() => setVisible(false)} >
                                <span> <BackArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}</span>
                            </Styles.ItemSideMenu>
                            {items && items.length > 0 && items.map((item, index) => {
                                if (item.label == 'Criar conteúdo') return;

                                if(item.onClick == null)
                                return <Styles.ItemSideMenu onClick={() => newOptionsSubMenu(item.subItens)} key={index}>
                                            &nbsp;
                                            {item.label}
                                        </Styles.ItemSideMenu>

                                return <Styles.ItemSideMenu onClick={(e) => item.onClick(e)} key={index}>
                                    &nbsp;
                                    {item.label}
                                </Styles.ItemSideMenu>
                            })}
                        </div>
                        <Styles.footerMenuMobile>
                            <Styles.ItemSideMenu style={{}} onClick={() => onClickExit()} >
                                <span> <ExitArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}</span>
                            </Styles.ItemSideMenu>
                            <span style={{marginTop: 24}}>{languageSelected === 'en-US' ? 'Visit our channel and social networks' : 'Visite nossos canais e redes sociais'}</span>
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
                    : 
                    <>
                        <div>
                            <Styles.ItemMenuMobile style={{paddingBottom: 32}} onClick={() => setVisible(false)} >
                                <span> <BackArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}</span>
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
                                <span> <ExitArrow fill='white' /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}</span>
                            </Styles.ItemMenuMobile>
                            <span style={{marginTop: 24}}>{languageSelected === 'en-US' ? 'Visit our channel and social networks' : 'Visite nossos canais e redes sociais'}</span>
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
            </Styles.SideMenu>
        </>
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