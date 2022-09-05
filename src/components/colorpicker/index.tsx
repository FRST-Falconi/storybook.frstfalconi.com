import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './colorpickerStyles'
import { IColorpicker } from './colorpicker'
import 'react-color-palette/lib/css/styles.css'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export default function Colorpicker({ width, height, className, disabled, color, setColor}: IColorpicker) {
  const rootElement = document.getElementById("root");
  ReactDOM.render(

    <ThemeProvider theme={FRSTTheme}>
        ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
        rootElement
        );
    </ThemeProvider>
  )
}
