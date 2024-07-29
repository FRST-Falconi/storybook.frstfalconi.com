///-----------------------------------------
/// Interface do Componente

declare type enumOrientation = 'horizontal' | 'vertical';
declare type enumVariant = 'primary' | 'secondary';

export interface IRating {
  /**
 * @prop {enumVariant} nota: Valor da classificação aplicada
 */
  variant?: enumVariant;
  /**
   * @prop {number} nota: Valor da classificação aplicada
   */
  rating: number;
  /**
   * @prop {boolean} isVisibleNumberRating: Exibição do valor rating
   */
  isVisibleNumberRating: boolean;
  /**
   * @prop {number} nota: Quantidade de estrelas
   */
  qtdStars: number;
  /**
   * @prop {any} handleRating: Função de manipulação da classificação
   */
  handleRating: any;
  /**
   * @prop {number} sizeStars: Tamanho das estrelas
   */
  sizeStars: number;

  /**
   * @prop {string} marginStars: Margin das estrelas
   */
  marginStars: string;

  /**
   * @prop {enumOrientation} orientation: Disposição das estrelas: horizontal ou vertical
   */
  orientation: enumOrientation;

  /**
   * @prop {boolean} disabled: Boolean para desabilitar edição
   */
  disabled: boolean;
}
