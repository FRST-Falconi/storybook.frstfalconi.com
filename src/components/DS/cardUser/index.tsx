import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './cardUser.styles'
import { ICardUser } from './cardUser'
import Avatar from '@components/avatar'

export default function CarUser({style, userInfo, handleLinkProfile}:ICardUser){
    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.UserContainer id='userContainer' style={{...style}}>
                    <Styles.Headers>
                        <Avatar src={userInfo.avatar} size='74px' onClick={handleLinkProfile} isActiveClick/>
                        <p style={{fontWeight:600, fontSize:"14px", textAlign: "center", fontFamily:"Work Sans", marginTop:"8px"}}>{userInfo.name}</p>
                    </Styles.Headers>
                        <Styles.InfoDescription>
                            <p>{userInfo.profession}</p>
                            <p style={{marginTop:"3px"}}>{userInfo.education}</p>
                        </Styles.InfoDescription>
                    <Styles.InfoBottom >
                        <p>{userInfo.activeSice} <b>{userInfo.date}</b></p>
                    </Styles.InfoBottom>
            </Styles.UserContainer>
        </ThemeProvider>
    )
}