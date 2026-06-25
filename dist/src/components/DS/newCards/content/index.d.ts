/// <reference types="react" />
interface Company {
    icon?: string;
    name?: string;
    uuid?: string;
}
interface cardContentProps {
    contentType: string;
    contentImage: string;
    contentDescription: string;
    company?: Company;
    enableDownload?: boolean;
    handleDownload?: () => void;
    handleClickCard?: () => void;
}
export default function CardContent({ contentType, contentImage, contentDescription, company, enableDownload, handleDownload, handleClickCard }: cardContentProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map