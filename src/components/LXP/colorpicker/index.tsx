import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './colorpickerStyles'
import { IColorpicker } from './colorpicker'
import React, { useState } from 'react'



const ColorPicker = props => {
  return (
    <Styles.Container>
      <input type="text" {...props} />
      <input type="color" {...props} />
    </Styles.Container>
  );
};
export default function Colorpicker({ width, height, color, }: IColorpicker) {
  const [state, updateState] = useState(color);

  const handleInput = e => {
    updateState(e.target.value);
    color= state
  };
  return(
    <ThemeProvider theme={FRSTTheme}>
       <ColorPicker onChange={handleInput} value={state} width={width} height={height}/>
    </ThemeProvider>
  )
}
