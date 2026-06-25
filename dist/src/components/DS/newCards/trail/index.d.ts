/// <reference types="react" />
interface Company {
    icon?: string;
    name?: string;
    uuid?: string;
}
interface trailCardProps {
    banner: string;
    trailName: string;
    company?: Company;
    handleClick: () => void;
}
export default function TrailCard({ banner, trailName, company, handleClick }: trailCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map