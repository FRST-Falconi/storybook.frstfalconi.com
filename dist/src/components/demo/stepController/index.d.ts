/// <reference types="react" />
declare const StepController: ({ top, numberCurrentStep, numberTotalSteps, labelHome, labelContact, prevStep, nextStep, goToStart, goToContact }: {
    top?: string;
    numberCurrentStep: number;
    numberTotalSteps: number;
    labelHome: string;
    labelContact: string;
    prevStep: () => void;
    nextStep: () => void;
    goToStart: () => void;
    goToContact: () => void;
}) => JSX.Element;
export default StepController;
//# sourceMappingURL=index.d.ts.map