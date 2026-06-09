import React from 'react';
type TopicsNewFeatues = {
    title: string;
    description: React.ReactNode | string;
    styleImage?: React.CSSProperties;
    midia: string;
    topicName: string;
    typeMidia: 'gif' | 'video' | 'image';
};
type ModalNewFeaturesProps = {
    title: string;
    open: boolean;
    Exit?: string;
    onClose: () => void;
    onFinish?: () => void;
    onCurrentStep?: (CurrentStep: any) => void;
    steps: TopicsNewFeatues[];
};
declare const modalNewFeatures: ({ title, open, onClose, onFinish, steps, Exit, onCurrentStep }: ModalNewFeaturesProps) => import("react/jsx-runtime").JSX.Element;
export default modalNewFeatures;
//# sourceMappingURL=index.d.ts.map