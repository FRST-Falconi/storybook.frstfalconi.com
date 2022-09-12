export interface IStepperItem {
  /**
    * @prop {string} title: Texto em destaque no passo
  */
  title?: string
  /**
    *  @prop {string} subtitle: Texto em abaixo do texto em destaque no passo
  */
  subtitle?: string
  /**
    *  @prop {string} buttonText: Texto personalizado para o botão de ação
  */
  buttonText?: string
  /**
    *  @prop {boolean} active: Seta o item como destaque, exibindo o subtitulo e o botão de ação.
  */
  active?: boolean
  /**
    *  @prop {React.MouseEvent} onClick: Ação do botão
  */
  onClick?: (e: React.MouseEvent) => void
}

export interface IStepper {
  /**
    *  @prop {JSX.Element} children: Elementos filhos do componente(Devem ser do tipo ProgressStepperItem)
  */
  children?: any
}