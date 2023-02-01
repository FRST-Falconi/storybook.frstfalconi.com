import '../../shared/global.css'
import * as Styles from './headerChallengeStyle'

interface HeaderChallengeProps {
    firstLine?: string,
    secondLine?: string,
}

export default function HeaderChallenge({ firstLine, secondLine }: HeaderChallengeProps) {
    return (
        <Styles.Div>
            <h1>{firstLine}<br />{secondLine}</h1>
        </Styles.Div>
    );
}