import * as React from 'react'
import * as Styles from './dropdownProfileMenuStyle'
import Button from '@mui/material/Button'
import { DropdownIcon, DropdownSideIconWhite } from '@shared/icons'
import {default as ButtonFrst} from '@components/buttons'

import { IDropdownProfileMenu } from './dropdownProfileMenu'


export default function DropdownProfileMenu({variant, user, menuItems, isMobileVersion, style, language}: IDropdownProfileMenu) {
    const [ anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [ anchorSub, setAnchorSub] = React.useState<null | HTMLElement>(null)
    const [ subMenu, setSubMenu] = React.useState(null)
    const [ isMobile, setIsMobile ] = React.useState(isMobileVersion);
    const open = Boolean(anchorEl)
    const openSub = Boolean(anchorSub)
    
    React.useEffect(() => {
        setIsMobile(isMobileVersion)
    }, [isMobileVersion])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    
    const handleClose = () => {
        setAnchorEl(null)
        setAnchorSub(null)
    }

    const handleSubitens = (subItens) => (event: React.MouseEvent<HTMLElement>) => {
        setAnchorSub(event.currentTarget)
        setSubMenu(subItens)
    }

    return (
        <Styles.Container style={{...style}}>
            { variant == 'LXP' ?
            <>
                <Button
                    id="profile-dropdown"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    style={{ padding: 0 }}
                    onClick={handleClick}
                >
                    <Styles.AvatarCustomUser alt="User Photo" 
                        src={user.avatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"}
                    />
                    { !isMobileVersion && <>
                        <Styles.UserName> {language === 'en' ? 'Me' : 'Eu' } </Styles.UserName>
                        <DropdownIcon fill="white" /> 
                    </>}
                </Button>
                <Styles.MenuCustom
                    id="basic-menu"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center', }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    variantstyle={'LXP'}
                >
                    <Styles.ProfileInfos>
                        <Styles.AvatarCustomUser alt="User Photo" 
                            src={user.avatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"}
                            style={{width: '70px', height: '70px'}}
                        />
                        <Styles.WrapperRightProfileInfo>
                            <Styles.ProfileNameInfo> {user.name} </Styles.ProfileNameInfo>
                            <Styles.ProfileCompanyInfo> {user.company} </Styles.ProfileCompanyInfo>
                            <Styles.WrapperButtonFrst>
                                <ButtonFrst
                                    variant={'secondary'}
                                    label={'Ver Perfil'}
                                    handleClick={() => { alert('Click') }}
                                />
                            </Styles.WrapperButtonFrst>
                        </Styles.WrapperRightProfileInfo>
                    </Styles.ProfileInfos>

                    { menuItems && menuItems.length > 0 && menuItems.map((item, index) => {
                        if (item.subItens) {
                            if (item.subItens.length > 1) return (
                                <Styles.MenuItemCustom key={index} onClick={handleSubitens(item.subItens)} variantstyle={'LXP'}>
                                    {item.iconBegin && item.iconBegin}
                                    {item.iconBegin && <span>&nbsp;</span>}
                                    <div style={{width: '100%',display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <div style={{marginLeft: '7px'}}>{item.label}</div><DropdownSideIconWhite />
                                    </div>
                                </Styles.MenuItemCustom>
                            )
                        }
                        else return (
                            <Styles.MenuItemCustom key={index} onClick={item.onClick || handleClose} variantstyle={'LXP'}>
                                {item.iconBegin && item.iconBegin}
                                <div style={{width: '100%',display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <div style={{marginLeft: item.iconBegin ? '9px': '0px'}}>{item.label}</div>
                                </div>
                            </Styles.MenuItemCustom>
                        )
                    })}
                </Styles.MenuCustom>
                <Styles.MenuCustom
                    id="sub-menu"
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                    anchorEl={anchorSub}
                    open={openSub}
                    onClose={handleClose}
                    variantstyle={'default'}
                >
                    {subMenu && subMenu.map((item, index) => {
                        return <Styles.SubMenuItemCustom 
                                key={item.id} 
                                onClick={(e) => item.onClick(e)}
                                variantstyle={'LXP'}
                            >
                                {item.label}
                            </Styles.SubMenuItemCustom>                        
                    })}
                </Styles.MenuCustom>
            </>
            :
            <>
            <Button
                id="profile-dropdown"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                style={{ background: '#FF4D0D', borderRadius: '0px', padding: '5px', width: '185px', whiteSpace: 'nowrap' }}
                onClick={handleClick}
            >
                <Styles.AvatarCustomUser alt="User Photo" 
                    src={user.avatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"}
                />
                <Styles.UserName> {language === 'en' ? 'Me' : 'Eu' } </Styles.UserName>
                <DropdownIcon fill="white" />
            </Button>
                <Styles.MenuCustom
                    id="basic-menu"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center', }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    variantstyle={'default'}
                >
                { menuItems && menuItems.length > 0 && menuItems.map((item, index) => {
                    if (item.subItens) {
                        if (item.subItens.length > 1) return (
                            <Styles.MenuItemCustom 
                                key={index} 
                                onClick={handleSubitens(item.subItens)}
                                variantstyle={'default'}
                            >
                                {item.iconBegin && item.iconBegin}
                                {item.iconBegin && <span>&nbsp;</span>}
                                <div style={{width: '100%',display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <div style={{marginLeft: '7px'}}>{item.label}</div><DropdownSideIconWhite />
                                </div>
                            </Styles.MenuItemCustom>
                        )
                    }
                    else return (
                        <Styles.MenuItemCustom 
                            key={index} onClick={item.onClick || handleClose}
                            variantstyle={'default'}>
                            {item.iconBegin && item.iconBegin}
                            <div style={{width: '100%',display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <div style={{marginLeft: item.iconBegin ? '9px': '0px'}}>{item.label}</div>
                            </div>
                        </Styles.MenuItemCustom>
                    )
                })}
            </Styles.MenuCustom>

            <Styles.MenuCustom
                    id="sub-menu"
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                    anchorEl={anchorSub}
                    open={openSub}
                    onClose={handleClose}
                    variantstyle={'default'}
            >
                {subMenu && subMenu.map((item, index) => {
                    return <Styles.SubMenuItemCustom 
                            key={item.id} 
                            onClick={(e) => item.onClick(e)}
                            variantstyle={'default'}
                        >
                            {item.label}
                        </Styles.SubMenuItemCustom>                        
                })}
            </Styles.MenuCustom>
                
            </>
            }
        </Styles.Container>
    )
}