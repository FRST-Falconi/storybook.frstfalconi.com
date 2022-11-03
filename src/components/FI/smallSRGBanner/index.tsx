import Button from '@components/buttons'
import * as Styles from './smallSRGBannerStyles'
import {AddIcon} from '@shared/icons'

interface ISmallSRGBanner {
    style: React.CSSProperties
    textButton: string
    handleClick: () => void
}

export default function SmallSRGBanner( props : ISmallSRGBanner ){
    return(
        <Styles.Container style={{...props.style}} onClick={props.handleClick} >
            <Styles.mask>   
                <Styles.SrgLogo>
                    <img src='https://i.gyazo.com/eb084ab35cbd9ad52b24148afba59950.png' alt='SRG Logo' />
                </Styles.SrgLogo>
                <Styles.Button>
                    <Button variant='primary' label={props.textButton} startIcon={<AddIcon fill='#FFF' />} />
                </Styles.Button>
            </Styles.mask>
        </Styles.Container>
    )
}