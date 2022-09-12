///-----------------------------------------
/// Interface do Componente

declare type enumSize = 'large' | 'medium' | 'small';

export interface IRating {
  /**
   * @prop {number} nota: Valor da classificação aplicada
   */
    rating: number;
  /**
   * @prop {boolean} isVisibleNumberRating: Exibição do valor rating
   */
    isVisibleNumberRating: boolean;
  /**
   * @prop {any} handleRating: Função de manipulação da classificação
   */  
    handleRating: any;
  /**
   * @prop {enumSize} size: Tamanho das estrelas
   */  
   size: enumSize;
}
