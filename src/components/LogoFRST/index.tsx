import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import LogoLight from "./frst_branco 1.png"
import LogoDark from "./logofrst_black.png"
import style from "./logoFRST.module.css"

interface ILogoFRST {
  variant: string;
}

export default function LogoFRST({ variant }: ILogoFRST) {
   
    return (
        <ThemeProvider theme={FRSTTheme}>
          {variant === 'light' ? (
          <div className={style.containerLight} >
            <img src={LogoLight} alt='LogoFRST'  width={198} height={64}/>
            <p>Pessoas transformam o jogo,</p>
            <p>Resultados transformam as pessoas.</p>
          </div> 
          )
         : variant === 'dark' ? (
         <div className={style.containerDark} >
            <img src={LogoDark} alt='LogoFRST'  width={198} height={64}/>
            <p>Pessoas transformam o jogo,</p>
            <p>Resultados transformam as pessoas.</p>
          </div>
         )
         :null
        }            
        </ThemeProvider>
    )
}