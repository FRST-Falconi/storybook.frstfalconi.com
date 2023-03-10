import { useState, useRef, useEffect } from "react"
import { TooltipWrapper, TooltipTip } from './styles'
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
  onShow,
  onHide
}: TooltipProps ): JSX.Element {
  let shpwTimeout: any
  let hideTimeout: any
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('51px')
  const ref = useRef(null)

  useEffect(() => {
    if(!ref.current || !active) return

    if(height === '51px') setHeight(ref.current.clientHeight)
  }, [active])

  const showTip = () => {
    const timeoutDelay = trigger === 'click' ? 0 : delay

    shpwTimeout = setTimeout(() => {
      setActive(true)
      if(onShow) onShow({ active: true })
    }, timeoutDelay)
  }

  const hideTip = () => {
    clearInterval(shpwTimeout)
    clearInterval(hideTimeout)

    hideTimeout = setTimeout(() => {
      ref.current = null
      setHeight('51px')
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
        <TooltipTip
          direction={direction || 'top'}
          className={className}
          style={style}
          width={width || '100px'}
          height={height || '100px'}
          ref={ref}
        >
          {content}
        </TooltipTip>
      )}
    </TooltipWrapper>
  )
}

export default Tooltip
