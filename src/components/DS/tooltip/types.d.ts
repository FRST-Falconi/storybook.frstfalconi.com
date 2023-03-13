export type TooltipProps = {
  trigger?: 'hover' | 'click'
  children?: React.ReactNode
  content?: string | React.ReactNode | JSX.Element
  delay?: number
  style?: React.CSSProperties
  className?: string
  width?: string
  height?: string
  onShow?: (event: any) => void
  onHide?: (event: any) => void
  direction?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
}
