import {
    TrailCardContainer,
    WrapperBanner,
    CardInfo
} from './styles'

interface Company {
    icon?: string
    name?: string
    uuid?: string
}

interface trailCardProps {
    banner: string
    trailName: string
    company?: Company
    handleClick: () => void
}

export default function TrailCard ({
    banner,
    trailName,
    company,
    handleClick
}: trailCardProps) {

    return (
        <TrailCardContainer onClick={handleClick}>
            <WrapperBanner>
                <img src={banner} alt="banner" />
            </WrapperBanner>
            <CardInfo>
                <p className="trailName"> {trailName} </p>
                {company &&
                    <p className="company">
                        <img src={company.icon} />
                        {company.name}
                    </p>
                }
            </CardInfo>
        </TrailCardContainer>
    )
}