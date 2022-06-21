import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { CardWrapper, TitleCard, AreaCounter, TotalText, TotalNumber, TitleCardLoading, TotalLoading } from './totalizerCardStyles'
import { ITotalizerCard } from './totalizerCard'

export default function TotalizerCard({ titleCard, textTotal, numberTotal, loading, className, styles }: ITotalizerCard) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <div  style={{width: '180px', ...styles}} className={className}>
                <CardWrapper>
                    { loading ?                         
                        <TitleCardLoading className='shimmer'/>
                        :                    
                        <TitleCard> { titleCard } </TitleCard>
                    }
                    { loading ? 
                    <TotalLoading className='shimmer'/> :
                    <AreaCounter>
                    <TotalText> { textTotal } </TotalText>
                            <TotalNumber> { numberTotal } </TotalNumber>
                    </AreaCounter>
                    }
                </CardWrapper>
            </div>
        </ThemeProvider>
    )
}