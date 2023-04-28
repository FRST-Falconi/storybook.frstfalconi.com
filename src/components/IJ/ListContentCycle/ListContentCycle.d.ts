import React from 'react'
import { IContentCycleProps } from './../ContentCycle/ContentCycle.d'

export type IListContentCycleProps = {
  /**
   * @prop {boolean} stepContentCompleted: Durante a criação de um novo ciclo, a fase de selecionar os conteudos ja foi concluida
   * Default: false
   */
  stepContentCompleted?: boolean
  /**
   * @prop {IContentCycleProps[]} listContent: Lista de conteudos
   */
  listContent: IContentCycleProps[]
  /**
   * @prop {(id:number)} onSelect: 
   * função para selecionar um conteudo
   * const onSelect = (id: number) => {
  const newList = listContent.map((content, index) => {
    if (index === id) {
      return {
        ...content,
        selected: !content.selected
      }
    } else {
      return content
    }
  })
  setListContent(newList)
}
   */
  onSelect: (id: number) => void
}
const
