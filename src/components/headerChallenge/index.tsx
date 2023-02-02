import '../../shared/global.css'
import * as Styles from './headerChallengeStyle'

interface HeaderChallengeProps {
    firstLine?: string,
    secondLine?: string,
    desktopBackground?: any,
    mobileBackground?: any,
}

export default function HeaderChallenge({ firstLine, secondLine, desktopBackground, mobileBackground }: HeaderChallengeProps) {
    return (
        <Styles.Div desktopBackgroundProps={desktopBackground} mobileBackgroundProps={mobileBackground} > 
            <h1>{firstLine}<br /> {secondLine}</h1>
        </Styles.Div>
    );
}