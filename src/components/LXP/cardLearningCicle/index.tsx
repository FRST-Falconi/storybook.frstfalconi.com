import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './cardLearningCicleStyle'
import { ITranlateCardLearningCicle } from './cardLearningCicle'
import * as Icons from '../../../shared/icons'
import { useState } from 'react'

export default function CardLearningCicle(props: ITranlateCardLearningCicle) {

    const [active, setActive] = useState(false)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const [activeFour, setActiveFour] = useState(false)
    const [counterRender, setCounterRender] = useState(0)

    function handleClickCheckStep1() {
        !active ? setActive(true) : setActive(false)
        setActiveTwo(false)
        setActiveThree(false)
        setActiveFour(false)
        props.handleClick()     
    }

    function handleClickCheckStep2() {
        !activeTwo ? setActiveTwo(true) : setActiveTwo(false)
        setActive(true)
        props.handleClick()     
    }

    function handleClickCheckStep3() {
        !activeThree ? setActiveThree(true) : setActiveThree(false)
        setActive(true)
        setActiveTwo(true)
        props.handleClick()     
    }

    function handleClickCheckStep4() {
        !activeFour ? setActiveFour(true) : setActiveFour(false)
        setActive(true)
        setActiveTwo(true)
        setActiveThree(true)       
        props.handleClick()     
    }
    
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container>
                <>
                    <Styles.ContainerStepNumbers1 active={active} activeTwo activeThree activeFour onClick={handleClickCheckStep1}>
                        {!active ?
                            <div>
                                <Icons.StepCicleOne />
                            </div>
                            :
                            <div>
                                <Icons.StepCheckInCicle />
                            </div>
                        }
                        <p className='step1'>{props.titleStep1 ? props.titleStep1 : 'Criar ciclo de Aprendizagem'}</p>
                    </Styles.ContainerStepNumbers1>
                </>
                <>
                    <Styles.ContainerStepNumbers2 activeTwo={activeTwo} active={active} activeThree activeFour onClick={handleClickCheckStep2}>
                        {!activeTwo ?
                            <div>
                                <Icons.StepCicleTwo fill={!active ? '#9C9C9C' : "#0645AD"} />
                            </div>
                            :
                            <div>
                                <Icons.StepCheckInCicle />
                            </div>
                        }
                        {!activeTwo ?
                            <div>
                            <p className='step2' style={{ color: !active ? '#9c9c9c' : '#000000' }}>{props.titleStep2 ? props.titleStep2 : 'Grupo de participantes'}</p>
                            <p className='txt2'style={{display: !active ? 'none' : 'block'}}>{props.txtStep2 ? props.txtStep2 : 'Crie ou selecione um grupo de participantes para relacioná-lo a um ou mais conteúdos.'}</p>
                            </div>
                            :
                            <p className='step2' style={{ color: !activeTwo ? '#000000' : '#444444' }}>{props.titleStep2 ? props.titleStep2 : 'Grupo de participantes'}</p>
                        }
                    </Styles.ContainerStepNumbers2>
                </>
                <>
                    <Styles.ContainerStepNumbers3 activeTwo={activeTwo} active activeThree={activeThree} activeFour onClick={handleClickCheckStep3}>
                        {!activeThree ?
                            <div>
                                <Icons.StepCicleThree fill={!activeTwo ? '#9C9C9C' : "#0645AD"} />
                            </div>
                            :
                            <div>
                                <Icons.StepCheckInCicle />
                            </div>
                        }
                        {!activeThree ?
                            <div>
                            <p className='step3' style={{ color: !activeTwo ? '#9c9c9c' : '#000000' }}>{props.titleStep3 ? props.titleStep3 : 'Conteúdos criados'}</p>
                            <p className='txt3' style={{ display: !activeTwo ? 'none' : 'block' }}>{props.txtStep3 ? props.txtStep3 : 'Selecione um ou mais conteúdos para o grupo selecionado ver.'}</p>
                            </div>
                            :
                            <p className='step3' style={{ color: !activeThree ? '#000000' : '#444444' }}>{props.titleStep3 ? props.titleStep3 : 'Conteúdos criados'}</p>
                        }
                    </Styles.ContainerStepNumbers3>
                </>
                <>
                    <Styles.ContainerStepNumbers4 activeTwo active activeThree={activeThree} activeFour={activeFour} onClick={handleClickCheckStep4}>
                        {!activeFour ?
                            <div>
                                <Icons.StepCicleFour fill={!activeThree ? '#9C9C9C' : "#0645AD"} />
                            </div>
                            :
                            <div>
                                <Icons.StepCheckInCicle />
                            </div>
                        }
                        {!activeFour ?
                            <div>
                            <p className='step4' style={{ color: !activeThree ? '#9c9c9c' : '#000000' }}>{props.titleStep4 ? props.titleStep4 : 'Calendário'}</p>
                            <p className='txt4' style={{ display: !activeThree ? 'none' : 'block' }}>{props.txtStep4 ? props.txtStep4 : 'Selecione a data de início destes conteúdos para este grupo.'}</p>
                            </div>                           
                            :
                            <p className='step4' style={{ color: !activeThree ? '#000000' : '#444444' }}>{props.titleStep4 ? props.titleStep4 : 'Calendário'}</p>
                        }
                    </Styles.ContainerStepNumbers4>
                </>
            </Styles.Container>
        </ThemeProvider>
    );
}