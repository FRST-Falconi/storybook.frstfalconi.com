import '@shared/global.css'

interface TagProps {
    selected: boolean
    inverted: boolean
    title: string
    color: string
}

export default function Tag(props: TagProps) {

    function getBG() {
        return props.selected === props.inverted ? props.color : '#fff'
        // if (!props.selected && !props.inverted) return props.color
        // if (!props.selected && props.inverted) return '#fff'
        // if (props.selected && !props.inverted) return '#fff'
        // if (props.selected && props.inverted) return props.color
    }

    function getColor() {
        return props.selected === props.inverted ? '#fff' : props.color
        // if (!props.selected && !props.inverted) return '#fff'
        // if (!props.selected && props.inverted) return props.color
        // if (props.selected && !props.inverted) return props.color
        // if (props.selected && props.inverted) return '#fff'
    }

    return (
        <div className='tag' style={{ border: `1px solid ${getColor()}`, background: getBG(), color: getColor() }}>
            <span style={{ verticalAlign: 'middle' }}>{props.title}</span>
        </div >
    )
}
