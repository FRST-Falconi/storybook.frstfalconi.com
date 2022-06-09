import { relative } from 'path';
import { useEffect, useState } from 'react'

import TextIcon from '../TextIcon/index'
import MessageBox from '../MessageBox/index'
import Rating from '../Rating/index'
import RatingCurtidas from '../RatingCurtidas/index'

import StepsMission from '../StepsMission/index'
import { Brain, Mail, WithoutTrail } from '../../../shared/icons'
import Tag from '../../tag/index'

import style from './BannerProblem.module.css'

///-----------------------------------------
/// Interface do Componente
interface BannerProblemParams {
  /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */  
   style?: React.CSSProperties;
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente 
 */
export default function BannerProblem(props: BannerProblemParams) {

  return (

    <>    
      <div className={style.container} style={{...props.style }}>
        <span className={style.titleProblem}>Problema</span>
        <h1 className={style.description}>Aumentar o engajamento dos alunos na plataforma</h1>
        <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative', width: '100%', borderBottom: '1px solid #CCCCCC', paddingBottom: 32}}>
          <div style={{display: 'inline-flex', width: '80%'}}>
            <div>
              <TextIcon description='Tecnologia da Informação' svg={<Brain />}/>
              <TextIcon description='robertolima@empresa.com.br' svg={<Mail />}/>
              <TextIcon description='Ainda não está vinculado a uma trilha' svg={<WithoutTrail />}/>
              <div style={{ marginTop: 16, marginBottom: 16}}>
                <Tag title='Customer Success' color={"#222"} style={{marginRight: 8, marginTop: 8}}/>
                <Tag title='Experiência do usuário' color={"#222"} style={{marginRight: 8, marginTop: 8}}/>
                <Tag title='CSAT' color={"#222"} style={{marginRight: 8, marginTop: 8}}/>
              </div>

              <MessageBox texto='Problema aprovado - 30 de Abr. 2022' tipoVisualizacao={1} style={{marginBottom: 16}}/>

              <span className={style.created}>Criado em 20 de abr. 2022 - Atualizado em 04 de mai. 2022</span>
            </div>
            <div style={{position: 'absolute', right: 0, flexFlow: 'column', justifyContent: 'flex-end', width: '20%'}}>
              <Rating 
                descricaoAvaliacao='Ótimo'
                titulo='Impacto'
                qtdeAvaliacao={19}
                nota={4.6}
                tipoVisualizacao={1}
              />
              <Rating 
                descricaoAvaliacao='Bom'
                titulo='Relevância'
                qtdeAvaliacao={21}
                nota={4.8}
                tipoVisualizacao={1}
              />            
              <RatingCurtidas 
                titulo='Curtidas'
                qtdeCurtidas={19}
                tipoBotao={2}
              />
            </div>        
          </div>
        </div>
        <h1 className={style.missaoTitle}>{`${"< Missão anterior"}`}</h1>
        <div style={{display:"flex", justifyContent: 'center', width: '100%'}}>
          <div style={{display:"inline-flex", marginTop: 20, justifyContent: 'center'}}>
            <StepsMission
              step={1}
              status="I"  
              style={{width: 100, height: 100}}
            />
            <StepsMission
              step={2}
              status="I"  
              style={{width: 100, height: 100}}
            />
            <StepsMission
              step={3}
              status="A"  
              style={{width: 100, height: 100}}
            />
            <StepsMission
              step={4}
              status="B"  
              style={{width: 100, height: 100}}
            />
            <StepsMission
              step={5}
              status="B"  
              style={{width: 100, height: 100}}
            />        
          </div>
        </div>
        <div style={{marginTop: 18, width: '100%', borderRadius: 8, border: '1px solid #BDBDBD', padding: 16, paddingLeft: 32, paddingRight: 32}}>
          <h2>Missão 1: Marte - Definição do Problema</h2>
          <h3>Tempo de uso da plataforma</h3>

          <h2>Situação atual do indicador:</h2>
          <h3>No último quarter (Q1 - 2022) os alunos usaram a plataforma em média 8 horas.</h3>

          <h2>Qual é a sua meta e o prazo final para alcançá-la?</h2>
          <h3>No próximo quarter (Q2 - 2022) os alunos usarão a plataforma em média 12 horas.</h3>

          <h2>CERTEZAS: O que eu já sei sobre esse problema?</h2>
          <h3>A presença, comprometimento e engajamento dos alunos na plataforma é algo fundamental para que os mesmos tenham um bom aproveitamento da trilha e assim, incrementando suas skills.</h3>
          
          <h2>DÚVIDAS: O que eu preciso descobrir sobre esse problema?</h2>
          <h3>O tempo ideal de engajamento é de 12 horas. É necessário investigar quais fatores influenciaram negativamente essa questão e como podemos reverter e alcançar um melhor resultado.</h3>

        </div>        

      </div>
    </>
  )


}

