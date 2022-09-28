import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { IVideo } from './Video'

export default function Video({ videoId, privateHash, width, height, autoplay, quality, timeStart, showSpeedControl, controls, loop, keyboard, style }: IVideo) {
    
    return (        
        <ThemeProvider theme={FRSTTheme}>
            <div style={{...style}}>
                <iframe 
                    src={`https://player.vimeo.com/video/${videoId}?h=${privateHash ? privateHash : ''}&autoplay=${autoplay ? autoplay : 0}&quality=${quality ? quality : '720p'}&speed=${showSpeedControl ? showSpeedControl : 0}&controls=${controls ? controls : 1}&loop=${loop ? loop : 0}&keyboard=${keyboard ? keyboard : 0}&#t=${timeStart ? timeStart : '0m0s'}`} 
                    width={width ? width : 640}
                    height={height ? height : 342}
                    allow="autoplay; fullscreen; picture-in-picture" 
                    frameBorder="0" 
                    allowFullScreen 
                />
            </div>
        </ThemeProvider>            
    )
}
