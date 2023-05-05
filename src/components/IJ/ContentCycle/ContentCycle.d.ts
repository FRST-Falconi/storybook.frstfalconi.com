import React from 'react'

export type IContentCycleProps = {
  /**
   * @prop {string} id: Identificação
   */
  id: string
  /**
   * @prop {string} title: Titulo do conteudo
   */
  title: string
  /**
   * @prop {string} description: Descrição do conteudo
   */
  description: string
  /**
   * @prop {boolean} selected: Se o componente esta selecionado ou não
   */
  selected: boolean
  /**
   * @prop {(value?: boolean)=>void } onSelect: Func para selecionar o componente
   */
  onSelect: (value?: boolean) => void
  /**
   * @prop {string[]} listSkils: Lista de competencias relacionadas ao conteudo
   */
  listSkils?: string[]
  /**
   * @prop {string} urlPhoto: Foto/Banner de identificação do conteudo
   */
  urlPhoto?: string
  /**
   * @prop {string} urlVideo: link do teaser
   */
  urlVideo?: string
  /**
   * @prop {titleVideo} urlVideo: url do teaser
   */
  titleVideo?: string
  /**
   * @prop {boolean} started: Validação para saber se o aluno ja começou a consguir o conteudo
   */
  started?: boolean
  /**
   * @prop {number} progress: titulo do teaser
   */
  progress?: number
  /**
   * @prop {boolean} stepContent: Validação para saber se o passo de add conteudos ao ciclo foi finalizado
   */
  stepContent?: boolean
  /**
   * @prop {'video' | 'text' | 'podcast'} typeContent: Tipo do conteúdo Video, text ou podcast
   */
  typeContent: 'video' | 'text' | 'podcast'
}
