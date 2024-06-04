import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './cardUser.styles'
import { ICardUser } from './cardUser'
import Avatar from '@components/avatar'
import Button from '@components/buttons'
import CloseIcon from '@mui/icons-material/Close';

export default function CarUser({ style, userInfo, handleLinkProfile, hasButton, labelButton, handleInvite, handleRemove}: ICardUser) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.UserContainer id="userContainer" style={{ ...style }} variant={Boolean(hasButton)}>
                <Styles.Headers>
                    <Avatar src={userInfo.avatar} size={hasButton ? '56px' : '74px'}onClick={handleLinkProfile} isActiveClick />
                    <Styles.UserInfo variant={Boolean(hasButton)}>
                        {userInfo.name}
                    </Styles.UserInfo>
                    {hasButton &&
                        <div style={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }} onClick={handleRemove}>
                            <CloseIcon htmlColor='#BDBDBD' fontSize='small'/>
                        </div>
                    }
                </Styles.Headers>
                <Styles.InfoDescription variant={Boolean(hasButton)}>
                    <p>{userInfo.profession}</p>
                    <p style={{ marginTop: '3px' }}>{userInfo.education}</p>
                </Styles.InfoDescription>
                {hasButton ? (
                    <Button label={labelButton} variant='primary' handleClick={handleInvite} style={{width:'160px', height:'36px', marginTop:'24px'}}/>
                ) : (
                    <Styles.InfoBottom>
                        <p>
                            {userInfo.activeSice} <b>{userInfo.date}</b>
                        </p>
                    </Styles.InfoBottom>
                )}
            </Styles.UserContainer>
        </ThemeProvider>
    )
}
