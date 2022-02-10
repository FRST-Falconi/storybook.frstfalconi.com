import '@shared/global.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'

interface UserCardProps {
    loading: boolean
    selected: boolean
    userImage: string
    userName: string
    userEmail: string
    userArea: string
    userPosition: string
    licenses: string[]
    editAction?: () => void,
}


/**
 * @param {UserCardProps} props
 */
export default function CalendarCard(props: UserCardProps) {
    const { t } = useTranslation()

    const [selected, setSelected] = useState(false)

    return (
        <div style={{ height: '100%' }}>
            {
                props.loading ?
                    <div className='shimmer'></div>
                    :
                    <div className='cardContentNoMargin'>
                        <div className='content'>
                            User Data
                            <div className='content'></div>
                        </div>
                        <Button className='frstButton' fullWidth>
                            <p>EDITAR</p>
                        </Button>
                    </div>
            }
        </div >
    )
}
