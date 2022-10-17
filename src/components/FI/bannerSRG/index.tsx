import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { IBannerSRG } from './bannerSRG'
import Button from '@components/buttons'
import * as Icons from '@shared/icons'
import { 
    ContainerBanner, 
    WrapperContent, 
    WrapperContentMain,
    WrapperContentHelper,
    TitleSRG, 
    DescriptionSRG,
    SpeechBubble,
    HelperText } from './bannerSRGStyle'

export default function BannerSRG(props: IBannerSRG) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <ContainerBanner bannerNormal={props?.bannerSRG?.normal} bannerResponsive={props?.bannerSRG?.responsive} style={{...props.style}}>
                <WrapperContent>
                    &nbsp;
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