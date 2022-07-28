import style from './MessageBox.module.css'

import SuccessIcon from './icons/successIcon'
import ErrorIcon from './icons/errorIcon'
import WarningIcon from './icons/warningIcon'
import { CloseIcon, SaveIcon } from '@shared/icons';


///-----------------------------------------
/// Interface do Componente
interface MessageBoxParams {
  texto: string;
  descricao?: string;

  hasClickExit ?: boolean;
  hasHover?: boolean;
  /**
   * @prop {number} tipoVisualizacao: Estilo de card (1- Mensagem sucesso, 2- Mensagem alerta, 3- Mensagem erro, 4- Notificação arquivo, 5- Erro Notificação arquivo)
   */
  tipoVisualizacao: number;
  /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */
  style?: React.CSSProperties;

  /**
 * @prop {() => void} onClick: Função que será executada quando houver o click do botão
 */
  onClick?: () => void

  /**
 * @prop {() => void} onClickExit: Função que será executada quando houver o click do botão de saida
 */
  onClickExit?: () => void

}

///-----------------------------------------
/// Componente

/**
 * 
 * @componente 
 */
export default function MessageBox(props: MessageBoxParams): any {

  const MapBorderColor = [
    '#2CA92A',
    '#FFC200',
    '#EA0000',
    '#757575',
    '#EA0000',
  ]

  const MapBackgroundColor = [
    '#D1F6D1',
    '#FEF0D4',
    '#FFE5E5',
    '#F2F2F2',
    '#FFE5E5',
  ]

  const MapIconList = [
    <SuccessIcon />,
    <WarningIcon />,
    <ErrorIcon />,
    <SaveIcon />,
    <SaveIcon fill='red'/>
  ]


  return (
    <div style={{position: 'relative'}}>
      <div
        className={
          props.hasHover ?
            `${props.tipoVisualizacao === 1 ? style.success
              : props.tipoVisualizacao === 2 ? style.warning
                : props.tipoVisualizacao === 3 ? style.error
                  : props.tipoVisualizacao === 4 ? style.notificacao
                    : props.tipoVisualizacao === 5 ? style.notificacaoErro
                      : ''} ${style.container}`
            :
            `${props.tipoVisualizacao === 1 ? style.successNoHover
              : props.tipoVisualizacao === 2 ? style.warningNoHover
                : props.tipoVisualizacao === 3 ? style.errorNoHover
                  : props.tipoVisualizacao === 4 ? style.notificacaoNoHover
                    : props.tipoVisualizacao === 5 ? style.notificacaoErroNoHover
                      : ''} ${style.container}`
        }
        style={{
          cursor: props.onClick ? 'pointer' : 'default',
          ...props.style
        }}
        onClick={
          props.onClick
        }
      >
        <div className={style.square} style={{ backgroundColor: MapBorderColor[props.tipoVisualizacao - 1] }}>
          {MapIconList[props.tipoVisualizacao - 1]}

        </div>
        <div style={{ display: 'inline-flex', width: 'calc(100% - 30px)' }}>
          {props.texto}
          <span> &nbsp;{props.descricao ? props.descricao : ''}</span>
        </div>
      </div>
      {props.hasClickExit &&
        <div style={{ display: 'inline-flex', position: 'absolute', right: 0, top: 0, marginRight: 32, marginTop: 16, cursor: 'pointer' }} onClick={props.onClickExit}> <CloseIcon /> </div>
      }
    </div>
  )


}