import '../../shared/global.css'

interface TagProps {
    title: string
    color: string
    loading?: boolean
    selected: boolean
    inverted: boolean
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
                        <div className='shimmer tag'>
                            <span style={{ verticalAlign: 'middle', margin: '8px' }}>Shimmer Text</span>
                        </div >
                    )
                    :
                    (
                        <div className='tag' style={{ border: `1px solid ${getColor()} `, background: getBG(), color: getColor() }}>
                            <span style={{ verticalAlign: 'middle', margin: '8px' }}>{props.title}</span>
                        </div >
                    )
            }
        </>
    )
}
