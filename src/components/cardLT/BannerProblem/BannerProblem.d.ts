import React from "react"

///-----------------------------------------
/// Interface do Componente
interface IBannerProblemParams {
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties

    company?: string,
    topHeaderTagColor?: string
    topHeaderTagBgColor?: string
    topHeaderTagText?: string

    problema: string
    cargo: string
    nome: string
    avatar: string
    area: string
    email: string
    tags?: string[]
    typeMessagem: number
    message: string
    dataCriacao: string
    qtdeAvaliacao: number
    notaAvaliacao: number
    descriptionImpacto: string
    qtdeRelevancia: number
    notaRelevancia: number
    descriptionRelevancia: string
    curtidas?: number
    stepProblem: number
    stepActive: number
    isVerified?: boolean
    verifiedTooltipContent?: any
    onSelectedStep: (step: number) => void
    onClickSave:([]) => void
    /**
     * @prop {object} trilhaData: A listagem de Trilhas no Select [{label: 'trilha1', value: 'id1'}]
     */
    trilhaData?: any
    /**
     * @prop {string} trilha: Descrição da Trilha Selecionada
     */
    trilha: string
    /**
     * @prop {string} trilhaId: Id da Trilha Selecionada, que será usado para selecionar o select quando for editar
     */
    trilhaId?: any
    isEditable?: boolean
    isVisibleEditTrail?: boolean
    isVisibleEditTags?: boolean
    /**
     * @prop {object} tagData: A listagem de Tags no Select [{label: 'TAG1', value: 'id1'}]
     */
    tagData?: any
    children: React.ReactNode
    showButtonInvite?: boolean
    onClickMessage: () => void
    showButtonViews?: boolean
    onClickViewsBtn: () => void

    /**
    * @prop {() => void} onClickContinue: Função executada no botão de continuar desafio
    */
    onClickContinue?: () => void
  }

  ///-----------------------------------------
  /// Componente



  /**
   *
   * @componente
   */

export interface IBannerProgressTranslate  extends IBannerProblemParams{
    textTrailLabel ?: string
    textTitleProblem?: string
    textButtonLinkEdit?: string
    textButtonLinkEditSave?: string
    placeholderSelectTrail?: string
    textIconDescription?: string
    textContentInput?: string
    placeholderSelectTag?: string
    missionIdioma?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
    ratingTitleImpact?: string
    ratingTitleRelevance?: string
    ratingTitleLikes?: string
    ratingLikesEvaluation?: string
    ratingLikesDescription?: string
    ratingNavegationAnt?: string
    textGoalInviteBtn?: string
    textGoalViewsBtn?: string
}
