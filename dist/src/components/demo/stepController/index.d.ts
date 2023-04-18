/// <reference types="react" />
export default function StepController({ top, numberCurrentStep, numberTotalSteps, labelHome, labelContact, prevStep, nextStep, goToStart, goToContact }: {
    top?: string;
    numberCurrentStep: number;
    numberTotalSteps: number;
    labelHome: string;
    labelContact: string;
    prevStep: () => void;
    nextStep: () => void;
    goToStart: () => void;
    goToContact: () => void;
}): JSX.Element;
//# sourceMappingURL=index.d.ts.map