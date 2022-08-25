import '../../../shared/global.css'
import { useState, useEffect } from 'react'
import { AddIcon, EditIcon, OpenedEye } from '@shared/icons'
import style from './cardDefinicaoProblema.module.css'
import Button from '@components/buttons'

interface CardDefinicaoProblemaProps {

    problemId: string
    problemStatus: string
    backgroundImage?: string

    cardTitle?: string
    cardDescription?: string

    /**
    * @prop {number} typeButton: Tipos de botão (1 - novo problema, 2 - editar problema)
    */
    typeButton: number

    handleClick: (problemId: string) => void
    /**
     * @prop {event} event: Evento de click do visualizar problema
    */
    handleToView: () => void

}


/**
 * @param {CardDefinicaoProblemaProps} props
 */
export default function CardDefinicaoProblema(props: CardDefinicaoProblemaProps) {

    const [statusName, setStatusName] = useState('Não iniciou')

    const [statusColor, setStatusColor] = useState('#757575')

    useEffect(() => {
        switch (props.problemStatus) {
            case 'finalizado': setStatusColor("#158214"), setStatusName("Finalizado"); break
            case 'proxPassos': setStatusColor("#222222"), setStatusName("Próximos passos"); break
            case 'resultadosAprendizados': setStatusColor("#AD005C"), setStatusName("Resultados e aprendizados"); break
            case 'testesRealizados': setStatusColor("#663366"), setStatusName("Testes realizados"); break
            case 'hipoteseLevantada': setStatusColor("#F8B911"), setStatusName("Hipóteses levantadas"); break
            case 'problemaDefinido': setStatusColor("#252BB1"), setStatusName("Problema definido"); break
            case 'problemaCriado':
            default: setStatusColor("#757575"), setStatusName("Problema criado"); break
        }
    }, [props.problemStatus])


    return (

        <div className={style.container} >
            {
                props.typeButton !== 1 &&
                    <div className={style.tagStatusProblem} style={{background: statusColor, color: statusName==="Hipóteses Levantadas" ? '#222222' : '#FFF'}}>
                        {statusName}
                    </div>
            }

            <div className={style.headerContainer}>
                <img src={'https://api-motor.s3.amazonaws.com/background-prezi.png'} />
            </div>
            <div className={style.descriptionContainer}>
                <span style={{fontSize: 16, fontWeight: 500}}> {props.cardTitle}</span>
                <span style={{fontSize: 16, fontWeight: 400, marginTop: 16}}> {props.cardDescription}</span>

            </div>
            <div className={`${style.footerContainer} ${props.typeButton === 2 && style.footerContainerType2}`}>
                {props.typeButton === 2 && <Button variant='link' label="Visualizar" startIcon={<OpenedEye />} handleClick={() => props.handleToView()} /> }
                <Button variant='link' label={props.typeButton === 1 ? 'Definir novo problema' : 'Continuar'} startIcon={props.typeButton === 1 ? <AddIcon /> : <EditIcon/>} handleClick={() => props.handleClick(props.problemId)} />
            </div>

        </div>
    )
}
