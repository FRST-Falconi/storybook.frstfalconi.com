export type ToastType = 'success' | 'error' | 'alert';

export interface ToastProps {
  type: ToastType;
  message: string;
  onClose?: () => void;
  showBySeconds?: number;
}