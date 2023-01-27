import '../../shared/global.css'
import * as Styles from './bannerChallengeStyle'

interface BannerChallengeProps {
    label?: string,
}

export default function BannerChallenge({ label }: BannerChallengeProps) {
    return (
        <Styles.Div>
            <h1>{label}</h1>
        </Styles.Div>
    );
}