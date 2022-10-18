import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { IBannerSRG } from './bannerSRG'
import Button from '@components/buttons'
import LateralMenu from '@components/lateral-menu'
import * as Icons from '@shared/icons'
import { 
    ContainerBanner, 
    WrapperContent, 
    WrapperContentMain,
    WrapperContentHelper,
    TitleSRG, 
    DescriptionSRG,
    SpeechBubble,
    HelperText,
    FrstSocials,
    ItemFrstSocials } from './bannerSRGStyle'

export default function BannerSRG(props: IBannerSRG) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <ContainerBanner bannerNormal={props?.bannerSRG?.normal} bannerResponsive={props?.bannerSRG?.responsive} style={{...props.style}}>
                <WrapperContent style={{maxHeight: '240px', height: '240px', display: 'flex', alignItems: 'flex-start', marginTop: '-100px'}}>
                    { props &&  props.social &&
                    <FrstSocials>
                        {props.social.onClickSite &&      <ItemFrstSocials onClick={() => props.social.onClickSite()} > <Icons.SiteIcon /> </ItemFrstSocials>}
                        {props.social.onClickLinkedin &&  <ItemFrstSocials onClick={() => props.social.onClickLinkedin()} > <Icons.LinkedinIcon /> </ItemFrstSocials>}
                        {props.social.onClickInstagram && <ItemFrstSocials onClick={() => props.social.onClickInstagram()} > <Icons.InstagramIcon /> </ItemFrstSocials>}
                        {props.social.onClickYoutube &&   <ItemFrstSocials onClick={() => props.social.onClickYoutube()} > <Icons.YoutubeIcon /> </ItemFrstSocials>}
                        {props.social.onClickSpotify &&   <ItemFrstSocials onClick={() => props.social.onClickSpotify()} > <Icons.SpotifyIcon /> </ItemFrstSocials>}
                        {props.social.onClickPodCast &&   <ItemFrstSocials onClick={() => props.social.onClickPodCast()} > <Icons.PodCastIcon /> </ItemFrstSocials>}
                    </FrstSocials> }
                    <LateralMenu
                        variant={'primary'}
                        channel={''}
                        name={props.lateralMenu.name}
                        hiddenButtonHeader={true}
                        avatar={props.lateralMenu.avatar}
                        button={props.lateralMenu.button}
                        listOptions={props.lateralMenu.listOptions}
                    />
                </WrapperContent>
                
                <WrapperContent>
                    <img src={props.logoSRG}/>
                </WrapperContent>
                
                <WrapperContentMain>
                    <TitleSRG>{props?.labels?.textTitle ? props?.labels?.textTitle : 'Space Race Game'}</TitleSRG>
                    <DescriptionSRG>{props?.labels?.textDescription}</DescriptionSRG>
                    <Button 
                        variant='primary' 
                        label={props?.newProject?.label ? props.newProject?.label : 'Criar novo projeto'} 
                        handleClick={() => props.newProject.action()} 
                        startIcon={<Icons.AddIcon fill='#FFFFFF' />}
                    />
                </WrapperContentMain>           
                
                <WrapperContentHelper>
                    <SpeechBubble>
                        <HelperText>{props.labels.textHelperDescription}</HelperText>
                        <Button 
                            variant='link' 
                            label={props?.acessHere?.label ? props.acessHere.label : 'Acesse aqui'} 
                            handleClick={() => props.acessHere.action()} 
                            style={{ color: '#21bffc' }} />
                    </SpeechBubble>
                    <img src={props.avatarSRG}/>
                </WrapperContentHelper>
                <WrapperContent>
                    <Button 
                        variant='primary' 
                        label={props?.newProject?.label ? props.newProject?.label : 'Criar novo projeto'} 
                        handleClick={() => props.newProject.action()} 
                        startIcon={<Icons.AddIcon fill='#FFFFFF' />}
                    />
                </WrapperContent>
            </ContainerBanner>
        </ThemeProvider>
    )
}