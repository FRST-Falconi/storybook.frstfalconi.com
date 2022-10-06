
import React from "react"

type enumStep = 'srg' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'completed';
type enumLang = 'pt-BR' | 'pt-PT' | 'en-US' | 'es';

export interface IChallengeCard {
    variant: enumStep,
    description: string,
    language?: enumLang,
    onClickView?: () => void,
    onClickNewProject?: () => void,
    onClickContinue?: () => void,
    onClickDelete?: () => void
}
