import React,{useState, useEffect} from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './trailListStyles'
import { ITrailList } from './trailList'

import { MessageCheckLine } from '@shared/icons'

export default function TrailList({ title, trails, style }: ITrailList) {

    const [ windowSize, setWindowSize ] = useState([0,0 ])
    useEffect(() => {
      function updateSize() {
        setWindowSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
     }, []);

     const renderTrails = () => {
        return (trails.map((item, index) => {
            return <Styles.ItemList key={index} isMobile={windowSize[0] < 400}> 
                    <Styles.IconList> <MessageCheckLine/> </Styles.IconList> 
                    <Styles.TextList> {item} </Styles.TextList>
                </Styles.ItemList>
            
        }))
     }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Wrapper style={{...style}}>
                <Styles.Title>{title}</Styles.Title>
                <Styles.WrapperList>
                {( trails && trails.length > 0 && trails.length <= 2) ? 
                    <div style={{
                            display: 'flex', 
                            flexDirection: 'column'
                        }}>
                        { renderTrails() }
                    </div>
                    :
                    (trails && trails.length > 0 && trails.length <= 3) ? 
                    <div style={{
                            display: 'grid', 
                            columnGap: '80px', 
                            gridTemplateColumns: windowSize[0] > 900 ? '1fr 1fr' : '1fr'
                        }}>
                        { renderTrails() }
                    </div>
                    :
                    (trails && trails.length > 0 && trails.length <= 5) ?
                    <div style={{
                            display: 'grid', 
                            columnGap: '80px', 
                            gridTemplateColumns:windowSize[0] > 1400 ? '1fr 1fr 1fr' : 
                            windowSize[0] > 900 ? '1fr 1fr' : '1fr'
                        }}>
                        { renderTrails() }
                    </div>                    
                    :
                    (trails && trails.length > 0 && trails.length > 5) && 
                    <div style={{
                            display: 'grid', 
                            columnGap: '80px', 
                            gridTemplateColumns:windowSize[0] > 1400 ? '1fr 1fr 1fr' : 
                            windowSize[0] > 900 ? '1fr 1fr' : '1fr'
                        }}>
                        { renderTrails() }
                    </div>
                    
                }
                </Styles.WrapperList>
            </Styles.Wrapper>
        </ThemeProvider>
    )
}
