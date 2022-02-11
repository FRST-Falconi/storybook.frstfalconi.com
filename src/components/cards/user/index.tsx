import '../../../shared/global.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Tooltip } from '@mui/material'
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
            case 'incomplete':
            default: setStatusColor("#A6A6A6"); break
        }
    }, [props.userStatus])

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected])

    return (
        <div style={{ maxWidth: '381px', minHeight: '280px' }}>
            {
                props.loading ?
                    <div className='cardContentNoMargin' >
                        <div className='shimmer cardTopRightConner' style={{ color: statusColor, background: statusColor, padding: '4px' }}>
                            Status
                        </div>

                        <div className='content' >
                            <div className='centeredVertically' style={{ paddingBottom: '16px' }}>
                                {selected ? <CheckboxChecked /> : <CheckboxEmpty />}
                                <div style={{ marginLeft: '16px', marginRight: '16px' }} className="avatar shimmer" />
                                <div style={{ display: 'inline-grid' }}>
                                    <div className="shimmer">ShimmerName</div>
                                    <div className="shimmer">ShimmerEmail</div>
                                </div>
                            </div>
                            <div className='innerContent' style={{ paddingBottom: '0px !important' }}>
                                <div className="shimmer">Area: </div>
                                <div className="shimmer">Cargo:</div>
                                <Tag title='Product Tag' color='#000' loading={true} selected={false} inverted={false} />
                                <Tag title='Product Tag' color='#000' loading={true} selected={false} inverted={false} />
                            </div>
                        </div>
                        <Button className='shimmer frstButton blue' fullWidth>
                        </Button>
                    </div>
                    :
                    <div onClick={setClass} className='cardContentNoMargin' style={{ color: selected ? '#fff' : '#000', border: `1px solid ${statusColor}`, background: selected ? "#ff4d0d" : "#fff" }}>
                        <div className='cardTopRightConner' style={{ color: '#fff', background: statusColor, padding: '4px' }}>
                            {t(`user.card.status.${props.userStatus}`)}
                        </div>

                        <div className='content' >
                            <div className='centeredVertically' style={{ paddingBottom: '16px' }}>
                                <div style={{ paddingRight: '8px' }}> {selected ? <CheckboxChecked /> : <CheckboxEmpty />}</div>
                                <img src={props.userAvatar || "https://certificates-mentor.s3.amazonaws.com/frst-avatar-default.png"} alt="Avatar" className="avatar" />
                                <div style={{ paddingLeft: '8px', display: 'grid' }}>
                                    <p style={{ fontSize: '24px', fontWeight: '700', paddingBottom: '8px' }}>{props.userName}</p>
                                    <Tooltip title={[props.userEmail]}>
                                        <p style={{ fontSize: '16px', fontWeight: '700', color: selected ? "#F3D224" : '#AEB0B3' }} className='ellipsis'>{props.userEmail}</p>
                                    </Tooltip>

                                </div>
                            </div>
                            <div className='innerContent'>
                                <div style={{ display: 'block' }}>
                                    {props.userArea && <p style={{ fontSize: '16px', fontWeight: '700', paddingBottom: '8px' }}>{t('user.card.area')}: {props.userArea}</p>}
                                    {props.userPosition && <p style={{ fontSize: '16px', fontWeight: '400', paddingBottom: '8px' }}>{t('user.card.position')}: {props.userPosition}</p>}
                                </div>

                                {
                                    props.licenses.length > 0 ?
                                        props.licenses.map((p) => {
                                            return <Tag title={p} color='#000' selected={selected} inverted={false} />
                                        })
                                        :
                                        <Tag title={t('user.card.noProduct')} color='#FF0000' selected={selected} inverted />
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
