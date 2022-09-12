import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { CardWrapper, TitleCard, AreaCounter, TotalText, TotalNumber, PartialNumber, TitleCardLoading, TotalLoading } from './totalizerCardStyles'
import { ITotalizerCard } from './totalizerCard'

export default function TotalizerCard({ titleCard, textTotal, numberTotal, numberPartial, loading, className, hasShadow, styles }: ITotalizerCard) {
    return (
        <ThemeProvider theme={FRSTTheme}>
                <CardWrapper hasShadow={hasShadow} style={{...styles}}>
                    { loading ?                         
                        <TitleCardLoading className='shimmer'/>
                        :                    
                        <TitleCard> { titleCard } </TitleCard>
                    }
                    { loading ? 
                    <TotalLoading className='shimmer'/> :
                    <AreaCounter>
                    <TotalText> { textTotal } </TotalText>
                    <div style={{display: 'flex', flexDirection:'row', alignItems: 'baseline', marginBottom: '16px'}}>
                        <TotalNumber> { numberTotal } </TotalNumber>
                        { numberPartial && <PartialNumber>/{ numberPartial } </PartialNumber>}
                    </div>
                    </AreaCounter>
                    }
                </CardWrapper>
        </ThemeProvider>
    )
}