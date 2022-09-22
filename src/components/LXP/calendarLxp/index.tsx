import React, { useState } from 'react'
import style from './calendarLxp.module.css'
import { CloseIcon } from '@shared/icons'
import Button from '@components/buttons'
import './calendar.css'
import { ArrowScrollLeft, ArrowScrollRight } from '@shared/icons'
import { Box, Modal } from '@mui/material'
import { DateRange, DefinedRange } from 'react-date-range'
import { pt } from 'date-fns/locale'

import 'react-date-range/dist/styles.css'; // main style file
import {defaultStaticRanges} from './defaultRanges'

interface CalendarLxpParams {
    styles ?: React.CSSProperties
    open ?: boolean
    onSave ?: ([]) => void
    handleClose ?: () => void
}

export default function CalendarLxp(props : CalendarLxpParams) {
    const [newRange, setNewRange] = useState ([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    pt.options.weekStartsOn = 0
    
    return(
        <Modal open={props.open} onClose={props.handleClose} >
            <Box className={style.containerCalendar} style={{...props.styles}} >
                <div className={style.fechar} onClick={props.handleClose}>
                    <CloseIcon />
                </div>
                
                <div className={style.calendar}>
                    <div style={{fontSize: 16}}>
                        <DefinedRange 
                            inputRanges={[]}
                            staticRanges={defaultStaticRanges}
                            ranges={newRange}
                            rangeColors={['#0645AD']}
                            onChange={ item => setNewRange([item.selection])}
                        />
                    </div>
                    <div>
                        <DateRange
                            locale={pt}
                            ranges={newRange}
                            onChange={ item => setNewRange([item.selection])}
                            months={2}
                            direction='horizontal'
                            rangeColors={['#FF4D0D']}
                            showDateDisplay={false}
                            showPreview={false}
                            weekdayDisplayFormat='EEEEE'
                            preventSnapRefocus={true}
                            
                        />
                    </div>
                </div>
                <div className={style.btnSubmit}>
                    <Button label='Aplicar' variant='primary' handleClick={ () => {
                        props.onSave([newRange[0].startDate, newRange[0].endDate])
                    }} />
                </div>
            </Box>
        </Modal>
    )
}