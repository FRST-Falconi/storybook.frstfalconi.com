
import React, {
  useEffect,
  useState,
  useLayoutEffect,
  CSSProperties
} from 'react'

import style from './Planet.module.css'
import Steps from './Steps'
import { Button } from '../../../../index'
import { FowardArrow } from '../../../shared/icons'

///-----------------------------------------
/// Interface do Componente
interface MissionStepsParams {
  /**
   * @prop {number} step: Step (Marte, Júpter, Saturno, Urano, Netuno)
   */
  stepProblem: number;
  /**
   * @prop {number} stepActive: 
   */
  stepActive: number
  idioma?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
  /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */
  style?: React.CSSProperties;
  /**
   * @prop {(step: number) => void} onSelected: Função irá retornar o step selecionado
   */
  onSelected: (step: number) => void
  /**
  * @prop {() => void} onClickContinue: Função executada no botão de continuar desafio
  */
  onClickContinue?: () => void
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
export default function MissionSteps(props: MissionStepsParams) {

  const traducaoPTBR = {
    next: "Ver missão seguinte >",
    nextShort: "Próx. >",
    previous: "< Ver missão anterior",
    previousShort: "< Ant.",
    continueChallenge: "Continuar desafio"
  }

  const traducaoES = {
    next: "Ver misión siguiente >",
    nextShort: "Próx. >",
    previous: "< Ver misión anterior",
    previousShort: "< Ant.",
    continueChallenge: "Continuar desafío"
  }

  const traducaoENUS = {
    next: "View next mission >",
    nextShort: "Next >",
    previous: "< View previous mission",
    previousShort: "< Previous",
    continueChallenge: "Continue challenge"
  }

  const traducaoPT = {
    next: "Ver missão seguinte >",
    nextShort: "Próx. >",
    previous: "< Ver missão anterior",
    previousShort: "< Ant.",
    continueChallenge: "Continuar desafio"
  }

  const mapTraducao = new Map()  
    mapTraducao.set("pt-BR", traducaoPTBR )
    mapTraducao.set("es", traducaoES)
    mapTraducao.set("en-US", traducaoENUS)
    mapTraducao.set("pt-PT", traducaoPT)

  const [stepLiberado, setstepLiberado] = useState(props.stepProblem);
  const [stepActive, setStepActive] = useState(props.stepActive);
  const [Idioma, setIdioma] = useState(props.idioma ? props.idioma : 'pt-BR');

  const setStep = (step: number) => {
    setStepActive(step)
    props.onSelected(step)
  }

  useEffect(() => {
    setIdioma(props.idioma ? props.idioma : 'pt-BR')
  }, [props.idioma])

  useEffect(() => {
    setstepLiberado(props.stepProblem)
  }, [props.stepProblem]);

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
  const BREAKWIDTH = 475

  const leftButtonStyle: CSSProperties = {
    position: 'absolute',
    top: 20,
    left: 0,
    cursor: 'pointer'
  }

  const rightButtonStyle = {
    ...leftButtonStyle,
    right: 0,
    left: 'auto'
  }

  return (

    <>
      <div style={{ display: "flex", justifyContent: 'center', width: '100%', position: 'relative', padding: 20, backgroundColor: 'white', marginTop: '10px' }}>

        {
          stepActive > 1 ?
            size[0] >= BREAKWIDTH ?
              <span onClick={() => { setStep(stepActive - 1) }} className={style.missaoTitle} style={leftButtonStyle}>{`${mapTraducao.get(Idioma).previous}`}</span>
              :
              <span onClick={() => { setStep(stepActive - 1) }} className={style.missaoTitle} style={leftButtonStyle}>{`${mapTraducao.get(Idioma).previousShort}`}</span>
            : null
        }

        {
          stepActive < stepLiberado ?
            size[0] >= BREAKWIDTH ?
              <span onClick={() => { setStep(stepActive + 1) }} className={style.missaoTitle} style={rightButtonStyle}>{`${mapTraducao.get(Idioma).next}`}</span>
              :
              <span onClick={() => { setStep(stepActive + 1) }} className={style.missaoTitle} style={rightButtonStyle}>{`${mapTraducao.get(Idioma).nextShort}`}</span>
            : props.stepProblem < 5 &&
                props.onClickContinue &&
                  <span
                    className={style.missaoTitle}
                    style={{ ...rightButtonStyle, marginTop: '-10px' }}
                  >
                    <Button
                      handleClick={() => props.onClickContinue()}
                      label={mapTraducao.get(Idioma).continueChallenge}
                      variant="primary"
                      endIcon={<FowardArrow fill="#fff" />}
                      style={{ height: '40px'}}
                    />
                  </span>
        }

        <div style={{ display: "inline-flex", marginTop: 40, justifyContent: 'center', width: '100%' }}>
          <Steps
            step={1}
            idioma={Idioma}
            status={stepLiberado >= 1 ? stepActive === 1 ? "A" : "I" : "B"}
            onClick={() => {
              setStep(1)
            }}

          />
          <Steps
            step={2}
            idioma={Idioma}
            status={stepLiberado >= 2 ? stepActive === 2 ? "A" : "I" : "B"}
            onClick={() => {
              setStep(2)
            }}

          />
          <Steps
            step={3}
            idioma={Idioma}
            status={stepLiberado >= 3 ? stepActive === 3 ? "A" : "I" : "B"}
            onClick={() => {
              setStep(3)
            }}

          />
          <Steps
            step={4}
            idioma={Idioma}
            status={stepLiberado >= 4 ? stepActive === 4 ? "A" : "I" : "B"}
            onClick={() => {
              setStep(4)
            }}

          />
          <Steps
            step={5}
            idioma={Idioma}
            status={stepLiberado >= 5 ? stepActive === 5 ? "A" : "I" : "B"}
            onClick={() => {
              setStep(5)
            }}

          />
        </div>
      </div>
    </>
  )


}

