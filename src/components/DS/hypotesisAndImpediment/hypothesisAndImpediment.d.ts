export type HypothesisAndImpedimentType = 'prioritize' | 'owner' | 'suggested'


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
    voteHasAlreadyBeenRegistered?: boolean
    isVotedByUserLogged?: boolean
    handleViewProfile: (authorId: string) => void
    voteText?: string
    onDeleteVote?: () => void
    onChangeVote?: (id?: string) => void
    votersList?: Voter[]
    onDeleteHipotesisOrImpediment?: (id: string) => void
    onSaveEditHipotesisOrImpediment?: (description: string) => void
    onVote?: (id: string) => void
    onPrioritize?: (id: string) => void
    onUp?: (id: string, index: number) => void
    onDown?: (id: string, index: number) => void
    hasEditHipotesisOrImpediment: boolean
    hasUpdownButtons: boolean
    onClickAction?: () => void
    onAddActions?: (id: string) => void
    hasAddActions?: boolean
    popperStyle?: React.CSSProperties;
}

export interface VariantColorStyle { type: string, variant?: string }

export type Voter = {
    avatar: string
    name: string
    userId: string
}

export interface VotingProps extends VariantColorStyle {
    voteText: string
    onDeleteVote: () => void
    onChangeVote: () => void
    onVote: () => void
    votersList: Voter[]
    voteHasAlreadyBeenRegistered: boolean
    isVotedByUserLogged: boolean
    popperStyle?: React.CSSProperties;
}