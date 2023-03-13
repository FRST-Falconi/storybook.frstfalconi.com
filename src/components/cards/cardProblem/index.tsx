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
    language: string,
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


const translate = {
    "pt-BR": {
        'notStarted': "Não iniciou",
        'finished': "Finalizado",
        'nextSteps': "Próximos passos",
        'resultsAndLearnings': "Resultados e aprendizados",
        'testsPerformed': "Testes realizados",
        'hypothesesTaised': "Hipóteses levantadas",
        'problemDefined': "Problema definido",
        'problemCreated': "Problema criado",

        'evaluation': 'avaliação',
        'impact': 'Impacto',
        'relevance': 'Relevância',

        'problemApproved': 'Problema aprovado',
        'reviewProblem': 'Revisar problema proposto',
        'waitingApproval': 'Aguardando aprovação',

        'linkedTrail':'Vinculado à trilha',
        'notLinkedTrail': 'Ainda não está vinculado a uma trilha',

        'viewMore': 'Ver mais',
    },
    'en-US': {
        'notStarted': 'Not started',
        'finished': "Finished",
        'nextSteps': "Next steps",
        'resultsAndLearnings': "Results and learnings",
        'testsPerformed': "Tests performed",
        'hypothesesTaised': "Hypotheses raised",
        'problemDefined': "Problem defined",
        'problemCreated': "Problem created",

        'evaluation': 'evaluation(s)',
        'impact': 'Impact',
        'relevance': 'Relevance',

        'problemApproved': 'Problem approved',
        'reviewProblem': 'Review proposed problem',
        'waitingApproval': 'Waiting for approval',

        'linkedTrail':'Linked to trail',
        'notLinkedTrail': 'Not yet linked to a trail',

        'viewMore': 'View more',
    },
    "es-ES": {
        'notStarted': "No empezado",
        'finished': "Acabado",
        'nextSteps': "Próximos pasos",
        'resultsAndLearnings': "Resultados y aprendizajes",
        'testsPerformed': "Pruebas completadas",
        'hypothesesTaised': "Hipótesis planteadas",
        'problemDefined': "Problema definido",
        'problemCreated': "Problema creado",

        'evaluation': 'evaluación',
        'impact': 'Impacto',
        'relevance': 'Relevancia',

        'problemApproved': 'Problema aprobado',
        'reviewProblem': 'Revisar el problema propuesto',
        'waitingApproval': 'Aguardando aprobación',

        'linkedTrail':'Vinculado a sendero',
        'notLinkedTrail': 'Aún no vinculado a un sendero',
        'viewMore': 'Ver más',
    }
}

const isValidLanguage = (lang) => {
    return lang == 'en-US' || lang == 'pt-BR' || lang == "es-ES";
}

/**
 * @param {CardProblemProps} props
 */
export default function CardProblem(props: CardProblemProps) {
    const [languageSlected, onChangeLanguage] = useState(isValidLanguage(props.language) ? props.language : 'pt-BR')

    useEffect(() => {
        onChangeLanguage(isValidLanguage(props.language) ? props.language : 'pt-BR')
    }, [props.language])

    const [statusName, setStatusName] = useState(translate[languageSlected]['notStarted'])
    const [selected, setSelected] = useState(props.selected)

    

    const [statusColor, setStatusColor] = useState('#757575')

    useEffect(() => {
        switch (props.problemStatus) {
            case 'finalizado': setStatusColor("#158214"), setStatusName(translate[languageSlected]['finished']); break
            case 'proxPassos': setStatusColor("#222222"), setStatusName(translate[languageSlected]['nextSteps']); break
            case 'resultadosAprendizados': setStatusColor("#AD005C"), setStatusName(translate[languageSlected]['resultsAndLearnings']); break
            case 'testesRealizados': setStatusColor("#663366"), setStatusName(translate[languageSlected]['testsPerformed']); break
            case 'hipoteseLevantada': setStatusColor("#F8B911"), setStatusName(translate[languageSlected]['hypothesesTaised']); break
            case 'problemaDefinido': setStatusColor("#252BB1"), setStatusName(translate[languageSlected]['problemDefined']); break
            case 'problemaCriado':
            default: setStatusColor("#757575"), setStatusName(translate[languageSlected]['problemCreated']); break
        }
    }, [props.problemStatus, languageSlected])

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
            <div className={style.tagStatusProblem} style={{background: statusColor, color: statusName===translate[languageSlected]['hypothesesTaised'] ? '#222222' : '#FFF'}}>
                {statusName}
            </div>
            
            <div className={style.checkBox} onClick={()=>
                {
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
                            <Rating nomeAvaliacao={translate[languageSlected]['evaluation']} nota={props.ratingImpacto.nota} qtdeAvaliacao={props.ratingImpacto.qtdeAvaliacao} descricaoAvaliacao={props.ratingImpacto.description} titulo={translate[languageSlected]['impact']} tipoVisualizacao={selected ? 3 : 2} />
                            <Rating  nomeAvaliacao={translate[languageSlected]['evaluation']} nota={props.ratingRelevancia.nota} qtdeAvaliacao={props.ratingRelevancia.qtdeAvaliacao} descricaoAvaliacao={props.ratingRelevancia.description} titulo={translate[languageSlected]['relevance']} tipoVisualizacao={selected ? 3 : 2} />
                        </div>
                }
                {
                    statusName !== translate[languageSlected][6] ?
                        props.trilhaVinculada ?
                            <TextIcon description={`${translate[languageSlected]['linkedTrail']} ${props.trilhaVinculada}`} svg={<WithTrail />} style={{fontSize: 12, fontWeight: 400, marginTop:8 }}/>
                        :
                        <TextIcon description={translate[languageSlected]['notLinkedTrail']} svg={<WithoutTrail />} style={{fontSize: 12, fontWeight: 400, marginTop:8 }}/>
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
                            <Button variant='link' label={translate[languageSlected]['viewMore']} handleClick={() => props.onClick(props.problemID)} />

                        </div>
                }
                
            </div>
            
        </div>
    )
}
