import React from "react"

///-----------------------------------------
/// Interface do Componente
interface IStepParams {
    /**
     * @prop {number} step: Step (Marte, Júpter, Saturno, Urano, Netuno)
     */
     step: number
    /**
     * @prop {string} status: Status Planeta (B- Bloqueado, I- Inativo e A- Ativo)
     */
     status : string
     idioma? : 'pt-BR' | 'pt-PT' | 'en-US' | 'es'   
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */  
    style?: React.CSSProperties
    /**
     * @prop {() => void} onClick: Função que será executada quando houver o click do botão
     */
    onClick?: () => void
  }
  
  ///-----------------------------------------
  /// Componente
  
  
  
  /**
   * 
   * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
   */
export interface IStepsTranslate  extends IStepParams{

    ratingNavegationAnt?: string
    ratingNavegationMissaoAnterior?: string
    ratingNavegationProximaMissao?: string
    ratingNavegationProx?: string
}