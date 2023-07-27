import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './cardPeople.styles'
import Avatar from '@components/avatar'
import Checkbox from '@components/form-elements/checkbox'

export default function CardPeople({labels, userInfo, isChecked, onChange}){
    return(
        <ThemeProvider theme={FRSTTheme}>
            <Styles.PeopleContainer isChecked={isChecked}>
                <Styles.PeopleInfo>
                    <div style={{paddingTop:'24px', display:'flex', paddingLeft:'16px'}}>
                        <Checkbox label='' isChecked={isChecked} handleCheck={onChange} />
                        <Avatar size='40px'/>
                    </div>
                    <Styles.DescriptionPeople>
                        <Styles.PeopleName>
                            Bernardo Vasconcelos
                        </Styles.PeopleName>

                        <Styles.PeopleEmail>
                            nome@frstfalconi.com
                        </Styles.PeopleEmail>

                    </Styles.DescriptionPeople>
                </Styles.PeopleInfo>

                <Styles.PositionContainer>
                    <Styles.DataBlock>
                        {labels.area}: <span>{userInfo.area} </span>
                    </Styles.DataBlock>
                    <Styles.DataBlock>
                        {labels.position}: <span>{userInfo.position}</span>
                    </Styles.DataBlock>
                </Styles.PositionContainer>

            </Styles.PeopleContainer>
        </ThemeProvider>
    )
}