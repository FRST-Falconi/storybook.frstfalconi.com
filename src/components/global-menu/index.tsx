import React, { useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './globalMenuStyles'
import { IGlobalMenu } from './globalMenu'

import {
  BackArrow,
  ExitArrow,
  FRSTLogo,
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
  showProfile = true
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
            <Styles.MenuContainer
              variant={variant}
              style={{
                paddingRight: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                paddingLeft: windowSize[0] > 1400 ? '124px' : isMobileVersion ? '12px' : '35px',
                ...style
              }}
            >
              {isMobileVersion && !HideHambMenu && (
                <Styles.HamburgerButton onClick={() => onClickMenuHamburger()}>
                  <IconHamburgerMenu />
                </Styles.HamburgerButton>
              )}
              {isMobileVersion && HideHambMenu && (
                <Styles.ArrowButton onClick={() => setControlExpandedSearchMobile(false)}>
                  <BackArrow fill={FRSTTheme['colors'].selectItens} />
                </Styles.ArrowButton>
              )}
              {isTabletVersion && (
                <Styles.HamburgerButton onClick={() => onClickMenuHamburger()}>
                  <IconHamburgerMenu />
                </Styles.HamburgerButton>
              )}
              {!isMobileVersion && (
                <Styles.WrapperLogo onClick={() => onClickLogo()} style={{ marginRight: isTabletVersion && 32 }}>
                  <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                </Styles.WrapperLogo>
              )}
              {showLogo && (
                <Styles.WrapperLogo onClick={() => onClickLogo()} style={{ marginRight: '0px' }}>
                  <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                </Styles.WrapperLogo>
              )}
              <Styles.WrapperMenu style={{ height: '100%', justifyContent: 'space-between' }}>
                {!isMobileVersion && showSearchField && (
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
                      width: windowSize[0] < 830 ? '230px' : windowSize[0] > 1500 ? '428px' : '332px'
                    }}
                  />
                )}

                <Styles.MenuContainer
                  variant={variant}
                  style={{
                    height: '100%',
                    paddingLeft: isMobileVersion ? '0' : windowSize[0] * 0.03 + 'px',
                    paddingRight: isMobileVersion ? '0' : windowSize[0] * 0.03 + 'px',
                    justifyContent: isMobileVersion ? 'space-between' : 'flex-end'
                  }}
                >
                  {isMobileVersion && (
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
                  )}
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
                          style={{ paddingRight: '10px', paddingLeft: '10px', height: '100%' }}
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
                        <div style={{ position: 'absolute', marginLeft: '50%', marginTop: '-54px' }}>
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
                      />
                    </div>
                  )}
                  {isMobileVersion && notification && (
                    <Styles.WrapperIconNotificationMobile
                      onClick={onClickNotification}
                      style={{
                        borderBottom:
                          openNotificationMobile && windowSize[0] <= 650
                            ? `4px solid ${FRSTTheme['colors'].primary1}`
                            : '',
                        height: windowSize[0] <= 650 ? '100%' : 'auto'
                      }}
                    >
                      <span style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <IconNotification fill={FRSTTheme['colors'].shadeWhite} />{' '}
                        {hasNewNotification ? (
                          <div style={{ marginLeft: '-12px' }}>
                            {' '}
                            <HasNotificationIcon />{' '}
                          </div>
                        ) : null}
                      </span>
                    </Styles.WrapperIconNotificationMobile>
                  )}
                  {isTabletVersion && notification && (
                    <Styles.WrapperIconNotificationMobile
                      onClick={onClickNotification}
                      style={{
                        borderBottom:
                          openNotificationMobile && windowSize[0] <= 650
                            ? `4px solid ${FRSTTheme['colors'].primary1}`
                            : '',
                        height: windowSize[0] <= 650 ? '100%' : 'auto'
                      }}
                    >
                      <span style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }}>
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
                        />
                      ) : null}
                    </Styles.WrapperIconNotificationMobile>
                  )}
                </Styles.MenuContainer>
              </Styles.WrapperMenu>

              <Styles.WrapperRightInfo>
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
                {!isMobileVersion && !isTabletVersion && languages && languages.length > 0 && (
                  <LanguagesDropdown
                    variant="LXP"
                    languages={[...languages]}
                    selected={languageSelected}
                    onSelect={(e) => onChangeLanguage(e)}
                    distanceBtnDrop={'57px'}
                  />
                )}
              </Styles.WrapperRightInfo>
            </Styles.MenuContainer>
            {SubMenu && SubMenu.length > 0 && (
              <Styles.SubMenuContainer
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
              </Styles.SubMenuContainer>
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
            <Styles.MenuContainer
              variant={variant}
              style={{
                paddingRight:
                  windowSize[0] > 1400 ? '70px' : windowSize[0] > 1199 ? '50px' : windowSize[0] < 500 ? '10px' : '35px',
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
                <Styles.HamburgerButton style={{ marginLeft: 0 }} onClick={() => onClickMenuHamburger()}>
                  <IconHamburgerMenu />
                </Styles.HamburgerButton>
              )}
              {isTabletVersion && (
                <Styles.HamburgerButton onClick={() => onClickMenuHamburger()}>
                  <IconHamburgerMenu />
                </Styles.HamburgerButton>
              )}
              {!isMobileVersion && !isTabletVersion && (
                <Styles.WrapperLogo onClick={() => onClickLogo()}>
                  <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                </Styles.WrapperLogo>
              )}
              {showLogo && (
                <Styles.WrapperLogo onClick={() => onClickLogo()} style={{ marginRight: '0px' }}>
                  <FRSTLogo height="28" fill={FRSTTheme['colors'].primary1} />
                </Styles.WrapperLogo>
              )}
              <Styles.WrapperMenu style={{ height: '100%' }}>
                {!isMobileVersion && !isTabletVersion && showSearchField && (
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
                )}
              </Styles.WrapperMenu>

              <Styles.WrapperRightInfo>
                {isMobileVersion && (
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
                )}
                {isTabletVersion && (
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
                )}
                {!isMobileVersion && !isTabletVersion && notification && (
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
                    <Styles.WrapperIconNotification onClick={onClickNotification}>
                      <span
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row-reverse',
                          width: '140px'
                        }}
                        onClick={handleOpenNotification}
                      >
                        <IconNotification fill={FRSTTheme['colors'].shadeWhite} />
                        {hasNewNotification ? (
                          <div style={{ position: 'absolute', top: '0' }}>
                            <HasNotificationIcon />
                          </div>
                        ) : null}{' '}
                        <Styles.WrapperIconNotificationText>{textNotification}</Styles.WrapperIconNotificationText>
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
                      />
                    </Styles.WrapperIconNotification>
                  </>
                )}
                {isMobileVersion && notification && (
                  <Styles.WrapperIconNotificationMobile
                    onClick={onClickNotification}
                    style={{
                      borderBottom:
                        openNotificationMobile && windowSize[0] <= 650
                          ? `4px solid ${FRSTTheme['colors'].primary1}`
                          : '',
                      height: windowSize[0] <= 650 ? '100%' : 'auto'
                    }}
                  >
                    <span style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }}>
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
                      />
                    ) : null}
                  </Styles.WrapperIconNotificationMobile>
                )}
                {isTabletVersion && notification && (
                  <Styles.WrapperIconNotificationMobile
                    onClick={onClickNotification}
                    style={{
                      borderBottom:
                        openNotificationMobile && windowSize[0] <= 650
                          ? `4px solid ${FRSTTheme['colors'].primary1}`
                          : '',
                      height: windowSize[0] <= 650 ? '100%' : 'auto'
                    }}
                  >
                    <span style={{ display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' }}>
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
                      />
                    ) : null}
                  </Styles.WrapperIconNotificationMobile>
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
                {showHelp && (
                  <Styles.help onClick={onClickHelp}>
                    <Styles.helpText>Ajuda</Styles.helpText>
                    {<HelpIcon />}
                  </Styles.help>
                )}

                {!isMobileVersion && !isTabletVersion && languages && languages.length > 0 && (
                  <LanguagesDropdown
                    variant="LXP"
                    languages={[...languages]}
                    selected={languageSelected}
                    onSelect={(e) => onChangeLanguage(e)}
                    distanceBtnDrop={'57px'}
                  />
                )}
              </Styles.WrapperRightInfo>
            </Styles.MenuContainer>
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
            />
          ) : null}
        </>
      ) : (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', ...style }}>
          <Styles.MenuContainer variant={variant} style={{ ...style, display: 'none' }}>
            <Styles.WrapperLogo onClick={() => onClickLogo()}>
              <FRSTLogo height="28" />
            </Styles.WrapperLogo>
            <Styles.WrapperMenu>
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
            </Styles.WrapperMenu>
            <Styles.WrapperRightInfo>
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
            </Styles.WrapperRightInfo>
            {languages && languages.length > 0 && (
              <LanguagesDropdown
                variant="default"
                languages={[...languages]}
                selected={languageSelected}
                onSelect={(e) => onChangeLanguage(e)}
                distanceBtnDrop={'45px'}
              />
            )}
          </Styles.MenuContainer>
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
      <Styles.MenuMobile isVisible={isVisible}>
        {variant === 'LXP' || variant === 'custom' ? (
          <>
            <div>
              <Styles.ItemMenuMobile onClick={() => setVisible(false)}>
                <span>
                  {' '}
                  <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                </span>
              </Styles.ItemMenuMobile>
              {items &&
                items.length > 0 &&
                items.map((item, index) => {
                  if (item.label == 'Criar conteúdo') return

                  if (item.onClick == null)
                    return (
                      <Styles.ItemMenuMobile onClick={() => newOptionsSubMenu(item.subItens)} key={index}>
                        &nbsp;
                        {item.label}
                      </Styles.ItemMenuMobile>
                    )

                  return (
                    <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                      &nbsp;
                      {item.label}
                    </Styles.ItemMenuMobile>
                  )
                })}
              <Styles.ItemMenuMobile style={{ borderBottom: 'none' }} onClick={() => onClickExit()}>
                <span>
                  {' '}
                  <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                </span>
              </Styles.ItemMenuMobile>
            </div>
            <Styles.footerMenuMobile>
              <span style={{ marginTop: 24 }}>
                {languageSelected === 'en-US'
                  ? 'Visit our channel and social networks'
                  : 'Visite nossos canais e redes sociais'}
              </span>
              <Styles.frstSocials>
                <Styles.itemFrstSocials onClick={onClickSite}>
                  {' '}
                  <SiteIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickLinkedin}>
                  {' '}
                  <LinkedinIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickInstagram}>
                  {' '}
                  <InstagramIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickYoutube}>
                  {' '}
                  <YoutubeIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickSpotify}>
                  {' '}
                  <SpotifyIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickPodCast}>
                  {' '}
                  <PodCastIcon />{' '}
                </Styles.itemFrstSocials>
              </Styles.frstSocials>
            </Styles.footerMenuMobile>
          </>
        ) : (
          <>
            <div>
              <Styles.ItemMenuMobile style={{ paddingBottom: 32 }} onClick={() => setVisible(false)}>
                <span>
                  {' '}
                  <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                </span>
              </Styles.ItemMenuMobile>
              {items &&
                items.length > 0 &&
                items.map((item, index) => {
                  if (item.label == 'Criar conteúdo') return

                  if (item.onClick == null)
                    return (
                      <Styles.ItemMenuMobile onClick={() => newOptionsSubMenu(item.subItens)} key={index}>
                        {item.iconBegin}
                        &nbsp;
                        {item.label}
                      </Styles.ItemMenuMobile>
                    )

                  return (
                    <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                      {item.iconBegin}
                      &nbsp;
                      {item.label}
                    </Styles.ItemMenuMobile>
                  )
                })}
              {customMenu?.map((item, index) => (
                <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                  <span style={{ marginRight: customMenu ? 2 : 0 }}>{item.iconBegin}</span>
                  &nbsp;
                  {item.label}
                </Styles.ItemMenuMobile>
              ))}
            </div>
            <Styles.footerMenuMobile>
              <Styles.ItemMenuMobile style={{}} onClick={() => onClickExit()}>
                <span>
                  {' '}
                  <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                </span>
              </Styles.ItemMenuMobile>
              <span style={{ marginTop: 24 }}>
                {languageSelected === 'en-US'
                  ? 'Visit our channel and social networks'
                  : 'Visite nossos canais e redes sociais'}
              </span>
              <Styles.frstSocials>
                <Styles.itemFrstSocials onClick={onClickSite}>
                  {' '}
                  <SiteIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickLinkedin}>
                  {' '}
                  <LinkedinIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickInstagram}>
                  {' '}
                  <InstagramIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickYoutube}>
                  {' '}
                  <YoutubeIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickSpotify}>
                  {' '}
                  <SpotifyIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickPodCast}>
                  {' '}
                  <PodCastIcon />{' '}
                </Styles.itemFrstSocials>
              </Styles.frstSocials>
            </Styles.footerMenuMobile>
          </>
        )}
      </Styles.MenuMobile>
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
    <Styles.MenuMobile isVisible={isVisible} style={{ zIndex: '10002' }}>
      {variant === 'LXP' ? (
        <>
          <div>
            {options &&
              options.length > 0 &&
              options.map((item, index) => {
                if (item.label == 'Criar conteúdo') return
                return (
                  <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                    {item.label}
                  </Styles.ItemMenuMobile>
                )
              })}
          </div>
          <Styles.ItemMenuMobile onClick={() => setVisible(false)} style={{ borderTop: '1px solid #444' }}>
            {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
          </Styles.ItemMenuMobile>
        </>
      ) : (
        <>
          <div>
            <Styles.ItemMenuMobile style={{ paddingBottom: 32 }} onClick={() => setVisible(false)}>
              <span>
                {' '}
                <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
              </span>
            </Styles.ItemMenuMobile>
            {options &&
              options.length > 0 &&
              options.map((item, index) => {
                if (item.label == 'Criar conteúdo') return

                if (item.onClick == null)
                  return (
                    <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                      {item.iconBegin}
                      &nbsp;
                      {item.label}
                    </Styles.ItemMenuMobile>
                  )

                return (
                  <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                    {item.iconBegin}
                    &nbsp;
                    {item.label}
                  </Styles.ItemMenuMobile>
                )
              })}
            {customMenu?.map((item, index) => (
              <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                {item.iconBegin}
                &nbsp;
                {item.label}
              </Styles.ItemMenuMobile>
            ))}
          </div>
          <Styles.footerMenuMobile>
            <Styles.ItemMenuMobile style={{}} onClick={() => onClickExit()}>
              <span>
                {' '}
                <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
              </span>
            </Styles.ItemMenuMobile>
            <span style={{ marginTop: 24 }}>
              {languageSelected === 'en-US'
                ? 'Visit our channel and social networks'
                : 'Visite nossos canais e redes sociais'}
            </span>
            <Styles.frstSocials>
              <Styles.itemFrstSocials onClick={onClickSite}>
                {' '}
                <SiteIcon />{' '}
              </Styles.itemFrstSocials>
              <Styles.itemFrstSocials onClick={onClickLinkedin}>
                {' '}
                <LinkedinIcon />{' '}
              </Styles.itemFrstSocials>
              <Styles.itemFrstSocials onClick={onClickInstagram}>
                {' '}
                <InstagramIcon />{' '}
              </Styles.itemFrstSocials>
              <Styles.itemFrstSocials onClick={onClickYoutube}>
                {' '}
                <YoutubeIcon />{' '}
              </Styles.itemFrstSocials>
              <Styles.itemFrstSocials onClick={onClickSpotify}>
                {' '}
                <SpotifyIcon />{' '}
              </Styles.itemFrstSocials>
              <Styles.itemFrstSocials onClick={onClickPodCast}>
                {' '}
                <PodCastIcon />{' '}
              </Styles.itemFrstSocials>
            </Styles.frstSocials>
          </Styles.footerMenuMobile>
        </>
      )}
    </Styles.MenuMobile>
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
      <Styles.SideMenu isVisible={isVisible}>
        {variant === 'LXP' ? (
          <>
            <div>
              <Styles.ItemSideMenu onClick={() => setVisible(false)}>
                <span>
                  {' '}
                  <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                </span>
              </Styles.ItemSideMenu>
              {items &&
                items.length > 0 &&
                items.map((item, index) => {
                  if (item.label == 'Criar conteúdo') return

                  if (item.onClick == null)
                    return (
                      <Styles.ItemSideMenu onClick={() => newOptionsSubMenu(item.subItens)} key={index}>
                        &nbsp;
                        {item.label}
                      </Styles.ItemSideMenu>
                    )

                  return (
                    <Styles.ItemSideMenu onClick={(e) => item.onClick(e)} key={index}>
                      &nbsp;
                      {item.label}
                    </Styles.ItemSideMenu>
                  )
                })}
              <Styles.ItemSideMenu style={{ borderBottom: 'none' }} onClick={() => onClickExit()}>
                <span>
                  {' '}
                  <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                </span>
              </Styles.ItemSideMenu>
            </div>
            <Styles.footerMenuMobile>
              <span style={{ marginTop: 24 }}>
                {languageSelected === 'en-US'
                  ? 'Visit our channel and social networks'
                  : 'Visite nossos canais e redes sociais'}
              </span>
              <Styles.frstSocials>
                <Styles.itemFrstSocials onClick={onClickSite}>
                  {' '}
                  <SiteIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickLinkedin}>
                  {' '}
                  <LinkedinIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickInstagram}>
                  {' '}
                  <InstagramIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickYoutube}>
                  {' '}
                  <YoutubeIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickSpotify}>
                  {' '}
                  <SpotifyIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickPodCast}>
                  {' '}
                  <PodCastIcon />{' '}
                </Styles.itemFrstSocials>
              </Styles.frstSocials>
            </Styles.footerMenuMobile>
          </>
        ) : (
          <>
            <div>
              <Styles.ItemMenuMobile style={{ paddingBottom: 32 }} onClick={() => setVisible(false)}>
                <span>
                  {' '}
                  <BackArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Back' : 'Voltar'}
                </span>
              </Styles.ItemMenuMobile>
              {items &&
                items.length > 0 &&
                items.map((item, index) => {
                  if (item.label == 'Criar conteúdo') return

                  if (item.onClick == null)
                    return (
                      <Styles.ItemMenuMobile onClick={() => newOptionsSubMenu(item.subItens)} key={index}>
                        {item.iconBegin}
                        &nbsp;
                        {item.label}
                      </Styles.ItemMenuMobile>
                    )

                  return (
                    <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                      {item.iconBegin}
                      &nbsp;
                      {item.label}
                    </Styles.ItemMenuMobile>
                  )
                })}
              {customMenu?.map((item, index) => (
                <Styles.ItemMenuMobile onClick={(e) => item.onClick(e)} key={index}>
                  {item.iconBegin}
                  &nbsp;
                  {item.label}
                </Styles.ItemMenuMobile>
              ))}
            </div>
            <Styles.footerMenuMobile>
              <Styles.ItemMenuMobile style={{}} onClick={() => onClickExit()}>
                <span>
                  {' '}
                  <ExitArrow fill="white" /> &nbsp; {languageSelected === 'en-US' ? 'Logout' : 'Sair'}
                </span>
              </Styles.ItemMenuMobile>
              <span style={{ marginTop: 24 }}>
                {languageSelected === 'en-US'
                  ? 'Visit our channel and social networks'
                  : 'Visite nossos canais e redes sociais'}
              </span>
              <Styles.frstSocials>
                <Styles.itemFrstSocials onClick={onClickSite}>
                  {' '}
                  <SiteIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickLinkedin}>
                  {' '}
                  <LinkedinIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickInstagram}>
                  {' '}
                  <InstagramIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickYoutube}>
                  {' '}
                  <YoutubeIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickSpotify}>
                  {' '}
                  <SpotifyIcon />{' '}
                </Styles.itemFrstSocials>
                <Styles.itemFrstSocials onClick={onClickPodCast}>
                  {' '}
                  <PodCastIcon />{' '}
                </Styles.itemFrstSocials>
              </Styles.frstSocials>
            </Styles.footerMenuMobile>
          </>
        )}
      </Styles.SideMenu>
    </>
  )
}

