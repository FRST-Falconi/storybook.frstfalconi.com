import '@shared/global.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { EditIcon, CheckboxChecked, CheckboxEmpty } from '@shared/icons'
import Tag from '@components/tag'

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

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected])

    return (
        <div style={{ height: '100%', maxWidth: '381px' }}>
            {
                props.loading ?
                    <div className='cardContentNoMargin' >
                        <div className='shimmer cardTopRightConner' style={{ color: statusColor, background: statusColor, padding: '4px' }}>
                            Status
                        </div>

                        <div className='content' >
                            <div className='centeredVertically'>
                                {selected ? <CheckboxChecked /> : <CheckboxEmpty />}
                                <div style={{ marginLeft: '16px', marginRight: '16px' }} className="avatar shimmer" />
                                <div style={{ display: 'inline-grid' }}>
                                    <div className="shimmer">Name: Shimmer Name</div>
                                    <br />
                                    <div className="shimmer">Email: Shimmer@Email</div>
                                </div>
                            </div>
                            <div className='content' style={{ paddingBottom: '0px !important' }}>
                                <div className="shimmer">Area: </div>
                                <br />
                                <div className="shimmer">Cargo:</div>
                                <br />
                                <Tag title='Product Tag' color='#000' loading={true} />
                                <Tag title='Product Tag' color='#000' loading={true} />
                            </div>
                        </div>
                        <Button className='shimmer frstButton blue' fullWidth>
                        </Button>
                    </div>
                    :
                    <div onClick={setClass} className='cardContentNoMargin' style={{ color: selected ? '#fff' : '#000', border: `1px solid ${statusColor}`, background: selected ? "#ff4d0d" : "#fff" }}>
                        <div className='cardTopRightConner' style={{ color: '#fff', background: statusColor, padding: '4px' }}>
                            {props.userStatus}
                        </div>

                        <div className='content' >
                            <div className='centeredVertically'>
                                {selected ? <CheckboxChecked /> : <CheckboxEmpty />}
                                <img style={{ marginLeft: '16px', marginRight: '16px' }} src={props.userAvatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"} alt="Avatar" className="avatar" />
                                <div style={{ display: 'inline-grid' }}>
                                    <div>Name: <span>{props.userName}</span></div>
                                    <div>Email: <span>{props.userEmail}</span></div>
                                </div>
                            </div>
                            <div className='innerContent'>
                                <div>Area: <span>{props.userArea}</span></div>
                                <div>Cargo: <span>{props.userPosition}</span></div>
                                {
                                    props.licenses.length > 0 ?
                                        <Tag title='Product Tag' color='#000' />
                                        :
                                        <Tag title='Product Tag' color='#000' />
                                }
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
