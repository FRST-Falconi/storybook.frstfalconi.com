/// <reference types="react" />
interface Mentor {
    avatar: string;
    name: string;
    linkedin: string;
}
interface ModuleCardProps {
    name: string;
    start: string;
    bannerImage: string;
    description: string;
    progress?: number | null;
    variant: string;
    mentor: Mentor;
    action: () => any;
    notStarted?: boolean;
    labels: any;
}
export default function CardTrail(props: ModuleCardProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map