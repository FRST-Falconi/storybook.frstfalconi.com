export type ToastType = 'success' | 'error';

export interface ToastProps {
  type: ToastType;
  message: string;
  onClose?: () => void;
  showBySeconds?: number;
}