export function IconHamburgerMenu() {
  return (
    <div>
      <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.46 2.4H6.23L4.79 6.42L4.28 8.06H4.26L3.76 6.41L2.31 2.4H1.08V9H1.84V4.85L1.75 3.11H1.76L3.93 9H4.61L6.78 3.11H6.79L6.7 4.85V9H7.46V2.4ZM13.6673 6.24C13.6673 4.95 12.8773 3.9 11.4273 3.9C9.91727 3.9 9.06727 4.88 9.06727 6.5C9.06727 8.12 9.97727 9.1 11.4873 9.1C12.5673 9.1 13.1873 8.69 13.5673 8.01L12.8973 7.66C12.7173 8.14 12.2173 8.4 11.4873 8.4C10.5673 8.4 9.95727 7.81 9.85727 6.8H13.6273C13.6473 6.66 13.6673 6.47 13.6673 6.24ZM11.4273 4.6C12.2773 4.6 12.7873 5.17 12.8973 6.09H9.86727C9.98727 5.15 10.5373 4.6 11.4273 4.6ZM17.6178 3.9C16.9278 3.9 16.2878 4.15 15.9378 4.78L15.8878 4H15.1878V9H15.9878V6.34C15.9878 5.06 16.8078 4.6 17.5378 4.6C18.2278 4.6 18.7678 4.97 18.7678 6.08V9H19.5678V5.8C19.5678 4.51 18.6878 3.9 17.6178 3.9ZM24.9092 4V6.72C24.9092 7.9 24.1592 8.4 23.3092 8.4C22.5892 8.4 22.1292 8.09 22.1292 7.06V4H21.3292V7.27C21.3292 8.59 22.1792 9.1 23.1692 9.1C23.9692 9.1 24.6092 8.84 24.9592 8.24L25.0092 9H25.7092V4H24.9092Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15.5854C0 15.0332 0.447715 14.5854 1 14.5854H24.7843C25.3366 14.5854 25.7843 15.0332 25.7843 15.5854C25.7843 16.1377 25.3366 16.5854 24.7843 16.5854H1C0.447715 16.5854 0 16.1377 0 15.5854ZM0 23.6736C0 23.1213 0.447715 22.6736 1 22.6736H24.7843C25.3366 22.6736 25.7843 23.1213 25.7843 23.6736C25.7843 24.2259 25.3366 24.6736 24.7843 24.6736H1C0.447715 24.6736 0 24.2259 0 23.6736ZM1 30.7617C0.447715 30.7617 0 31.2094 0 31.7617C0 32.314 0.447715 32.7617 1 32.7617H24.7843C25.3366 32.7617 25.7843 32.314 25.7843 31.7617C25.7843 31.2094 25.3366 30.7617 24.7843 30.7617H1Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

export function HasNotificationIcon() {
  return (
    <div>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" rx="5" fill="#FF4D0D" />
      </svg>
    </div>
  )
}

export function HelpIcon() {
  return (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_34_679)">
        <path
          d="M22.7976 18.8385C22.0103 18.6927 21.4879 18.2794 21.2952 17.5098C21.2523 17.3395 21.253 17.1563 21.2523 16.9786C21.2489 15.5001 21.2503 14.0222 21.2503 12.5437C21.2503 11.4561 21.6548 10.9215 22.6974 10.6286C22.7206 10.6218 22.7424 10.6082 22.7628 10.5987C22.5565 5.73339 18.4008 1.24471 12.8313 1.23518C7.22236 1.22496 3.06194 5.72726 2.8372 10.6055C2.90598 10.6246 2.97749 10.6464 3.05036 10.6641C3.79745 10.8473 4.33819 11.4697 4.34568 12.2332C4.36203 13.8894 4.36884 15.5464 4.34432 17.2027C4.32866 18.2862 3.35751 19.0006 2.23244 18.8078C0.967083 18.5913 0.0429235 17.5445 0.0177253 16.2574C-0.00270567 15.2297 -0.00951599 14.2007 0.0197684 13.1737C0.0483717 12.1807 0.525775 11.4289 1.38932 10.9365C1.5337 10.8541 1.58955 10.7737 1.59908 10.6075C1.87762 5.69934 5.31752 1.54096 10.0861 0.339619C16.308 -1.22744 22.6069 2.78793 23.8164 9.09973C23.9117 9.59825 23.956 10.1083 24.0064 10.6143C24.0214 10.7649 24.0609 10.85 24.1991 10.9283C25.1035 11.4377 25.5728 12.2223 25.5905 13.2568C25.6068 14.2252 25.6034 15.1936 25.5918 16.162C25.5789 17.2074 25.1144 18.0022 24.2012 18.5164C24.0561 18.5981 24.0261 18.6893 24.0241 18.8378C24.0152 19.4398 24.0547 20.0507 23.9669 20.6425C23.7033 22.4241 22.1853 23.7215 20.3785 23.7596C19.8099 23.7719 19.2399 23.7664 18.6712 23.7603C18.537 23.7589 18.4662 23.7937 18.4015 23.9244C18.0515 24.6259 17.478 24.9896 16.6894 24.9957C16.0778 25.0005 15.4663 25.0018 14.8547 24.995C13.8127 24.9828 13.0227 24.2166 12.9887 23.1951C12.9553 22.1987 13.7078 21.3644 14.7355 21.3113C15.4302 21.2759 16.1289 21.2834 16.8242 21.3086C17.5584 21.3352 18.0807 21.7152 18.4117 22.3696C18.4464 22.4391 18.5316 22.5317 18.5929 22.5317C19.2971 22.5304 20.0067 22.5624 20.7048 22.4881C21.8523 22.3669 22.7615 21.3304 22.7976 20.1774C22.8112 19.7368 22.7996 19.2961 22.7996 18.8385H22.7976ZM24.3694 14.738C24.3694 14.2368 24.3789 13.7355 24.3673 13.235C24.3496 12.4599 23.7347 11.8375 22.9998 11.8354C22.6763 11.8348 22.4788 12.0057 22.4775 12.3271C22.472 13.9235 22.472 15.5205 22.4775 17.1168C22.4788 17.439 22.6763 17.6133 22.9957 17.6119C23.734 17.6092 24.3483 16.9909 24.3667 16.2158C24.3782 15.7234 24.3694 15.2311 24.3694 14.738ZM3.13072 14.7339C3.13072 13.9439 3.13481 13.1539 3.12868 12.3646C3.12595 11.9982 2.93254 11.8252 2.56547 11.8368C1.8606 11.8586 1.2538 12.4606 1.24086 13.1975C1.22315 14.2163 1.22315 15.2358 1.24086 16.2547C1.25312 16.9609 1.8211 17.55 2.49396 17.6058C2.93663 17.6426 3.128 17.4717 3.13004 17.0269C3.13277 16.2628 3.1314 15.498 3.13072 14.7339ZM15.7693 23.7732C16.0839 23.7732 16.3979 23.7787 16.7125 23.7719C17.0912 23.7637 17.3493 23.511 17.3527 23.1562C17.3561 22.8001 17.1062 22.5351 16.7268 22.529C16.0983 22.5181 15.4697 22.5181 14.8411 22.529C14.4604 22.5358 14.207 22.8028 14.2118 23.1549C14.2172 23.5097 14.476 23.7637 14.8526 23.7719C15.1584 23.7787 15.4635 23.7732 15.7693 23.7732Z"
          fill="white"
        />
        <path
          d="M8.88545 16.423C8.30725 16.4019 7.80465 16.2643 7.36402 15.9476C6.60331 15.4021 6.24713 14.6489 6.24713 13.7193C6.24713 12.029 6.24032 10.3379 6.24917 8.64763C6.25735 7.04652 7.36607 5.95142 8.97058 5.95006C11.5279 5.94734 14.0844 5.94665 16.6417 5.95006C18.2442 5.9521 19.3481 7.04925 19.3556 8.65444C19.3638 10.3366 19.3631 12.0187 19.3556 13.7009C19.3488 15.3156 18.2387 16.4155 16.624 16.4189C15.6134 16.4209 14.602 16.4236 13.5914 16.4155C13.4082 16.4141 13.2767 16.4625 13.1453 16.5953C12.4466 17.3022 11.7458 18.0077 11.03 18.6963C10.3912 19.3112 9.3574 19.111 9.01076 18.3067C8.92631 18.1106 8.90043 17.8797 8.8909 17.6631C8.87251 17.2579 8.88545 16.8513 8.88545 16.4216V16.423ZM10.1093 17.7864C10.1297 17.798 10.1508 17.8089 10.1712 17.8204C10.2373 17.7592 10.3054 17.6999 10.3694 17.6366C11.0865 16.9242 11.8084 16.2173 12.516 15.4961C12.7292 15.2795 12.9587 15.1883 13.2611 15.1917C14.3732 15.2032 15.486 15.1971 16.5981 15.1957C17.5747 15.1951 18.1318 14.6414 18.1332 13.6655C18.1352 12.0092 18.1352 10.3536 18.1332 8.69734C18.1318 7.7187 17.5802 7.17319 16.5961 7.17319C14.0742 7.17319 11.5517 7.17319 9.02983 7.17319C8.011 7.17319 7.47094 7.71053 7.47026 8.72526C7.4689 10.3645 7.47026 12.0031 7.47026 13.6423C7.47026 13.7526 7.47367 13.8637 7.48593 13.9726C7.55403 14.5849 7.99466 15.065 8.60282 15.161C8.8439 15.1992 9.09316 15.1923 9.33833 15.1951C9.90427 15.2012 10.1065 15.398 10.1079 15.9599C10.1093 16.5687 10.1079 17.1782 10.1079 17.7871L10.1093 17.7864Z"
          fill="white"
        />
        <path
          d="M12.8027 12.1847C12.311 12.1847 11.8935 11.7652 11.8976 11.2741C11.9017 10.7811 12.3239 10.3677 12.815 10.3759C13.2999 10.384 13.703 10.7899 13.7078 11.2728C13.7126 11.7624 13.2951 12.1833 12.8034 12.184L12.8027 12.1847Z"
          fill="white"
        />
        <path
          d="M10.7283 11.2804C10.7283 11.7803 10.3183 12.1903 9.82317 12.1848C9.32806 12.1794 8.92217 11.7633 8.92898 11.2668C8.93511 10.7812 9.33828 10.3801 9.82385 10.376C10.3196 10.3713 10.7283 10.7799 10.7283 11.2804Z"
          fill="white"
        />
        <path
          d="M14.8765 11.2757C14.8785 10.7752 15.2899 10.3679 15.785 10.3761C16.2814 10.3836 16.6846 10.8011 16.6758 11.2969C16.6669 11.7811 16.2603 12.1822 15.7761 12.1842C15.281 12.1863 14.8738 11.7756 14.8765 11.2757Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_34_679">
          <rect width="25.6014" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
