import Button from '@components/buttons'
import TextField from '@components/form-elements/textfield'
import style from './bannerLxp.module.css'
interface BannerLxpParams{
    title: string,
    titleColor?: string,
    bgSrc?: string,
    bgColor?: string,
    isDisabledText?: boolean,
    style?: React.CSSProperties
}

export default function BannerLxp ( props : BannerLxpParams) {

    function configBanner (){
        return(
            <div className={style.configContainer}>
                <span>Título</span>
                <span>Alterar título do KnowHub</span>
                <TextField />
            </div>
        )
    }

    return (
        <div className={style.bannerContainer} style={{...props.style,backgroundColor: props.bgColor }} >
            {!props.isDisabledText ?
                <span style={{color: props.titleColor ? props.titleColor : '#FFF', fontSize: 40, fontWeight: 700 }}>{props.title}</span>
                : ''
            }
            <div className={style.configButton}> <Button variant='primary' label='Configuração de capa' handleClick={ () => configBanner} /> </div>
        </div>
    )
}