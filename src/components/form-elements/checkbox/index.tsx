import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { CheckboxChecked, CheckboxEmpty } from '@shared/icons'

import { CheckBoxWrapper, CheckButton, Label } from './checkboxStyle'
import { useState } from 'react'

export default function Checkbox({label, isChecked, handleCheck}) {
    const [ actionAreaCheckIcon, setActionAreaCheckIcon ] = useState(false);

    return (
        <ThemeProvider theme={FRSTTheme}>
            <CheckBoxWrapper
                onClick={() => handleCheck(!isChecked) }
                onMouseOver={() => setActionAreaCheckIcon(true)}
                onMouseOut={() => setActionAreaCheckIcon(false)}
                >   
                    <CheckButton>
                        {
                            isChecked ? (          
                                <CheckboxChecked/>
                            ) : (
                                actionAreaCheckIcon ? 
                                <CheckboxEmpty stroke={FRSTTheme['colors'].primary1}/> : 
                                <CheckboxEmpty stroke={FRSTTheme['colors'].neutralsGrey4}/> )
                        }
                    </CheckButton>
                    <Label isChecked={isChecked}> { label } </Label>
            </CheckBoxWrapper> 
        </ThemeProvider>
    );
}