import '../../shared/global.css'
import { DoubleCheck, AlertCicle } from '@shared/icons'

type iconStatus = 'warning' | 'checked'

interface TagProps {
    title: string
    color: string
    loading?: boolean
    selected: boolean
    inverted: boolean
    iconType?: iconStatus
      /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */  
   style?: React.CSSProperties;
}

export default function Tag(props: TagProps) {

    function getBG() {
        return props.selected === props.inverted ? props.color : '#fff'
    }

    function getColor() {
        return props.selected === props.inverted ? '#fff' : props.color
    }

    return (
        <>
            {
                props.loading ?
                    (
                        <div className='shimmer tag' style={props.style}>
                            <span style={{ verticalAlign: 'middle', margin: '8px' }}>Shimmer Text</span>
                        </div >
                    )
                    :
                    (
                        <div className='tag' style={{ border: `1px solid ${getColor()} `, background: getBG(), color: getColor(), ...props.style }}>
                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '24px', margin: '0 8px', gap: '8px' }}>
                                {props.title}
                                {props.iconType === 'warning' && <AlertCicle fill={getColor()} />}
                                {props.iconType === 'checked' && <DoubleCheck fill={getColor()} />}
                            </span>
                        </div >
                    )
            }
        </>
    )
}

