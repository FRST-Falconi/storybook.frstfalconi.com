/// <reference types="react" />
import '../../shared/global.css';
type iconStatus = 'warning' | 'checked';
interface TagProps {
    title: string;
    color: string;
    loading?: boolean;
    selected: boolean;
    inverted: boolean;
    iconType?: iconStatus;
    onClick?: () => void;
    /**
     * @prop {React.CSSProperties} style: Styles de CSS adicional
     */
    style?: React.CSSProperties;
}
export default function Tag(props: TagProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map