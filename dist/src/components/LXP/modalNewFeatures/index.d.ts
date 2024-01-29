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
    onClose: () => void;
    onFinish: () => void;
    steps: TopicsNewFeatues[];
};
declare const modalNewFeatures: ({ title, open, onClose, onFinish, steps }: ModalNewFeaturesProps) => JSX.Element;
export default modalNewFeatures;
//# sourceMappingURL=index.d.ts.map