import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { IProjectLibrary } from './projectLibrary'
import * as Styles from './projectLibraryStyles'
import SearchField from '@components/search-field'

export default function ProjectLibrary(props: IProjectLibrary) {      

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container >
                <Styles.Typography>{props.textTitle ? props.textTitle : props.title}</Styles.Typography>
                <Styles.ContainerSearch >
                    <SearchField 
                    hasSearchIcon={true} 
                    textButton={props.textButton ? props.textButton : 'Pesquisar'} 
                    placeholder={props.textPlacerolder ? props.textPlacerolder : 'Busque aqui.'} 
                    handleClickButton={props.handleClickSearchButton}
                    />
                </Styles.ContainerSearch>
            </Styles.Container>            
        </ThemeProvider>
    )
}
