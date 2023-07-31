import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { CheckboxChecked, CheckboxEmpty } from '@shared/icons'

import { CheckBoxWrapper, CheckButton, Label } from './checkboxStyle'
import { useState } from 'react'

export default function Checkbox({label, isChecked, handleCheck, color = FRSTTheme['colors'].primary1}) {
    const [ actionAreaCheckIcon, setActionAreaCheckIcon ] = useState(false);

    return (
        <ThemeProvider theme={FRSTTheme}>
            <CheckBoxWrapper
                onClick={handleCheck}
                onMouseOver={() => setActionAreaCheckIcon(true)}
                onMouseOut={() => setActionAreaCheckIcon(false)}
                >   
                    <CheckButton>
                        {
                            isChecked ? (          
                                <CheckboxChecked fill={color} stroke={color}/>
                            ) : (
                                actionAreaCheckIcon ? 
                                <CheckboxEmpty stroke={color}/> : 
                                <CheckboxEmpty stroke={FRSTTheme['colors'].neutralsGrey4}/> )
                        }
                    </CheckButton>
                    <Label isChecked={isChecked}> { label } </Label>
            </CheckBoxWrapper> 
        </ThemeProvider>
    );
}