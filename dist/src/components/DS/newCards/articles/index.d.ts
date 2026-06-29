/// <reference types="react" />
interface Company {
    icon?: string;
    name?: string;
    uuid?: string;
}
interface articlesProps {
    title: string;
    description: string;
    company: Company;
    handleClick: () => void;
}
export default function ArticleCard({ title, description, company, handleClick }: articlesProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map