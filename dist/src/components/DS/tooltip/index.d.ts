/// <reference types="react" />
import { TooltipProps } from './types';
declare function Tooltip({ content, direction, children, trigger, delay, style, className, width, height, onShow, onHide, setIsActive, wrapperWidth }: TooltipProps): JSX.Element;
export default Tooltip;
export declare const TooltipV2: ({ children, content, direction, style }: {
    children: React.ReactNode;
    content: React.ReactNode;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    style?: React.CSSProperties;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map