import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './bannerSRGStyle'
import { IBannerTranslate } from './bannerSRG'
import bannerSRG from './img/banner.png'
import spaceRace from './img/spaceRace.png'
import Button from '@components/buttons'
import * as Icons from '../../../shared/icons'
import polygo from './img/Polygon.png'
import Avatar from '@components/avatar'
import avatar from './img/avatar.png'
import mobileBanner from './img/mobileBAnner.png'
import bannerEnglish from './img/bannerEnglish.png'

export default function BannerSRG(props: IBannerTranslate) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.ContainerBanner style={{ ...props.style }} >
                <img className='banner' src={props.idioma ? bannerEnglish : bannerSRG} alt="bannerSRG" />
                <img className='mobile' src={mobileBanner} alt='mobileBanner' />
                <Styles.Container>
                    <div>
                        <img className='spaceRace' src={spaceRace} alt="spaceRace" />
                    </div>
                    <Styles.ContainerTypographyButton>
                        <Styles.TypographyTitle>
                            Space Race Game
                        </Styles.TypographyTitle>
                        <Styles.TypographyText>
                            {props.textTypographyText ? props.textTypographyText : 'Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.'}
                        </Styles.TypographyText>
                        <Styles.ContainerButton>
                            <Button variant='primary' label={props.buttonCreateNewProject ? props.buttonCreateNewProject : 'Criar novo projeto'} handleClick={props.handleClickNewProject} startIcon={<Icons.AddIcon fill='#FFFFFF' />} />
                        </Styles.ContainerButton>
                    </Styles.ContainerTypographyButton>

                    <Styles.ContainerPopOver >
                        <Styles.PopOverLeftRight>
                            <Styles.TypographyPopOver>
                                {props.textTypographyPovOver ? props.textTypographyPovOver : 'Antes de iniciar sua jornada, confira o nosso material de apoio e esteja preparado para o seu primeiro projeto!'}
                            </Styles.TypographyPopOver>
                            <Button variant='link' label={props.buttonLinkAccessHere ? props.buttonLinkAccessHere : 'Acesse aqui'} handleClick={props.handleClickAcessHere} style={{ color: '#21bffc' }} />
                        </Styles.PopOverLeftRight>
                        <img className='polygo' src={polygo} style={{ width: 66, height: 32, position: 'absolute', marginLeft: 120, marginTop: -40 }} />
                        <Styles.ContainerAvatar>
                            <Avatar size='64px' src={avatar} />
                        </Styles.ContainerAvatar>
                    </Styles.ContainerPopOver>
                </Styles.Container>
            </Styles.ContainerBanner>
        </ThemeProvider>
    );
}