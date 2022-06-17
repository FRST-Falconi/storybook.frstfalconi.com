import '../../../shared/global.css'
import { useState, useEffect } from 'react'
import { EditIcon, CheckboxChecked, CheckboxEmpty, WithTrail, WithoutTrail } from '@shared/icons'
import Tag from '@components/tag'
import style from './cardProblemaGestor.module.css'
import Avatar from '../../avatar/index'

import Rating from '@components/cardLT/Rating'
import RatingCurtidas from '@components/cardLT/RatingCurtidas'





interface CardProblemGestorProps {
    
    
    problemID: string
    userName: string
    userCargo: string
    userStatus: string
    userAvatar?: string
    
    tags?: string[]
    cardTitle?: string
    ratingImpacto?: any
    ratingRelevancia?: any 
    ratingCurtidas?: number

    lastUpdated?: string
}


/**
 * @param {CardProblemGestorProps} props
 */
export default function CardProblemGestor(props: CardProblemGestorProps) {
    
    const [statusName, setStatusName] = useState('Não iniciou')

    const [statusColor, setStatusColor] = useState('#757575')

    useEffect(() => {
        switch (props.userStatus) {
            case 'finalizado': setStatusColor("#158214"), setStatusName("Finalizado"); break
            case 'proxPassos': setStatusColor("#222222"), setStatusName("Próximos Passos"); break
            case 'resultadosAprendizados': setStatusColor("#AD005C"), setStatusName("Resultados e aprendizados"); break
            case 'testesRealizados': setStatusColor("#663366"), setStatusName("Testes Realizados"); break
            case 'hipoteseLevantada': setStatusColor("#F8B911"), setStatusName("Hipóteses Levantadas"); break
            case 'problemaDefinido': setStatusColor("#252BB1"), setStatusName("Problema definido"); break
            case 'naoIniciou':
            default: setStatusColor("#757575"), setStatusName("Não iniciou"); break
        }
    }, [props.userStatus])


    return (
        
        <div className={style.container} style={{border: '1px solid ', borderColor: '#CCC', backgroundColor: '#FFF', color: '#000' }}>
            <div className={style.tagStatusProblem} style={{background: statusColor, color: statusName==="Hipóteses Levantadas" ? '#222222' : '#FFF'}}>
                {statusName}
            </div>
            
            <div className={style.contentCard}>
                
                <div className={style.avatarInfoUser}>
                    <div> <Avatar size='40px' src={props.userAvatar} /> </div>
                    <div className={style.infoUser}> 
                        <span style={{fontSize:16, fontWeight:600}}>{props.userName}</span> 
                        <span style={{fontSize:14, fontWeight:400}}>{props.userCargo}</span>
                    </div>
                </div>
                
                {    
                    props.cardTitle &&
                        <div className={style.tituloCard} style={ {color: '#FF4D0D' , width: '100%'}}> 
                            <span >{props.cardTitle}</span>
                            
                        </div>
                }
                {
                    props.tags &&
                        <div className={style.tagsContainer}> 
                                
                            {
                                props.tags.map((item, index) =>(
                                    <Tag  title={item} color={'#050505'} selected={false} inverted={true} key={index} style={{fontWeight: 500, fontSize:14, marginRight: 8, marginTop: 8}} /> 
                                ))

                            }
                        </div>
                }
                {
                    props.ratingImpacto &&
                        <div className={style.avaliacao}>
                            <Rating 
                                nota={props.ratingImpacto.nota}
                                qtdeAvaliacao={props.ratingImpacto.qtdeAvaliacao} 
                                descricaoAvaliacao={props.ratingImpacto.description} 
                                titulo='Impacto' 
                                tipoVisualizacao={2} 
                                style={{margin: 0, width:120}} 
                            />
                            <Rating 
                                nota={props.ratingRelevancia.nota} 
                                qtdeAvaliacao={props.ratingRelevancia.qtdeAvaliacao} 
                                descricaoAvaliacao={props.ratingRelevancia.description} 
                                titulo='Relevância' 
                                tipoVisualizacao={2} 
                                style={{margin: 0, width:120}} 
                            />
                            <RatingCurtidas 
                                qtdeCurtidas={props.ratingCurtidas} 
                                titulo='Curtidas' 
                                tipoBotao={4} 
                                style={{margin: 0, width:90}} 
                            />

                        </div>
                }
                
                {
                    props.lastUpdated &&
                        <div style={{color: '#0645AD', fontSize: 12, fontWeight: 400, marginTop:8}}>{props.lastUpdated} </div>
                }
            </div>
            
        </div>
    )
}
