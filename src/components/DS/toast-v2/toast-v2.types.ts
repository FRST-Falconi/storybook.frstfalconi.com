export type ToastType = 'info' | 'success' | 'error' | 'warning' | 'default'

export interface ToastProps {
  type: ToastType
  message: string
  showBySeconds?: number
  styles: any
}
