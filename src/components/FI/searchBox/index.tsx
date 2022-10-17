import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { ISearchBox } from './searchBox'
import * as Styles from './SearchBoxStyles'
import SearchField from '@components/search-field'

export default function SearchBox(props: ISearchBox) {      

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container style={{...props.style}}>
                <Styles.Typography>{props.textTitle ? props.textTitle : props.textTitle}</Styles.Typography>
                <Styles.ContainerSearch >
                    <SearchField 
                    hasSearchIcon={true} 
                    textButton={props.textButton ? props.textButton : ''} 
                    placeholder={props.textPlaceholder ? props.textPlaceholder : ''} 
                    handleClickButton={props.handleClickSearchButton}
                    onChange={props.onChange}
                    />
                </Styles.ContainerSearch>
            </Styles.Container>            
        </ThemeProvider>
    )
}
