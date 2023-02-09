import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { ISearchResults } from './searchResults'
import * as Styles from './searchResultsStyles'

export default function SearchResults({ src, title, description, textSkills, skills, style, onClick }: ISearchResults) {

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.Container onClick={onClick} style={{...style}} >
        <Styles.Image style={{backgroundImage:`url(${src})`}} />
        
        <Styles.TextContainer> 
          <Styles.Title> {title} </Styles.Title>
          <Styles.Description> {description} </Styles.Description>
          {skills ?
            <Styles.skillSets>
              {textSkills}:
              {
                skills.map( item => {
                  return(
                    <Styles.skillTag>
                      {item}
                    </Styles.skillTag>
                  )
                })
              }
            </Styles.skillSets>
            : null
          }
        </Styles.TextContainer>
      </Styles.Container>
    </ThemeProvider>
  )
}
