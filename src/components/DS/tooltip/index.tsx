import { useState, useRef, useEffect } from "react"
import { TooltipWrapper, TooltipGhost, TooltipTip } from './styles'
import { TooltipProps } from './types'

function Tooltip({
  content,
  direction,
  children,
  trigger = 'hover',
  delay = 400,
  style,
  className,
  width,
  height,
  onShow,
  onHide
}: TooltipProps ): JSX.Element {
  let shpwTimeout: any
  let hideTimeout: any
  const [active, setActive] = useState(false)
  const [renderHeight, setRenderHeight] = useState('51px')
  const ref = useRef(null)

  useEffect(() => {
    if(!ref.current || !active) return

    if(height) setRenderHeight(height)
    if(renderHeight === '51px') setRenderHeight(ref.current.clientHeight + 'px')
  }, [active])

  const showTip = () => {
    const timeoutDelay = trigger === 'click' ? 0 : delay

    shpwTimeout = setTimeout(() => {
      setActive(true)
      if(onShow) onShow({ active: true })
    }, timeoutDelay)
  }

  const hideTip = () => {
    return
    clearInterval(shpwTimeout)
    clearInterval(hideTimeout)

    hideTimeout = setTimeout(() => {
      ref.current = null
      setRenderHeight('51px')
      setActive(false)
      if(onHide) onHide({ active: false })
    }, 1000)
  }

  return (
    <TooltipWrapper
      onMouseEnter={trigger === 'hover' ? showTip : undefined}
      onMouseLeave={hideTip}
      onClick={trigger === 'click' ? showTip : undefined}
    >
      {children}
      {active && (
        <TooltipGhost
          direction={direction || 'top'}
          className={className}
          width={width || '100px'}
          height={height ? height : renderHeight || '100px'}
          ref={ref}
        >
          <TooltipTip
            direction={direction || 'top'}
            style={style}
            width={width || '100px'}
            height={height ? height : renderHeight || '100px'}
          >
            {content}
          </TooltipTip>
        </TooltipGhost>
      )}
    </TooltipWrapper>
  )
}

export default Tooltip
