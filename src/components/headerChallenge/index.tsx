import '../../shared/global.css'
import * as Styles from './headerChallengeStyle'

interface HeaderChallengeProps {
    label?: string,
}

export default function HeaderChallenge({ label }: HeaderChallengeProps) {
    return (
        <Styles.Div>
            <h1>{label}</h1>
        </Styles.Div>
    );
}