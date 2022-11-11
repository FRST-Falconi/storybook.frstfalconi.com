/// <reference types="react" />
interface IBannerProblemFeed extends stepsInfo {
    id: string;
    userAvatar?: string;
    userName: string;
    userPosition: string;
    problemTitle: string;
    problemTags?: [];
    lastUpdated?: string;
    lastUpdatedStep?: string;
    stepProblem: number;
    stepActive: number;
    textButton: string;
    onClickButton: () => void;
    onSelectedStep: (step: number) => void;
    language: 'pt-BR' | 'pt-PT' | 'en-US' | 'es';
    /** --------------------------------------------------------------------------------
    *   Interaction Feed params
    -----------------------------------------------------------------------------------*/
    avatar?: string;
    qtdLikes: string;
    qtdComments: string;
    textLikes: string;
    textDeslike: string;
    textComments: string;
    textAvaluation: string;
    isLiked: boolean;
    textAvaluationTitle: string;
    ratingImpacto: number;
    textImpacto: string;
    ratingRelevancia: number;
    textRelevancia: string;
    userCommentPlaceholder: string;
    textLatestComment: string;
    latestComment: any;
    textSaveCommentBtn: string;
    handleSaveCommentBtn?: () => any;
    onCommentChange?: () => void;
    handleLikeClick?: () => void;
    handleImpactoChange?: any;
    handleRelevanciaChange?: any;
}
interface stepsInfo {
    /**
     * Step 1 info
     */
    step1Title?: string;
    textIndicator?: string;
    indicatorValue?: string;
    textIndicatorSituation?: string;
    indicatorSituationValue?: string;
    textIndicatorObjective?: string;
    indicatorObjectiveValue?: string;
    textResultsFuture?: string;
    resultsFutureValue?: string;
    /**--------------------------------------------------------
     * Step 2 info
     */
    step2Title?: string;
    textHypotheses?: string;
    hypothesesValue?: string;
    textResponsableAction?: string;
    ResponsableActionValue?: string;
    textDate?: string;
    dateValue?: string;
    textWhatToDo?: string;
    whatToDoValue?: string;
    textSuccessAction?: string;
    successActionValue?: string;
    /**------------------------------------------------------------
     * Step 3 info
     */
    step3Title?: string;
    textTestMade?: string;
    testMadeValue?: string;
    textSuccessTest?: string;
    successTestValue?: number;
    textDownloadFiles?: string;
    handleDownloadFiles?: () => void;
    /**------------------------------------------------------------
     * Step 4 info
     */
    step4Title?: string;
    textMainAchievement?: string;
    mainAchievementValue?: string;
    textMainLearning?: string;
    mainLearningValue?: string;
    /**-------------------------------------------------------------
     * Step 5 info
     */
    step5Title?: string;
    textNextSteps?: string;
    nextStepsValue?: string;
}
export default function BannerProblemFeed(props: IBannerProblemFeed): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map