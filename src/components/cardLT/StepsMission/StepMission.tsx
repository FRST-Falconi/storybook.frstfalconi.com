
import React, { useEffect, useState, useLayoutEffect } from 'react'

import style from './Planet.module.css'
import Steps from './Steps'

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
   stepActive : number
   idioma? : 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
  /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */  
  style?: React.CSSProperties;
  /**
   * @prop {(step: number) => void} onSelected: Função irá retornar o step selecionado
   */
  onSelected: (step: number) => void
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
export default function MissionSteps(props: MissionStepsParams) {

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

  useEffect(() =>{
    setstepLiberado(props.stepProblem)
  },[props.stepProblem]);

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
  
  return (

    <>    
      <div style={{display:"flex", justifyContent: 'center', width: '100%', position: 'relative', padding: 20, backgroundColor: 'white'}}>
        
        {
          stepActive > 1 ?
            size[0] >= BREAKWIDTH ?
              <span onClick={() => {setStep(stepActive-1)}} className={style.missaoTitle} style={{position: 'absolute', top: 20, left: 20, cursor: 'pointer'}}>{`${"< Missão anterior"}`}</span> 
            :
              <span onClick={() => {setStep(stepActive-1)}} className={style.missaoTitle} style={{position: 'absolute', top: 20, left: 20, cursor: 'pointer'}}>{`${"< Ant."}`}</span> 
          : null
        }
                
        {
          stepActive < stepLiberado ?
            size[0] >= BREAKWIDTH ?
              <span onClick={() => {setStep(stepActive+1)}} className={style.missaoTitle} style={{position: 'absolute', top: 20, right: 20, cursor: 'pointer'}}>{`${"Próxima missão >"}`}</span>   
            :
              <span onClick={() => {setStep(stepActive+1)}} className={style.missaoTitle} style={{position: 'absolute', top: 20, right: 20, cursor: 'pointer'}}>{`${"Próx. >"}`}</span>   
          : null
        }
    
        <div style={{display:"inline-flex", marginTop: 40, justifyContent: 'center', width: '100%'}}>
          <Steps
            step={1}
            idioma={Idioma}
            status={ stepLiberado >= 1 ? stepActive === 1 ? "A" : "I" : "B"  } 
            onClick={() => {
              setStep(1)
            }}
            
          />
          <Steps
            step={2}
            idioma={Idioma}
            status={ stepLiberado >= 2 ? stepActive === 2 ? "A" : "I" : "B"  } 
            onClick={() => {
              setStep(2)
            }}
            
          />
          <Steps
            step={3}
            idioma={Idioma}
            status={ stepLiberado >= 3 ? stepActive === 3 ? "A" : "I" : "B"  } 
            onClick={() => {
              setStep(3)
            }}
            
          />
          <Steps
            step={4}
            idioma={Idioma}
            status={ stepLiberado >= 4 ? stepActive === 4 ? "A" : "I" : "B"  } 
            onClick={() => {
              setStep(4)
            }}
           
          />
          <Steps
            step={5}
            idioma={Idioma}
            status={ stepLiberado >= 5 ? stepActive === 5 ? "A" : "I" : "B"  } 
            onClick={() => {
              setStep(5)
            }}
            
          />
        </div>
      </div>
    </>
  )


}

