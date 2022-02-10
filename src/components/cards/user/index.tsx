import '@shared/global.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { EditIcon } from '@shared/icons'
interface UserCardProps {
    loading: boolean
    selected: boolean
    handleSelect: (id: string) => void
    userID: string
    userName: string
    userEmail: string
    userStatus: string
    userAvatar?: string
    userArea?: string
    userPosition?: string
    licenses: string[]
    editAction?: () => void
}


/**
 * @param {UserCardProps} props
 */
export default function CalendarCard(props: UserCardProps) {
    const { t } = useTranslation()

    const [selected, setSelected] = useState(props.selected)

    const setClass = () => {
        setSelected(!selected)
        props.handleSelect(props.userID)
    }
    const [statusColor, setStatusColor] = useState('#A6A6A6')

    useEffect(() => {
        switch (props.userStatus) {
            case 'complete': setStatusColor("#2CA92A"); break
            case 'enrolled': setStatusColor("#222222"); break
            case 'defined': setStatusColor("#FFD600"); break
            case 'error': setStatusColor("#FF0000"); break
            default: setStatusColor("#A6A6A6"); break
        }
    }, [props.userStatus])

    return (
        <div style={{ height: '100%' }}>
            {
                props.loading ?
                    <div className='shimmer'></div>
                    :
                    <div onClick={setClass} className='cardContentNoMargin' style={{ border: `1px solid ${statusColor}`, background: selected ? "#ff4d0d" : "#fff" }}>
                        <div className='cardTopRightConner' style={{ background: statusColor, padding: '4px' }}>
                            {props.userStatus}
                        </div>

                        <div className='content' >
                            <div className='centeredVertically'>
                                <input type='checkbox' checked={selected}></input>
                                <img src={props.userAvatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"} alt="Avatar" className="avatar" />
                                <div style={{ display: 'inline-grid', paddingLeft: '4px' }}>
                                    <div>Name: <span>{props.userName}</span></div>
                                    <div>Email: <span>{props.userEmail}</span></div>
                                </div>
                            </div>
                            <div className='content'>
                                <div>Area: <span>{props.userArea}</span></div>
                                <div>Cargo: <span>{props.userPosition}</span></div>
                                <div>Tags Tags Tags</div>
                            </div>

                        </div>
                        <Button onClick={props.editAction} className='frstButton blue' fullWidth>
                            <EditIcon /><span style={{ paddingLeft: '8px' }}>Editar</span>
                        </Button>
                    </div>
            }
        </div >
    )
}
