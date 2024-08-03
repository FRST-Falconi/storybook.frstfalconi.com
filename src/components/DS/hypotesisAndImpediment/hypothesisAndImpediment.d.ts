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
    hasVoting: boolean
    handleViewProfile: (authorId: string) => void
    voteText?: string
    onDeleteVote?: () => void
    votersList?: Voter[]
}

export interface VariantColorStyle { type: string, variant?: string }

export type Voter = {
    avatar: string
    name: string
    id: string
}

export interface VotingProps extends VariantColorStyle {
    voteText: string
    onDeleteVote: () => void
    votersList: Voter[]
}