import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import style from "./logoFRST.module.css"

interface ILogoFRST {
  variant: string 
  title1Logo?: string
  title2Logo?: string
}

export default function LogoFRST(props: ILogoFRST) {
   
    return (
        <ThemeProvider theme={FRSTTheme}>
          {props.variant === 'light' ? (
          <div className={style.containerLight} >
            <img src="https://api-deimos-cdn.frstfalconi.cloud/frst_branco_1.png" alt='LogoFRST'  width={198} height={64}/>
            <p>{props.title1Logo ? props.title1Logo : 'Pessoas transformam o jogo,'}</p> 
            <p>{props.title2Logo ? props.title2Logo : 'Resultados transformam as pessoas.'}</p>           
          </div> 
          )
         : props.variant === 'dark' ? (
         <div className={style.containerDark} >
            <img src="https://api-deimos-cdn.frstfalconi.cloud/logofrst_black.png" alt='LogoFRST'  width={198} height={64}/>
            <p>{props.title1Logo ? props.title1Logo : 'Pessoas transformam o jogo,'}</p> 
            <p>{props.title2Logo ? props.title2Logo : 'Resultados transformam as pessoas.'}</p>          
          </div>
         )
         :null
        }            
        </ThemeProvider>
    )
}