import '../../../shared/global.css'
import { useState, useEffect, useLayoutEffect } from 'react'
import { EditIcon, CheckboxChecked, CheckboxEmpty, WithTrail, WithoutTrail } from '@shared/icons'
import Tag from '@components/tag'
import style from './cardProblem.module.css'
import Avatar from '../../avatar/index'
import RocketButton from '@components/cardLT/RocketButton'
import Rating from '@components/cardLT/Rating'
import MessageBox from '@components/cardLT/MessageBox'
import TextIcon from '@components/cardLT/TextIcon'
import Button from '@components/buttons'



interface CardProblemProps {
    
    selected: boolean
    isButtonVerMais: boolean
    handleSelect?: (id: string) => void
    onClick?: (problemID: string) => void
    problemID: string
    userName: string
    userCargo: string
    /**
        * @prop {string} problemStatus: Qual o status do problema: (finalizado, proxPassos, resultadosAprendizados, testesRealizados, hipoteseLevantada, problemaDefinido, problemaCriado)
    */
    problemStatus: string
    userAvatar?: string
    
    tags?: string[]
    cardTitle?: string
    ratingImpacto?: any
    ratingRelevancia?: any 
    /**
        * @prop {string} statusProblema: Qual o status do problema (aprovado, revisar ou aguardando)
    */
    statusProblema?: string
    trilhaVinculada?: string
    lastUpdated?: string
}


/**
 * @param {CardProblemProps} props
 */
export default function CardProblem(props: CardProblemProps) {
    
    const [statusName, setStatusName] = useState('Não iniciou')
    const [selected, setSelected] = useState(props.selected)


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

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected])

    // Função para pegar o width da tela
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    
    const BREAKWIDTH = 450;
    
    return (
        
        <div className={style.container} style={{border: '1px solid ', borderColor: statusColor, backgroundColor: selected ? '#FF4D0D' : '#FFF', color: selected ? '#FFF' : '#000' }}>
            <div className={style.tagStatusProblem} style={{background: statusColor, color: statusName==="Hipóteses levantadas" ? '#222222' : '#FFF'}}>
                {statusName}
            </div>
            
            <div className={style.checkBox} onClick={()=>
                {
                    setSelected(!selected); 
                    props.handleSelect(props.problemID)
                }}>

                { selected ? <CheckboxChecked /> : <CheckboxEmpty />}
                
            </div>
            <div className={style.contentCard}  onClick={()=> {props.onClick(props.problemID) }} >
                
                <div className={style.avatarInfoUser}>
                    <div> <Avatar size='40px' src={props.userAvatar} /> </div>
                    <div className={style.infoUser}> 
                        <span style={{fontSize:16, fontWeight:600}}>{props.userName}</span> 
                        <span style={{fontSize:14, fontWeight:400}}>{props.userCargo}</span>
                    </div>
                </div>
                
                {    
                    props.cardTitle &&
                        <div className={style.tituloCard} style={ {color: selected ? '#FFF' : '#FF4D0D' , width: '100%'}}> 
                            <span >{props.cardTitle}</span>
                        </div>
                }
                {
                    props.tags &&
                        <div className={style.tagsContainer}> 
                                
                            {
                                props.tags.map((item, index) =>(
                                    item &&
                                    <Tag  title={item} color={'#050505'} selected={false} inverted={true} key={index} style={{fontWeight: 500, fontSize:14, marginRight: 8, marginTop: 8}} /> 
                                ))

                            }
                        </div>
                }
                { size[0] > BREAKWIDTH &&
                    props.ratingImpacto &&
                        <div className={style.avaliacao}>
                            <Rating nota={props.ratingImpacto.nota} qtdeAvaliacao={props.ratingImpacto.qtdeAvaliacao} descricaoAvaliacao={props.ratingImpacto.description} titulo='Impacto' tipoVisualizacao={selected ? 3 : 2} />
                            <Rating nota={props.ratingRelevancia.nota} qtdeAvaliacao={props.ratingRelevancia.qtdeAvaliacao} descricaoAvaliacao={props.ratingRelevancia.description} titulo='Relevância' tipoVisualizacao={selected ? 3 : 2} />

                        </div>
                }
                {
                    props.statusProblema ?
                        props.statusProblema === 'aprovado' ?
                            <MessageBox tipoVisualizacao={1} texto='Problema aprovado' style={{minWidth:200, width:'90%'}} />
                        : 
                        props.statusProblema === 'revisar' ?
                            <MessageBox tipoVisualizacao={3} texto='Revisar problema proposto' style={{minWidth:200, width:'90%'}} />
                        :
                        <MessageBox tipoVisualizacao={2} texto='Aguardando aprovação' style={{minWidth:200, width:'90%'}} />
                    :
                    <></>
                }
                
                {
                    statusName !== 'Problema criado' ?
                        props.trilhaVinculada ?
                            <TextIcon description={`Vinculado à trilha ${props.trilhaVinculada}`} svg={<WithTrail />} style={{fontSize: 12, fontWeight: 400, marginTop:8 }}/>
                        :
                        <TextIcon description='Ainda não está vinculado a uma trilha' svg={<WithoutTrail />} style={{fontSize: 12, fontWeight: 400, marginTop:8 }}/>
                    :
                    <></>
                }
                {
                    props.lastUpdated &&
                        <div style={{color: '#0645AD', fontSize: 12, fontWeight: 400, marginTop:8}}>{props.lastUpdated} </div>
                }

                {
                    props.isButtonVerMais &&
                        <div className={style.buttonVerMais} >
                            <Button variant='link' label='Ver mais' handleClick={() => props.onClick(props.problemID)} />

                        </div>
                }
                
            </div>
            
        </div>
    )
}
