import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './objectiveStepStyles'
import { IObjectiveStep } from './objectiveStep'

export default function ObjectiveStep({ description, number }: IObjectiveStep) {
    return (
        <Styles.WrapperCard>
            <Styles.WrapperTopic>
            {number}

            </Styles.WrapperTopic>
            <Styles.WrapperDescription>
            {description}
            </Styles.WrapperDescription>
        </Styles.WrapperCard>
    )
}
