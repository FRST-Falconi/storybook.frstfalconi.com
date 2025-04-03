import { useState, useRef, useEffect } from 'react'
import { TooltipWrapper, TooltipGhost, TooltipTip } from './styles'
import { TooltipProps } from './types'
import ReactDOM from 'react-dom'

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
    onHide,
    setIsActive,
    wrapperWidth
}: TooltipProps): JSX.Element {
    let shpwTimeout: any
    let hideTimeout: any
    const [active, setActive] = useState(false)
    const [renderHeight, setRenderHeight] = useState('51px')
    const ref = useRef(null)

    useEffect(() => {
        setIsActive && setIsActive(active)
        if (!ref.current || !active) return
        if (height) setRenderHeight(height)
        if (renderHeight === '51px') setRenderHeight(ref.current.clientHeight + 'px')
    }, [active])

    const showTip = () => {
        const timeoutDelay = trigger === 'click' ? 0 : delay

        shpwTimeout = setTimeout(() => {
            setActive(true)
            if (onShow) onShow({ active: true })
        }, timeoutDelay)
    }

    const hideTip = () => {
        clearInterval(shpwTimeout)
        clearInterval(hideTimeout)

        hideTimeout = setTimeout(() => {
            ref.current = null
            setRenderHeight('51px')
            setActive(false)
            if (onHide) onHide({ active: false })
        }, 1000)
    }

    return (
        <TooltipWrapper
            onMouseEnter={trigger === 'hover' ? showTip : undefined}
            onMouseLeave={hideTip}
            onClick={trigger === 'click' ? showTip : undefined}
            width={wrapperWidth}
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

export const TooltipV2 = ({
    children,
    content,
    direction = 'bottom',
    style
}: {
    children: React.ReactNode
    content: React.ReactNode
    direction?: 'top' | 'bottom' | 'left' | 'right'
    style?: React.CSSProperties
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [tooltipStyle, setTooltipStyle] = useState({})
    const triggerRef = useRef<HTMLDivElement | null>(null)

    const showTooltip = () => setIsVisible(true)
    const hideTooltip = () => setIsVisible(false)

    useEffect(() => {
        if (isVisible && triggerRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect()

            const positionStyles = {
                bottom: {
                    top: triggerRect.bottom + window.scrollY + 8,
                    left: triggerRect.left + window.scrollX + triggerRect.width / 2,
                    transform: 'translateX(-50%)'
                },
                top: {
                    top: triggerRect.top + window.scrollY - 8,
                    left: triggerRect.left + window.scrollX + triggerRect.width / 2,
                    transform: 'translateX(-50%) translateY(-100%)'
                },
                left: {
                    top: triggerRect.top + window.scrollY + triggerRect.height / 2,
                    left: triggerRect.left + window.scrollX - 8,
                    transform: 'translateX(-100%) translateY(-50%)'
                },
                right: {
                    top: triggerRect.top + window.scrollY + triggerRect.height / 2,
                    left: triggerRect.right + window.scrollX + 8,
                    transform: 'translateY(-50%)'
                }
            }

            setTooltipStyle({
                position: 'absolute',
                ...positionStyles[direction],
                ...style
            })
        }
    }, [isVisible, direction, style])

    return (
        <>
            <div
                ref={triggerRef}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                style={{
                    display: 'inline-block'
                }}
            >
                {children}
            </div>
            {isVisible &&
                ReactDOM.createPortal(
                    <div
                        style={{
                            zIndex: 9999,
                            background: '#fff',
                            border: '1px solid #ccc',
                            padding: '8px',
                            borderRadius: '4px',
                            fontFamily: 'PT Sans',
                            fontSize: '14px',
                            lineHeight: '18px',
                            fontWeight: '400',
                            color: '#757575',
                            ...tooltipStyle
                        }}
                    >
                        {content}
                    </div>,
                    document.body
                )}
        </>
    )
}
