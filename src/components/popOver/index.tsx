import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './popOverStyle'
import { IPopOver } from './popOver'

export default function PopOver({ variant, children }: IPopOver) {
    return (
        <ThemeProvider theme={FRSTTheme}>

            {
                variant === 'upLeft' ?
                    <Styles.PopOver>
                        <Styles.RectangleUpLeft variant={variant = 'upLeft'}/>
                        {children}
                    </Styles.PopOver>
                : variant === 'upRight' ?
                    <Styles.PopOver>
                        <Styles.RectangleUpRight variant={variant = 'upRight'} />
                        {children}
                    </Styles.PopOver>
                : variant === 'lowRight' ?
                    <Styles.PopOver>
                        <Styles.RectangleLowRight variant={variant = 'lowRight'} />
                        {children}
                    </Styles.PopOver>
                : variant === 'lowLeft' ?
                    <Styles.PopOver>
                        <Styles.RectangleLowLeft variant={variant = 'lowLeft'} />
                        {children}
                    </Styles.PopOver>
                : variant === 'sideLeft' ?
                    <Styles.PopOverLeftRight>
                        <Styles.RectangleLeft variant={variant = 'sideLeft'} />
                        {children}
                    </Styles.PopOverLeftRight>
                : variant === 'sideRight' ?
                    <Styles.PopOverLeftRight>
                        <Styles.RectangleRight variant={variant = 'sideRight'} />
                        {children}
                    </Styles.PopOverLeftRight>

                : null
            }

        </ThemeProvider>
    );
}