import { ThemeProvider } from 'styled-components'
import {
    ContainerCard,
    ContentCard
} from './styles'
import { FRSTTheme } from '../../../../theme'

interface ChannelsProps {
    channelImg: string
    channelTitle: string
    handleClickCard: () => void
}

export default function ChannelsCard ({
    channelImg,
    channelTitle,
    handleClickCard
}: ChannelsProps) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            <ContainerCard onClick={handleClickCard}>
                <ContentCard>
                    <img src={channelImg} alt='Channel Image'/>
                    <p>
                        {channelTitle}
                    </p>
                </ContentCard>
            </ContainerCard>
        </ThemeProvider>
    )
}