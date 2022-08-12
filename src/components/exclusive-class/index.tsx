import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './exclusiveClassStyles'
import { IExclusiveClass } from './exclusiveClass'

import { PeopleIcon, EditIcon } from '@shared/icons'

import Button from '@components/buttons/index'

export default function ExclusiveClassCard({ titleClass, labelButton, className, handleClick }: IExclusiveClass) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.WrapperCard>
                <Styles.WrapperTitle >
                    <PeopleIcon/>
                    <Styles.TitleCard style={{ marginLeft: '14.67px'}}>
                        {titleClass}
                    </Styles.TitleCard>
                </Styles.WrapperTitle>
                
                <Styles.WrapperButton style={{display:'flex', justifyContent: 'end', marginRight: '26px' }}>
                    <Button
                        label={labelButton}
                        startIcon={<EditIcon />}
                        variant="link"
                        handleClick={handleClick}
                    />
                </Styles.WrapperButton>
            </Styles.WrapperCard>
        </ThemeProvider>
    )
}
