import Button from '@components/buttons'
import * as Styles from './smallSRGBannerStyles'
import { AddIcon } from '@shared/icons'
import imgFrst from './g12.png'

interface ISmallSRGBanner {
  style: React.CSSProperties
  textButton: string
  handleClick: () => void
  textTitleLogo?: string
  isTexto?: boolean
  traducao?: 'es-ES' | 'en-US'
}

export default function SmallSRGBanner(props: ISmallSRGBanner) {
  return (
    <Styles.Container style={{ ...props.style }} onClick={props.handleClick}>
      <Styles.mask>
        {props.isTexto ? (
          <Styles.TextCard>
            {props.traducao ? (
              <>
                {props.traducao === 'en-US' ? (
                  <>
                    <b>Accelerate</b> your performance and <b>develop</b> by solving <b>real challenges</b>
                  </>
                ) : props.traducao === 'es-ES' ? (
                  <>
                    <b>Acelera</b> tu rendimiento y <b>desarrollate</b> resolviendo <b>desafíos reales</b>
                  </>
                ) : (
                  <>
                    <b>Acelere</b> sua performance e <b>desenvolva-se</b> solucionando <b>desafios reais</b>
                  </>
                )}
              </>
            ) : (
              <>
                <b>Acelere</b> sua performance e <b>desenvolva-se</b> solucionando <b>desafios reais</b>
              </>
            )}
          </Styles.TextCard>
        ) : (
          <>
            <Styles.TitleLogo>{props.textTitleLogo}</Styles.TitleLogo>
            <Styles.SrgLogo>
              <img src={imgFrst} alt="SRG Logo" />
            </Styles.SrgLogo>
          </>
        )}
        <Styles.Button>
          <Button variant="primary" label={props.textButton} startIcon={<AddIcon fill="#FFF" />} />
        </Styles.Button>
      </Styles.mask>
    </Styles.Container>
  )
}
