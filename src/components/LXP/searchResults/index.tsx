import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { ISearchResults } from './searchResults'
import * as Styles from './searchResultsStyles'

export default function SearchResults({ src, title, description, onClick }: ISearchResults) {

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.Container>
        <Styles.Image src={src} onClick={onClick}/>
        <Styles.TextContainer> 
          <Styles.Title onClick={onClick}> {title} </Styles.Title>
          <Styles.Description> {description} </Styles.Description>
        </Styles.TextContainer>
      </Styles.Container>
    </ThemeProvider>
  )
}
