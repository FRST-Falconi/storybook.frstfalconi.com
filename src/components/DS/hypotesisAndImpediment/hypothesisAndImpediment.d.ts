export type HypothesisAndImpedimentType = 'prioritize' | 'raised' | 'suggested'


export  interface IHypothesisAndImpedimentComponent {
    type: HypothesisAndImpedimentType
    variant: "hypothesis" | "impediment"
    description?: string
    id?: string
    avatar: string
    index: number
    userLoggedId: string
    authorGoalId: string
    authorName: string
    authorId: string
    handleViewProfile: (userId: string) => void
}

export interface VariantColorStyle { type: string, variant: string }