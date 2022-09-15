import React,{useState, useEffect} from 'react'
import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { CardWrapper, FeaturedNumber, DescriptionStatistics, ItemStatistics } from './groupStatisticsStyles'
import { IGroupStatistics } from './groupStatistics'

export default function TotalizerCard({ objectStatistics, loading, hasShadow, styles }: IGroupStatistics) {

    const [ windowSize, setWindowSize ] = useState([0,0 ])
    useEffect(() => {
      function updateSize() {
        setWindowSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
     }, []);

    const renderObjectStatistics = (isNamed: any) => {
        const calcHasDivider = (myIndex) => {
            if(myIndex == 0) return false;

            switch(objectStatistics.length) {
                case 6:
                case 7:
                case 8:
                if(myIndex == 4) return false;
            }
            return true;
        }
        return objectStatistics.map((item, index) => {
            return <ItemStatistics 
                hasDivider={ calcHasDivider(index)} 
                twoRows={ objectStatistics.length > 5 && index > 3} 
                key={index} 
                isNamedGrid={isNamed} 
                index={'card-'+(index+1).toString()}
            >
                <FeaturedNumber>{item.featuredNumber}</FeaturedNumber>
                <DescriptionStatistics>{item.description}</DescriptionStatistics>
            </ItemStatistics> 
       })
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <CardWrapper hasShadow={hasShadow} style={{...styles}}>
                { (objectStatistics && objectStatistics.length > 0 && objectStatistics.length <= 5) ?
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateAreas: objectStatistics.length == 5 ? `'card-1 card-2 card-3 card-4 card-5'` : `'card-1 card-2 card-3 card-4'`
                    }}>
                        {renderObjectStatistics(true)}
                    </div>
                    :
                    (objectStatistics && objectStatistics.length > 0 && objectStatistics.length <= 6) ?
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateAreas: `'card-1 card-2 card-3 card-4''. card-5 card-6 .'`
                    }}>
                        {renderObjectStatistics(true)}
                    </div>
                    :
                    (objectStatistics && objectStatistics.length > 0 && objectStatistics.length <= 7) ?
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateAreas: `'card-1 card-1 card-2 card-2 card-3 card-3 card-4 card-4''. card-5 card-5 card-6 card-6 card-7 card-7 .'`
                    }}>
                        {renderObjectStatistics(true)}
                    </div>
                    :
                    (objectStatistics && objectStatistics.length > 0 && objectStatistics.length > 7) &&
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    }}>
                        {renderObjectStatistics(false)}
                    </div>
                }
            {/* <FeaturedNumber></FeaturedNumber> */}
                {/* { loading ?                         
                    <TitleCardLoading className='shimmer'/>
                    :                    
                    <TitleCard> { titleCard } </TitleCard>
                }
                { loading ? 
                <TotalLoading className='shimmer'/> :
                <AreaCounter>
                <TotalText> { textTotal } </TotalText>
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'baseline', marginBottom: '16px'}}>
                    <TotalNumber> { numberPartial ? numberPartial : numberTotal} </TotalNumber>
                    { numberPartial && numberTotal && <PartialNumber>/{ numberTotal } </PartialNumber>}
                </div>
                </AreaCounter>
                } */}
            </CardWrapper>
        </ThemeProvider>
    )
}