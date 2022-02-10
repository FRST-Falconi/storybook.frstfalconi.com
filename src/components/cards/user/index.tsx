import '@shared/global.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface UserCardProps {
    loading: boolean
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
                    <div className='shimmer' style={{ minHeight: '100px' }}></div>
                    :
                    <div className='cardContent'>NotLoading</div>
            }
        </div >
    )
}
