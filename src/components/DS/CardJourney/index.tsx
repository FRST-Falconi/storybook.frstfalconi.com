import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './style'
import Avatar from '@components/avatar'
import Checkbox from '@components/form-elements/checkbox'
import Tooltip from '../tooltip'
import { Box, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


export interface ICardJourney {
    userInfo: {
        id?: string
        name?: string
        avatar?: string
        description?: string
        colaboracao?: string
        ButtonText?: string
    }
    
    style?: React.CSSProperties
    onClickProfile?: () => void
    onClickButton?: () => void
    onClickRemove?: () => void


}


export default function CardJourney({ userInfo, style, onClickButton, onClickProfile, onClickRemove}:ICardJourney) {


    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Card>
            <Styles.CardInf>
                <Styles.ButtonRemove onClick={onClickRemove}><CloseIcon htmlColor='#BDBDBD' style={{padding:"1px"}} fontSize='small'/></Styles.ButtonRemove>
                <Styles.UserPerfil onClick={onClickProfile}>
                <Avatar size="24px" src={userInfo?.avatar} />
                <Styles.UserName>{userInfo?.name}</Styles.UserName>
                </Styles.UserPerfil>

                <Styles.TextChallege>DESAFIO</Styles.TextChallege>

                <Styles.TextDescription>{userInfo?.description}</Styles.TextDescription>

                <Styles.Colaboracao>
                <Styles.ColaboracaoText>{userInfo?.colaboracao}</Styles.ColaboracaoText>
                </Styles.Colaboracao>
            </Styles.CardInf>

                <Styles.Button onClick={onClickButton}>
                    <Styles.ButtonText>{userInfo?.ButtonText}</Styles.ButtonText>
                </Styles.Button>
                

            

            </Styles.Card>
        </ThemeProvider>
    )
}
