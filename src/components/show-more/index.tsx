import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { TextShowMore } from './showMoreStyles'
import { IShowMore} from './showMore'

import { ArrowShowMoreLess } from '@shared/icons'
import { useState } from 'react'

export default function ShowMore({ labels, disabled, isOpen, total, onClick }: IShowMore) {
    const [ actionArea, setActionArea ] = useState(false)

    return (
        <ThemeProvider theme={FRSTTheme}>
            <TextShowMore 
                disabled={disabled}
                onMouseOver={() => setActionArea(true)}
                onMouseOut={() => setActionArea(false)}
                onClick={() => !disabled && onClick()}
            >
                {isOpen ? 
                    labels?.showLess : 
                    `${labels?.showMore} ${(total > 0) ? `(${total})` : ''}` }
                {isOpen && 
                <ArrowShowMoreLess 
                    fill={
                        (actionArea && !disabled) ? 
                        '#0645AD' 
                        : 
                        disabled ? '#d3d3d3': '#444'
                    }
                />}
            </TextShowMore>
        </ThemeProvider>
    )
}
