import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './colorpickerStyles'
import { IColorpicker } from './colorpicker'
import { useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css'
import { useState } from 'react'

export default function Colorpicker({ width, height, className, disabled, color, setColor}: IColorpicker) {
    const[cor,setCor]= useState(color)
  return (
    <ThemeProvider theme={FRSTTheme}>
        <Styles.Container>
        <Styles.ImputBox type="text" value= {cor} onChange={()=>setCor} color={cor} />
        <Styles.ImputColor type="color" value={cor} onChange={()=>setCor} color={cor} />
       </Styles.Container>
    </ThemeProvider>
  )
}
