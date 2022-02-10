require('@shared/global.css')

export default function EmptyCard(props) {

    return (
        <div className='cardContent' style={{ height: '100%' }}>
            {props.children}
        </div >
    )
}
